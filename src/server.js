import express, {application} from "express";
import morgan from "morgan";

const app=express();
const logger=morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views");
app.use(logger);
app.use(express.urlencoded());  