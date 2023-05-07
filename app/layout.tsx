import './globals.css';

export const metadata = {
  title: 'Kurao-sosmed',
  description: 'Next Kurao Social Media App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
