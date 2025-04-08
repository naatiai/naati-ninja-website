import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";
import Base from "./Baseof";

const Default = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, meta_title, description, image, noindex, canonical } = frontmatter;
  return (
    <Base
      title={title}
      meta_title={meta_title}
      description={description}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "h2 mb-8 text-center")}
          <div className="content">
            <MDXRemote {...mdxContent} components={shortcodes} />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Default;
