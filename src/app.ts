import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcastsController";
import { Routes } from "./routes/routes";
import { HTTPMethod } from "./utils/httpMethods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const [baseURL, queryString] = req.url?.split("?") ?? ["", ""];

  if (req.method === HTTPMethod.GET && baseURL === Routes.LIST) {
    await getListEpisodes(req, res);
  }

  if (req.method === HTTPMethod.GET && baseURL === Routes.EPISODES) {
    await getFilterEpisodes(req, res);
  }
};
