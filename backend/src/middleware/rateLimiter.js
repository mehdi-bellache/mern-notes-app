import ratelimit from "../db/upstash.js";
import { StatusCodes } from "http-status-codes";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");
    if (!success) {
      return res
        .status(StatusCodes.TOO_MANY_REQUESTS)
        .json({ message: "Too many requests, please try again later" });
    }
    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
