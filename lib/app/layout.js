export const metadata = {
  title: "Saiel Omni App Infinito",
  description: "Aplicación personalizada de Emilio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
