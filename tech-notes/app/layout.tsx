import Image from 'next/image';

import type { Metadata } from 'next';
import type {
  ReactElement,
  ReactNode
} from 'react';

import '../globals/globals.css';
import { NoteContents } from '../components/contents';


export const metadata: Metadata = {
  title: 'Testing',
  description: 'Testing...',
}

// TODO: 左邊 overflow-y
export default function RootLayout({children}: {children: ReactNode}): ReactElement{
  return (
    <html lang="en">
      <body className='flex flex-col'>
        <Nav/>
        <div className='flex flex-row grow'>
          <div className='fixed w-1/4 h-full px-12 py-2 overflow-y-auto'>
              <NoteContents/>
          </div>
          <div className='grow ms-[25%] px-12 py-2'>{children}</div>
        </div>
      </body>
    </html>
  )
}

function Nav(): ReactElement{
  return (
      <div className='sticky top-0 z-50 w-full px-12 py-2 bg-inherit opacity-95 border-b-2 border-sky-900/10'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-2 items-center'>
            <Image
              src='/tomato.png'
              height={40}
              width={40}
              alt='tomato'
            />
            <span className='text-lg font-bold'>Tomato2718 的技術筆記</span>
          </div>
          <nav className='flex flex-row h-auto' id='Navbar'>
            <ul className='flex flex-row gap-1 h-full'>
              <li><a href="/">首頁</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">聯絡我</a></li>
            </ul>
          </nav>
        </div>
      </div>
  )
}
