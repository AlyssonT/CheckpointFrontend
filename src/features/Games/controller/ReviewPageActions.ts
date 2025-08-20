import type { Params } from "react-router";

export async function reviewPageAction({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  const gameId = parseInt(params.gameId ?? "");

  if (request.method === "POST") {
    console.log("POST request received");
  } else {
    console.log("PUT request received");
  }
}
