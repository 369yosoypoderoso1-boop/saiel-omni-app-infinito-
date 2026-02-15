import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    return NextResponse.json({
      reply: `SAIEL responde: ${message}`
    });
  } catch (error) {
    return NextResponse.json({
      reply: "Error en el servidor."
    });
  }
}
