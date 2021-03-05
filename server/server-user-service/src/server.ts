import { createConnection } from "typeorm";
import { existsSync, mkdirSync } from "fs";
import path from "path";
import express from "express";
import winston from "winston";
import { User } from "./entity/User";
import bcrypt from "bcryptjs";
import cors from "cors";
import bodyParser from "body-parser";

const server = async () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "combined.log" }),
    ],
  });

  if (process.env.NODE_ENV !== "production") {
    logger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    );
  }

  existsSync(path.join(__dirname, "../uploads")) ||
    mkdirSync(path.join(__dirname, "../uploads")); //set up save folder for files

  const app = await express(); //init express app
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());
  app.use(
    cors({
      credentials: true, // Enables HTTP cookies over CORS
      origin:
        process.env.NODE_ENV === "production"
          ? "https://api.q-terminals.com"
          : "http://localhost:7100",
    })
  );

  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [path.join(__dirname, "./entity/*")],
    synchronize: true,
  }); //connect database

  /* ------------- Routes --------------------- */

  /* Register */
  app.post("/v1/user", async (req: any, res, next) => {
    console.log("Rout user");
    console.log(req.body);

    if (!req.body.email || !req.body.email) {
      return next(new Error("Invalid body!"));
    }

    const { password, confirm_password, username, email } = req.body;

    /* Check Confirm Password */
    if (password != confirm_password) {
      return res.json({
        error: {
          field: ["confirm_password"],
          message: "Confirm password doesn't match",
        },
        user: null,
      });
    }

    /* Check password length */
    if (password.length < 3) {
      return res.json({
        error: {
          field: ["password"],
          message: "The password should be at least 3 symbols long",
        },
        user: null,
      });
    }

    /* Check if user already exist */
    const userFind = await User.findOne({ email: email });
    if (userFind) {
      return res.json({
        error: {
          field: ["email"],
          message: "User with this email already exists",
        },
        user: null,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    }).save();
    console.log("ok");
    return res.json({
      user: user,
      error: null,
    });
  });

  /* Error  */
  app.use((err: any, req: any, res: any, next: any) => {
    return res.status(500).json({
      message: err.message,
    });
  });

  app.get("/api/test", (req, res) => {
    res.send({ hello: "world" });
  });

  const PORT: any = process.env.PORT || 7000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server ready at http://0.0.0.0:${PORT}/`);
  });
};

server().catch((err) => {
  console.error(err);
});
