import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Bell, ArrowDownRight } from 'lucide-react'
import Link from 'next/link'

const ComingSoon = () => {
    return (
        <section className='py-8'>
            <div className='container'>
                <Badge
                    variant='outline'
                    className='mb-4 max-w-full text-sm font-normal lg:mb-10 lg:py-2 lg:pl-2 lg:pr-5'
                >
                    <span className='mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent'>
                        <Bell className='size-4' />
                    </span>
                    <p className='truncate whitespace-nowrap'>
                        Stay tuned for its release!
                    </p>
                </Badge>
                <h1 className='mb-6 text-4xl font-bold leading-none tracking-tighter md:text-[7vw] lg:text-8xl'>
                    Under construction.
                </h1>
                <p className='max-w-2xl text-muted-foreground md:text-[2vw] lg:text-xl'>
                    We're hard at work building this platform. Please check out our changelog and roadmap in the meantime.
                </p>
                <div className='mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10'>
                    <Link href="/changelog">
                        <Button className='w-full sm:w-auto'>
                            Changelog
                        </Button>
                    </Link>
                    <Link href="/roadmap">
                        <Button
                            variant='outline'
                            className='w-full sm:w-auto'
                        >
                            Roadmap
                            <ArrowDownRight className='ml-2 size-4' />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon
