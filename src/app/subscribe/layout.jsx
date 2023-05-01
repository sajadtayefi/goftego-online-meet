import Footer from '@/components/Footer'
import Header from '../components/Header'
import './globals.css'

export const metadata = {
  title: 'Goftego',
  description: 'Online meeting management software Conversation',
}

export default function RootLayout({ children }) {
  return (
    <html dir='rtl' lang="fa">
      <body className="bg-[#100F12] bg-my_bg_image  font-dana">
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  )
}