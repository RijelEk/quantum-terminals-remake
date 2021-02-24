import { v4 } from "uuid";
import Redis from "ioredis";
import { confirmUserPrefix } from "../constants/redisPrefixes";

const redis = new Redis(process.env.REDIS_URL);

export const createConfirmationUrl = async (userId: number | string) => {
  const token = v4();
  await redis.set(confirmUserPrefix + token, userId, "ex", 60 * 60 * 24); // 1 day expiration

  return `https://q-terminals.local/user/confirm?${token}`;
};
