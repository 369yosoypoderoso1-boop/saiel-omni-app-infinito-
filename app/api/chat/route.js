import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    // Aquí va tu LLM, por ahora respondemos algo literal.
    const reply = "Hola Emilio, SAIEL OMNI ya está online y escuchando.";

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ reply: "Error en el servidor." });
  }
}
