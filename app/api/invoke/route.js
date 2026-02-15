import { NextResponse } from "next/server";
import OpenAI from "openai";
import { saielCore } from "../../../lib/saielCore";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
  try {
    const { input } = await req.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: saielCore },
        { role: "user", content: input }
      ]
    });

    return NextResponse.json({
      txt: completion.choices[0].message.content
    });
  } catch (error) {
    return NextResponse.json({
      txt: "Error en ejecución"
    });
  }
}
