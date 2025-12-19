import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f7fa] text-gray-900">
        {children}
      </body>
    </html>
  );
}
