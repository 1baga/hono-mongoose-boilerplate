import { Context, Hono } from "hono";
import { getUsers } from "../controllers/user.controller";

// you can create multiple routers for different versions of the API

const userRouterV1 = new Hono().basePath("/v1/users");
const userRouterV2 = new Hono().basePath("/v2/users");

const userRouter = new Hono()

userRouterV1.get("/", (c: Context) => {
  return getUsers(c);
});

userRouterV2.get("/", (c: Context) => {
  return getUsers(c);
});

userRouter.route("/", userRouterV1);
userRouter.route("/", userRouterV2);

export default userRouter;