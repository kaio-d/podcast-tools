import { IncomingMessage, ServerResponse } from "http";
import { listEpisodesService } from "../services/listEpisodesService";
import { serviceFilterEpisodes } from "../services/filterEpisodes";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await listEpisodesService();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const url = new URL(req.url ?? "", `http://${req.headers.host}`);
  
  const p = url.searchParams.get("p") ?? "";

  const content = await serviceFilterEpisodes(p);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
