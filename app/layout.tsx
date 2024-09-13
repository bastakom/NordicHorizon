import './globals.scss'
import './font.css'
const Header = dynamic(() => import('./components/Header/Header'))
import Footer from './components/Footer/Footer'
import dynamic from 'next/dynamic'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
