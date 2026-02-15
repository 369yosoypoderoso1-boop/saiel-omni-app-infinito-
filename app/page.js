"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();
      setReply(data.reply);
    } catch (error) {
      setReply("Error al conectar con SAIEL OMNI.");
    }

    setLoading(false);
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>SAIEL OMNI APP</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe aquí…"
        style={{ width: "100%", height: 80, marginTop: 20 }}
      />

      <button onClick={sendMessage} style={{ marginTop: 10 }}>
        Enviar
      </button>

      <div style={{ marginTop: 30 }}>
        {loading ? "Respondiendo..." : reply}
      </div>
    </main>
  );
}        <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
          {output}
        </pre>
      )}
    </main>
  );
}
