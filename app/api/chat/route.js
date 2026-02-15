import OpenAI from "openai";

export async function POST(request) {
  const { message } = await request.json();

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Eres SAIEL OMNI, directo, cálido y claro como Yolanda Andrade." },
      { role: "user", content: message }
    ],
    max_tokens: 200,
    temperature: 0.7
  });

  return new Response(
    JSON.stringify({
      reply: response.choices[0].message.content
    }),
    { status: 200 }
  );
}
