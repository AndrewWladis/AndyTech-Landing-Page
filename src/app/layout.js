import "./globals.css";

export const metadata = {
  title: "AndyTech",
  description: "Creating innovative mobile applications that deliver exceptional user experiences and drive engagement.",
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
