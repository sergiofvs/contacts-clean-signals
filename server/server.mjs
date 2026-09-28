import { createServer } from "node:http";

import { customRequest } from "./custom-request.mjs";
import { customResponse } from "./custom-response.mjs";
import { CONTACTS, ENDPOINTS } from "./db.ts";
import { Router } from "./router.mjs";

const port = 3000;
const router = new Router();

router.get("/", (_req, res) => {
  res.status(200).json({ data: ENDPOINTS });
});

router.get("/contacts", (req, res) => {
  const query = req.query;
  const { page = 1, page_size = 10 } = query;
  const startIndex = (page - 1) * page_size;
  const endIndex = startIndex + parseInt(page_size);
  const mappedResponse = {
    data: [...CONTACTS.slice(startIndex, endIndex)],
    total: CONTACTS.length,
    current_page: parseInt(page),
    page_size: parseInt(page_size),
  };

  setTimeout(() => {
    res.status(200).json(mappedResponse);
  }, 50);
});

const server = createServer(async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );

  if (request.method === "OPTIONS") {
    response.statusCode = 204;
    response.end();
    return;
  }

  const req = await customRequest(request);
  const res = customResponse(response);
  const handler = router.find(req.method, req.pathname);

  if (handler) {
    handler(req, res);
  } else {
    res.statusCode = 404;
    res.end("Não encontrado");
  }
});

server.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
