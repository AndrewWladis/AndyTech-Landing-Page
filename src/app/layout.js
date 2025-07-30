import "./globals.css";

export const metadata = {
  title: "AndyTech",
  description: "Maximum Performance. Maximum Effort.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
