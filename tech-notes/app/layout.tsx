import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testing',
  description: 'Testing...',
}

export default function RootLayout({children}: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body className='h-screen'>
        <div className='sticky top-0 z-50 w-full h-16 px-12 py-4 debug'>
          <div className='flex flex-row justify-between debug'>
            <div>logo</div>
            <div className=''>navbar</div>
          </div>
        </div>
        <div className='flex flex-row h-full'>
          <div className='basis-1/5 h-full px-12 debug'>
            <div className='h-full debug'>
              left bar
            </div>
          </div>
          <div className='grow h-full debug'>{children}</div>
        </div>
      </body>
    </html>
  )
}
