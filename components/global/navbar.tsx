import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Navbar = () => {
  return (
      <section className='py-4'>
            <div className='container'>
                <nav className='hidden justify-between lg:flex'>
                  <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='../../images/header_logo.svg'
                                className='w-8'
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
                    <div className='flex gap-2'>
                        <Link href="/auth">
                            <Button variant={'outline'}>Log in</Button>
                        </Link>
                        <Button className='bg-[#6495ED]'>
                            Get the app
                        </Button>
                    </div>
                </nav>
          </div>
      </section>
  )
}

export default Navbar