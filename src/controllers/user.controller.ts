import { Context } from "hono";
import { sendResponse } from "../utils/responses";

export const getUsers = (c: Context) => {
  return sendResponse(c, 201, {
    message: "Users fetched successfully",
  });
};