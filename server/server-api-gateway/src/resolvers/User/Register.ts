import { User } from "../../entity/User";
import bcrypt from "bcryptjs";
import { Request } from "express";
import { sendEmail } from "../../utils/sendEmail";
import { createConfirmationUrl } from "../../utils/createConfirmationUrl";

export default {
  register: async (
    _: void,
    {
      email,
      password,
      confirm_password,
      username,
    }: {
      email: string;
      password: string;
      confirm_password: string;
      username: string;
    },
    { req }: { req: Request }
  ) => {
    /* Check Confirm Password */
    if (password != confirm_password) {
      return {
        error: {
          field: ["confirm_password"],
          message: "Confirm password doesn't match",
        },
        user: null,
      };
    }

    /* Check password length */
    if (password.length < 3) {
      return {
        error: {
          field: ["password"],
          message: "The password should be at least 3 symbols long",
        },
        user: null,
      };
    }

    /* Check if user already exist */
    const userFind = await User.findOne({ email: email });
    if (userFind) {
      return {
        error: {
          field: ["email"],
          message: "User with this email already exists",
        },
        user: null,
      };
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    }).save();

    await sendEmail(username, email, await createConfirmationUrl(user.id));

    return {
      user: user,
      error: null,
    };
  },
};
