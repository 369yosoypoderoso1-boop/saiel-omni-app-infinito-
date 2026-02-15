export const metadata = {
  title: "SAIEL OMNI APP INFINITO",
  description: "Tu asistente único, vivo y en expansión."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
