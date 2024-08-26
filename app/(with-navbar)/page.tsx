// TODO: implement landing page

import Gallery from "@/components/landing/gallery";
import Hero from "@/components/landing/hero";
import Logos from "@/components/landing/logos";
import Blog from "@/components/blog";

import { routes } from 'next-routes-list'

export default function Landing() {
    console.log(routes)

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <Gallery />
        <Blog />
        <Logos />
      </main>
    );
}