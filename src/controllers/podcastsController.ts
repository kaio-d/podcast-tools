import { IncomingMessage, ServerResponse } from "http";
import { listEpisodesService } from "../services/listEpisodesService";
import { serviceFilterEpisodes } from "../services/filterEpisodes";
import { ContentType } from "../utils/contentType";
import { ResponsePodcastModel } from "../models/responsePodcastModel";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: ResponsePodcastModel = await listEpisodesService();
  res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  res.write(JSON.stringify(content.body));
  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const url = new URL(req.url ?? "", `http://${req.headers.host}`);

  const p = url.searchParams.get("p") ?? "";

  const content = await serviceFilterEpisodes(p);

  res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  res.write(JSON.stringify(content.body));
  res.end();
};
