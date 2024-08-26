import { Separator } from '@/components/ui/separator'
import {
    FaApple,
    FaGooglePlay,
    FaInstagram,
    FaTiktok,
    FaTwitter,
} from 'react-icons/fa'

const sections = [
    {
        title: 'Product',
        links: [
            { name: 'Overview', href: '#' },
            { name: 'Features', href: '#' },
            { name: 'Changelog', href: '#' },
            { name: 'Roadmap', href: '#' }
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Contact', href: '#' },
            { name: 'Privacy', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'Help', href: '#' },
            { name: 'Sales', href: '#' },
            { name: 'Advertise', href: '#' },
        ],
    },
]

const Footer = () => {
    return (
        <section className='py-4'>
            <div className='container'>
                <footer>
                    <div className='flex flex-col justify-between gap-4 md:flex-row md:items-center'>
                        <div className='flex flex-col gap-4 md:flex-row md:items-center'>
                            <p className='text-lg font-medium'>
                                Get on Android or iOS today.
                            </p>
                            <div className='flex gap-2'>
                                <a
                                    href='https://play.google.com/store/apps/details?id=com.GatherConnect.Gather&hl=en_US&pli=1'
                                    className='inline-flex rounded-lg bg-primary p-2.5 justify-center items-center'
                                >
                                    <FaGooglePlay className='size-7 text-background' />
                                </a>
                                <a
                                    href='https://apps.apple.com/us/app/gather-discover-campus-events/id6471381908'
                                    className='inline-flex rounded-lg bg-primary p-2.5 justify-center items-center'
                                >
                                    <FaApple className='size-7 text-background' />
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <Separator className='my-16' />
                    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className='mb-4 font-bold'>
                                    {section.title}
                                </h3>
                                <ul className='space-y-4 text-muted-foreground'>
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className='font-medium hover:text-primary'
                                        >
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div>
                            <h3 className='mb-4 font-bold'>Legal</h3>
                            <ul className='space-y-4 text-muted-foreground'>
                                <li className='font-medium hover:text-primary'>
                                    <a href='#'>Term of Services</a>
                                </li>
                                <li className='font-medium hover:text-primary'>
                                    <a href='#'>Privacy Policy</a>
                                </li>
                            </ul>
                            <h3 className='mb-4 mt-8 font-bold'>Social</h3>
                            <ul className='flex space-x-6 text-muted-foreground items-center'>
                                <li className='font-medium hover:text-primary'>
                                    <a href='#'>
                                        <FaInstagram className='size-6' />
                                    </a>
                                </li>
                                <li className='font-medium hover:text-primary'>
                                    <a href='#'>
                                        <FaTiktok className='size-6' />
                                    </a>
                                </li>
                                <li className='font-medium hover:text-primary'>
                                    <a href='#'>
                                        <FaTwitter className='size-6' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Separator className='my-14' />
                    <p className='text-sm text-muted-foreground'>
                        © 2024 Gather. All rights reserved.
                    </p>
                </footer>
            </div>
        </section>
    )
}

export default Footer
