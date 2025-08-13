import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcastsController";
import { Routes } from "./routes/routes";
import { HTTPMethod } from "./utils/httpMethods";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseURL, queryString] = req.url?.split("?") ?? ["", ""];
  

    if (req.method === HTTPMethod.GET && baseURL === Routes.LIST) {
      await getListEpisodes(req, res);
    }

    if (req.method === HTTPMethod.GET && baseURL === Routes.EPISODES) {
      await getFilterEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`);
});
