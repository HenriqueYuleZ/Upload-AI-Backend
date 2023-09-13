import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPrompts } from "./routes/prompts";
import { uploadVideo } from "./routes/video";

const app = fastify();

app.register(getAllPrompts)
app.register(uploadVideo)

app.listen({
    port: 3333,
}).then(() => {
    console.log('listening on port 3333');
});