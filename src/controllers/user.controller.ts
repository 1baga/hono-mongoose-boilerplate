import { Context } from "hono";

export const getUsers = (c: Context) => {
  return new Response("Hello, Users!", {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
};