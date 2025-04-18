import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import Faq from "@layouts/Faq";
import Pricing from "@layouts/Pricing";
import { getRegularPage, getSinglePage } from "@lib/contentParser";

// for all regular pages
const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;

  return (
    <>
      {layout === "404" ? (
        <NotFound data={data}
          title={title}
          description={description ? description : content.slice(0, 120)}
          meta_title={meta_title}
          image={image}
          noindex={noindex}
          canonical={canonical} />
      ) : layout === "contact" ? (
        <Contact data={data}
          title={title}
          description={description ? description : content.slice(0, 120)}
          meta_title={meta_title}
          image={image}
          noindex={noindex}
          canonical={canonical} />
      ) : layout === "pricing" ? (
        <Pricing data={data}
          title={title}
          description={description ? description : content.slice(0, 120)}
          meta_title={meta_title}
          image={image}
          noindex={noindex}
          canonical={canonical} />
      ) : layout === "faq" ? (
        <Faq data={data}
          title={title}
          description={description ? description : content.slice(0, 120)}
          meta_title={meta_title}
          image={image}
          noindex={noindex}
          canonical={canonical} />
      ) : (
        <Default data={data}
          title={title}
          description={description ? description : content.slice(0, 120)}
          meta_title={meta_title}
          image={image}
          noindex={noindex}
          canonical={canonical} />
      )}
    </>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const allslugs = getSinglePage("content");
  const slugs = allslugs.map((item) => item.slug);
  const paths = slugs.map((slug) => ({
    params: {
      regular: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const regularPage = await getRegularPage(regular);

  return {
    props: {
      slug: regular,
      data: regularPage,
    },
  };
};
