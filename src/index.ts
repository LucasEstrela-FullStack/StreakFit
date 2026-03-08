import "dotenv/config";

import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

// Declare route
fastify.get("/", async function handler() {
  return { hello: "world" };
});

// Run server
try {
  await fastify.listen({ port: Number(process.env.PORT) || 8081 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}