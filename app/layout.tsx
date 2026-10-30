export const metadata = {
  title: "StartupForge",
  description: "AI startup studio turning ideas into startup plans, product strategy, and MVPs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
