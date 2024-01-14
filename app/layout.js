import Header from '@/components/header'
import { Main } from '@/styles/layout'
import '@/assets/base.css'

export const metadata = {
  title: 'Daniel Rodrigues',
  description: 'Daniel Rodrigues - Software Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <Main>{children}</Main>
      </body>
    </html>
  )
}
