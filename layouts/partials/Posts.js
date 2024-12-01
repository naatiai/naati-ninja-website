import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
  const { blog_folder, summary_length } = config.settings;
  return (
    <div className="section pb-0">
      <div className="pb-12 lg:pb-24">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            {posts[0].frontmatter.image && (
              <div className="relative overflow-hidden rounded-lg pb-[56.25%]">
                <Image
                  className="absolute h-full w-full object-cover"
                  src={posts[0].frontmatter.image}
                  alt={posts[0].frontmatter.title}
                  layout="fill"
                  priority={true}
                />
              </div>
            )}
          </div>
          <div className="mt-4 w-full px-4 md:mt-0 md:w-1/2">
            <h2 className="mb-2 text-2xl font-semibold">
              <Link
                href={`/${blog_folder}/${posts[0].slug}`}
                className="hover:text-primary"
              >
                {posts[0].frontmatter.title}
              </Link>
            </h2>
            <p className="text-gray-700">
              {plainify(
                posts[0].content?.slice(0, Number(summary_length)),
                "div"
              )}
            </p>
            <Link
              className="btn btn-primary z-0 mt-4 py-[14px]"
              href={`/${blog_folder}/${posts[0].slug}`}
              rel=""
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex flex-wrap">
        {posts.slice(1).map((post, i) => (
          <div key={`key-${i}`} className="mb-8 w-full px-4 sm:w-1/2 lg:w-1/3">
            {post.frontmatter.image && (
              <div className="relative overflow-hidden rounded-lg pb-[56.25%]">
                <Image
                  className="absolute h-full w-full object-cover"
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  layout="fill"
                />
              </div>
            )}
            <h2 className="mb-2 mt-4 text-xl font-semibold">
              <Link
                href={`/${blog_folder}/${post.slug}`}
                className="hover:text-primary"
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <p className="text-gray-700">{post.frontmatter.desc}</p>
            <Link
              className="hover:border-1 mt-4 inline-flex cursor-pointer items-center rounded-md bg-gradient-to-r from-[#099f9e] to-[#f7941e] px-4 py-2 text-lg font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:rounded-lg hover:from-white hover:to-white hover:text-[#099f9e]"
              href={`/${blog_folder}/${post.slug}`}
              rel=""
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
