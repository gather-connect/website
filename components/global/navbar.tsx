import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
      <section className='py-4'>
            <div className='container'>
                <nav className='hidden justify-between lg:flex'>
                  <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <Image
                                src='../../images/header_logo.svg'
                                width={32}
                                height={32}
                                alt='logo'
                            />
                            <span className='text-xl font-bold'>
                                Gather
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <a
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'ghost',
                                    }),
                                )}
                                href='/'
                            >
                                Overview
                            </a>
                            <a
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'ghost',
                                    })
                                )}
                                href="/api"
                            >
                                API
                            </a>
                            <a
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'ghost',
                                    })
                                )}
                                href="/about"
                            >
                                About
                            </a>
                            <a
                                className={cn(
                                    'text-muted-foreground',
                                    navigationMenuTriggerStyle,
                                    buttonVariants({
                                        variant: 'ghost',
                                    })
                                )}
                                href="/blog"
                            >
                                Blog
                            </a>
                        </div>
                  </div>
                    <div className="flex gap-2">
                        <Link href="/auth">
                            <Button variant={'outline'}>Log in</Button>
                        </Link>
                        <Link href="/get_app">
                            <Button className='bg-[#6495ED]'>
                                Get the app
                            </Button>
                        </Link>
                    </div>
                </nav>
          </div>
      </section>
  )
}

export default Navbar