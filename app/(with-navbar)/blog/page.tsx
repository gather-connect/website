// TODO: implement coming soon page for our Blog
import Blog from "@/components/blog";
import ComingSoon from "@/components/under_construction/coming_soon";

export default function Posts() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ComingSoon />
      </main>
    );
}