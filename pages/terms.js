import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Base from "layouts/Baseof";

const PostSingle = ({ frontmatter, children }) => {
  return (
    <article>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date).toLocaleDateString()}
        </time>
      </header>
      <section>{children}</section>
    </article>
  );
};

const Terms = ({ frontmatter, mdxSource }) => {
  return (
    <Base
      title="Terms and Conditions"
      description="Terms and Conditions"
    >
      <section className="section">
        <div className="container">
          <div className="row">
            <article className="col-12 mx-auto text-center md:col-8">
              <div className="content mb-16 text-left">
                <PostSingle frontmatter={frontmatter}>
                  <MDXRemote {...mdxSource} />
                </PostSingle>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Base>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "content/legal/terms.md");
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  // Convert date to string to ensure it is serializable
  const serializedData = {
    ...data,
    date: data.date ? data.date.toISOString() : null,
  };

  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter: serializedData,
      mdxSource,
    },
  };
};

export default Terms;
