import "./globals.css";

export const metadata = {
  title: "AndyTech | Freelance Web & App Builds",
  description: "Freelance websites, mobile MVPs, and product interfaces by Andy Wladis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="smooth-scroll">
        {children}
      </body>
    </html>
  );
}
