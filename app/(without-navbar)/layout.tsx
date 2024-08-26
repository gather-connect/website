export const metadata = {
  title: 'Gather',
  description: '',
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
