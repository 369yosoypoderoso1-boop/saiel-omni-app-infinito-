export const metadata = {
  title: "Saiel Omni App",
  description: "Sistema personal"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
    }
