import Features from "@/components/about/features";
import Team from "@/components/about/team";
import Testimonial from "@/components/about/testimonial";

export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Testimonial />
        <Features />
        <Team />
      </main>
    );
}