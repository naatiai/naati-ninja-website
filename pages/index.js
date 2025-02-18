import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";

// import Lottie from "lottie-react";
// import manyHouses from "./../lotties/many-houses.json";
// import house from "./../lotties/make-home.json";
// import risk from "./../lotties/checkbox.json";
// import reports from "./../lotties/reports.json";
// import plantMoney from "./../lotties/plant-money.json";
// import aiCycle from "./../lotties/ai-cycle.json";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  // Utility function to set animation options
  // const defaultOptions = (customAnimationData) => {
  //   return {
  //     loop: true,
  //     autoplay: true,
  //     animationData: customAnimationData,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };
  // };

  // Function to get the correct animation data
  // const getAnimation = (slide) => {
  //   switch (slide) {
  //     case "many-houses":
  //       return manyHouses;
  //     case "house":
  //       return house;
  //     case "risk":
  //       return risk;
  //     case "reports":
  //       return reports;
  //     case "ai-cycle":
  //       return aiCycle;
  //     case "plant":
  //       return plantMoney;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">{banner.title}</h1>
              <p className="mt-4">{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                  target="_blank"
                >
                  {banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12"
                src={banner.image}
                width={700}
                height={390}
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="section bg-theme-light">
        <div className="container">
          <div
            className="mx-auto rounded-xl bg-gray-50 p-3 shadow-md"
            style={{ maxWidth: "700px" }}
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ukdX_xQUVUI?si=R2wCQrKidSZgQFB7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* Features */}
      <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={55}
                    height={55}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel ${isOdd && "md:order-1"}`}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      service.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    init={service?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {service?.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image
                        className="ml-1"
                        src={slide}
                        width={350}
                        height={250}
                        alt="arrow"
                      />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${
                    !isOdd && "md:order-1"
                  }`}
                >
                  <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                  <p className="mb-2 mt-4">{service?.content}</p>
                  {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {service?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Cta */}
      <Cta cta={call_to_action} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
