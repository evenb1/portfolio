import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "Russom",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
