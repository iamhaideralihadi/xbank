'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SideBar = ({user}:SiderbarProps) => {
    const pathname = usePathname();
    return (
        <section className="sidebar">
            <nav className='flex flex-col gap-4'>
                {user.firstName}
                <Link href={"/"} className='mb-12 cursor-pointer items-center gap-2'>
                    <Image src="/icons/logo.svg" alt='Logo' width={34} height={34} className='size-[24px] max-xl:size-14'/>
                    <h1 className='sidebar-logo'>X Bank</h1>
                </Link>

                {/* Sidebar Links */}
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`); 
                    return (
                        <Link href={link.route} key={link.label} className={cn('sidebar-link', { 'bg-bankGradient': isActive })}>
                        <div className='flex items-center space-x-2 p-2'>
                          <div className='relative w-6 h-6'>
                            <Image 
                              src={link.imgURL}
                              alt={link.label}
                              layout='fill'
                              objectFit='contain'
                              className={cn({ 'brightness-[3] invert-0': isActive })}
                            />
                          </div>
                          <p className={cn('sidebar-label','w-[12vw]', { '!text-white': isActive })}>{link.label}</p>
                        </div>
                      </Link>
                    )
                })}
            </nav>
        </section>
    )
}

export default SideBar
