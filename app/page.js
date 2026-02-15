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
      setReply(data.reply ?? "Sin respuesta.");
    } catch (e) {
      setReply("Error conectando con SAIEL OMNI.");
    }

    setLoading(false);
  }

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>SAIEL OMNI APP</h1>

      <textarea
        placeholder="Escribe aquí…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          marginTop: "20px",
          padding: "10px"
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          marginTop: "15px",
          padding: "10px 20px"
        }}
      >
        Enviar
      </button>

      <pre
        style={{
          marginTop: "30px",
          whiteSpace: "pre-wrap",
          background: "#f3f3f3",
          padding: "15px",
          borderRadius: "10px"
        }}
      >
        {loading ? "Respondiendo…" : reply}
      </pre>
    </main>
  );
}        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          marginTop: "20px",
          padding: "10px"
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          marginTop: "15px",
          padding: "10px 20px"
        }}
      >
        Enviar
      </button>

      <pre
        style={{
          marginTop: "30px",
          whiteSpace: "pre-wrap",
          background: "#f3f3f3",
          padding: "15px",
          borderRadius: "10px"
        }}
      >
        {loading ? "Respondiendo…" : reply}
      </pre>
    </main>
  );
}        value={input}
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
