import "./globals.css";

export const metadata = {
  title: "StartupForge",
  description: "AI startup studio for founders and makers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
