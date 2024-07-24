import express from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import { Scene } from "./model";

const app = express();
const port = "8000";

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

ViteExpress.config({ printViteDevServerHost: true });

//ROUTES
app.get("/");
