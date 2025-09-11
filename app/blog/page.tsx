import Loading from "@/app/loading";
import { getPageContent } from "@/libs/contents/wordpress/data";
import Link from "next/link";
import Image from "next/image";

const Page = async () => {
  const blogs: BlogsType = await getPageContent("blogs");

  if (!blogs) return <Loading />;

  const edges = blogs.blogs.edges || [];

  return (
    <div className="xl:px-28 lg:px-24 sm:px-16 px-6 w-full flex flex-col mt-[100px] blog-details flex-1">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {edges.map(({ node }) => {
          const {
            slug,
            title,
            date,
            author,
            acf: { bannerImage, content },
          } = node;

          return (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={bannerImage.sourceUrl}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  By {author.node.name} • {new Date(date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {content.replace(/<[^>]+>/g, "")}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
