import "./globals.css";

export const metadata = {
  title: "Zehn Barter | زهن برتر",
  description: "AI startup studio for turning ideas into startup strategy, MVPs, and product plans — completely free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
