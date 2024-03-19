import { Poppins } from 'next/font/google'
import Header from '@/components/header'
import { Main } from '@/styles/layout'
import '@/assets/base.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata = {
  title: 'Daniel Rodrigues',
  description: 'Daniel Rodrigues - Software Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <Main>{children}</Main>
      </body>
    </html>
  )
}
