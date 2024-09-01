'use client'
import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const MobileNavBar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image
            src='/icons/hamburger.svg'
            alt='menu'
            width={30}
            height={30}
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent side={'left'} className='border-none bg-white'>
          <Link href="/" className='cursor-pointer items-center gap-1 px-4'>
            <Image src="/icons/logo.svg" alt='Logo' width={34} height={34} className='size-[24px] max-xl:size-14' />
            <h1 className='text-26 font-ibm-plex-serif text-black-1'>X Bank</h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                {/* Sidebar Links */}
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose>
                      <Link href={link.route} key={link.label} className={cn('mobilenav-sheet_close', { 'bg-bankGradient': isActive })}>
                        <div className='flex items-center space-x-2 p-2'>
                          <div className='relative w-6 h-6'>
                            <Image 
                              src={link.imgURL}
                              alt={link.label}
                              width={20}
                              height={20}
                              className={cn({ 'brightness-[3] invert-0': isActive })}
                            />
                          </div>
                        </div>
                        <p className={cn('text-16 font-semibold text-black-2', 'w-[12vw]', { 'text-white': isActive })}>{link.label}</p>
                      </Link>
                    </SheetClose>
                  )
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNavBar
