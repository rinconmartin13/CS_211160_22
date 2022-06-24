import express from "express";
// import { status } from 'express/lib/response';
import { api } from "./config/config.js";
import cors from "cors";
import user from "./router/user.js";
import son from "./router/userSons.js";
import father from "./router/userFathers.js";
import register from "./router/register.js";
import image from "./router/images.js";

const app = express();

//ROUTERS
app.use("/api/user", user);
// ---------------------------------
app.use("/api/son", son);
app.use("/api/father", father);
app.use("/api/register", register);
app.use("/api/image", image);

app.use(cors({ origin: true, credentials: false }));
//SERVIDOR ACTIVO
app.listen(api.port, () => {
  console.log("servidor corriendo en el puerto => ", api.port);
});
