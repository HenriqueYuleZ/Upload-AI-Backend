import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPrompts } from "./routes/prompts";

const app = fastify();

app.register(getAllPrompts)

app.listen({
    port: 3333,
}).then(() => {
    console.log('listening on port 3333');
});