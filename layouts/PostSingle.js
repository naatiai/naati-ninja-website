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
                className="btn btn-primary z-0 mt-4 py-[14px]"
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
