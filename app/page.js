"use client";

import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  async function send() {
    const r = await fetch("/api/invoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input })
    });

    const data = await r.json();
    setOutput(data.txt);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>SAIEL OMNI APP</h1>

      <textarea
        style={{ width: "100%", height: 120 }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={send} style={{ marginTop: 20 }}>
        Ejecutar
      </button>

      {output && (
        <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
          {output}
        </pre>
      )}
    </main>
  );
}
