import express from "express";
import type { Express } from "express";
import cors from "cors";

function addCors(e: Express): Express {
  return e.use(cors());
}

function addBodyParser(e: Express): Express {
  return e.use(express.json()).use(express.urlencoded({ extended: true }));
}

export const app: Express = [addCors, addBodyParser].reduce(
  (ex, middleware) => middleware(ex),
  express()
);
