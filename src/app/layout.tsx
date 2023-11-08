import './globals.css'
import { VT323 } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'


const vt323 = VT323({weight:"400",subsets: ['latin']})

export const metadata = {
  title: 'sahil - portfolio',
  description: 'hello world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={vt323.className + " bg-[#E9F2FC]"}>
        <ChakraProvider>
        <Navbar />
        {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
