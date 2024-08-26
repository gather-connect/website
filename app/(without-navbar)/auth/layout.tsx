import "../../globals.css";

export const metadata = {
  title: 'Gather',
  description: 'Login page for Gather users',
  icons: {
    icon: "../../favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
