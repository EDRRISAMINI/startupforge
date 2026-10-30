import "./globals.css";

export const metadata = {
  title: "StartupForge",
  description: "AI startup studio turning ideas into startup plans, product strategy, and MVPs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
