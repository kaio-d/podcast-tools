import { IncomingMessage, ServerResponse } from "http";
import { listEpisodesService } from "../services/listEpisodesService";
import { serviceFilterEpisodes } from "../services/filterEpisodes";
import { StatusCode } from "../utils/statusCode";
import { ContentType } from "../utils/contentType";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await listEpisodesService();
  res.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const url = new URL(req.url ?? "", `http://${req.headers.host}`);

  const p = url.searchParams.get("p") ?? "";

  const content = await serviceFilterEpisodes(p);

  res.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON });
  res.end(JSON.stringify(content));
};
