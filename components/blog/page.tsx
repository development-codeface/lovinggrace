
import Loading from "@/app/loading";
import SectionWrapper from "@/components/SectionWrapper";
import HeroSection from "@/components/blog/[blog_id]/HeroSection";
import NavigationBtns from "@/components/blog/[blog_id]/NavigationBtns";
import RecentBlogs from "@/components/blog/[blog_id]/RecentBlogs";
import Layout from "@/components/layout";
import { getPageContent } from "@/libs/contents/wordpress/data";
import descriptionExtractor from "@/libs/hooks/descriptionExtractor";
import main_padding from "@/styles/padding";
import Link from "next/link";






const Page = async ({ params }: any) => {
  const blogs: BlogsType = await getPageContent("blogs");
  const data = blogs.blogs.edges.find(
    (item) => item.node.slug === params.blog_id
  );

  const index = blogs.blogs.edges.findIndex(
    (item) => item.node.slug === params.blog_id
  );

  const edges = blogs?.blogs?.edges || [];

  const buttons = [
    {
      title: "Prev",
      link: index > 0 ? `/blog/${edges[index - 1].node.slug}` : "",
    },
    {
      title: "Next",
      link: index < edges.length - 1 ? `/blog/${edges[index + 1].node.slug}` : "",
    },
  ];

  let formattedDate = "";

  if (data?.node?.date) {
    const date = new Date(data.node.date);
    if (!isNaN(date.getTime())) {
      formattedDate = date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  }

  if (!data) return <Loading />;

  return (
    <>
      <h1>hi hello blog page</h1>
      other components here
    </>
  );
};  

export default Page;
