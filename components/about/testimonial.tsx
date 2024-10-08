import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Testimonial = () => {
    return (
        <section className='py-36'>
            <div className='container'>
                <div className='text-center'>
                    <div className='text-3xl font-bold md:text-5xl lg:text-7xl'>
                        <p className='flex flex-wrap items-center justify-center'>
                            Ticket your
                            <span className='mx-4 inline-flex items-center -space-x-4'>
                                <Avatar className='size-11 border lg:size-16'>
                                    <AvatarImage
                                        src='https://www.shadcnblocks.com/images/block/avatar-1.webp'
                                        alt='placeholder'
                                    />
                                </Avatar>
                                <Avatar className='size-11 border lg:size-16'>
                                    <AvatarImage
                                        src='https://www.shadcnblocks.com/images/block/avatar-6.webp'
                                        alt='placeholder'
                                    />
                                </Avatar>
                                <Avatar className='size-11 border lg:size-16'>
                                    <AvatarImage
                                        src='https://www.shadcnblocks.com/images/block/avatar-3.webp'
                                        alt='placeholder'
                                    />
                                </Avatar>
                            </span>
                            events. Hassle-free.
                        </p>
                    </div>
                    <Link href="/get_app">
                        <Button size={'lg'} className='mt-10'>
                            Get started for free
                        </Button>
                    </Link>                  
                </div>
            </div>
        </section>
    )
}

export default Testimonial
