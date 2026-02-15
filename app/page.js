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
