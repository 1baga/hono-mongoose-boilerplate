import { Context } from "hono";

export const sendResponse = (c: Context, status: number, data: any) => {
  c.status(status as any);

  return c.json({
    code: status,
    status: "success",
    data
  });
};