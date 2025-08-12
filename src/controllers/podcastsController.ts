import { IncomingMessage, ServerResponse } from "http";
import { listEpisodesService } from "../services/listEpisodesService";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await listEpisodesService();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
