import "../../global.css";

export const metadata = {
  title: "Roost code task",
  description: "Transactions app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="lofi">
      <body>{children}</body>
    </html>
  );
}
