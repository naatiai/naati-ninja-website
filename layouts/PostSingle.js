import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Base from "./Baseof";
import Link from "next/link";

const PostSingle = ({ frontmatter, content, mdxContent }) => {
  let { description, title, image } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <Base title={title} description={description}>
      <section className="section">
        <div className="container">
          <div className="row">
            <article className="col-12 mx-auto text-center md:col-8" z>
              {image && (
                <Image
                  src={image}
                  height="500"
                  width="1000"
                  alt={title}
                  priority={true}
                  layout="responsive"
                  className="rounded-lg"
                />
              )}
              {markdownify(title, "h1", "h2 mb-6 mt-6 text-left")}

              <div className="content mb-16 text-left">
                <MDXRemote {...mdxContent} components={shortcodes} />
              </div>
              <Link
                className="hover:border-1 mt-4 inline-flex cursor-pointer items-center rounded-md bg-gradient-to-r from-[#099f9e] to-[#f7941e] px-4 py-2 text-lg font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:rounded-lg hover:from-white hover:to-white hover:text-[#099f9e]"
                href="/blogs/"
                rel=""
              >
                Back to Blogs
              </Link>
            </article>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
