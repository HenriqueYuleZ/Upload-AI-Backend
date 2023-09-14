import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { getAllPrompts } from "./routes/prompts";
import { getVideos, uploadVideo } from "./routes/video";
import { createTranscription } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify();

app.register(fastifyCors, {
    origin: '*',
});

app.register(getAllPrompts)
app.register(uploadVideo)
app.register(getVideos);
app.register(createTranscription)
app.register(generateAICompletionRoute)

app.listen({
    port: 3333,
}).then(() => {
    console.log('listening on port 3333');
});