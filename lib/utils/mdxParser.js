import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from 'unist-util-visit';

// mdx content parser
export const parseMDX = async (content) => {
  const options = {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        () => {
          return (tree) => {
            visit(tree, 'element', (node) => {
              if (node.tagName === 'img' && !node.properties.alt) {
                node.properties.alt = 'image';
              }
            });
          };
        },
      ],
      remarkPlugins: [remarkGfm],
    },
  };
  return await serialize(content, options);
};
