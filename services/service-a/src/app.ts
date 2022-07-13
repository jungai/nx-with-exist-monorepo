import { app } from "express-app";
import { TNo1KPOP } from "types";

// for topological deps
export const no1: TNo1KPOP = {
  song: "bibi",
  name: "IU",
};

app.get("/", (_req, res) => {
  res.send(`hello this is service A -> ${no1.name} ${no1.song} ❤️`);
});

export { app };
