// TODO: fix routing issue with buttons

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowDownRight } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="py-16">
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <Badge variant="outline">
                            v1.0.6 is out!
                            <ArrowDownRight className="ml-2 size-4" />
                        </Badge>
                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                            Welcome to Our Corner of the Internet!
                        </h1>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            We're glad you're here! Make sure to visit the changelog to see what
                            updates we've made or propose new features you'd like to see in the mobile 
                            app on the roadmap. Enjoy!
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Link href="/changelog">
                                <Button className="w-full sm:w-auto">
                                    Changelog
                                </Button>
                            </Link>
                            <Link href="/roadmap">
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto"
                                >
                                    Roadmap
                                    <ArrowDownRight className="ml-2 size-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <img
                        src="../../images/heyyy.svg"
                        alt="placeholder hero image"
                        className="max-h-96 w-full rounded-md object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
