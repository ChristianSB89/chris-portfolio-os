import React from "react";
import { portfolioData } from "./portfolioData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import {
  CtaWrapper,
  CtaBtn,
  PortfolioImg,
  PortfolioWrapper,
} from "./portfolioStyle";

const PortfolioContainer = () => {
  return (
    <PortfolioWrapper id="portfolio" className="portfolio-mobile">
      <h5>Mine prosjekter</h5>
      <h2>Portefølje</h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        className="container testimonials_container"
      >
        {portfolioData.map(
          ({ id, image, title, github, btn, demo, btnPrimary }, index) => {
            return (
              <SwiperSlide key={index}>
                <article key={id} className="portfolio_item">
                  <div className="portfolio_item-image">
                    <PortfolioImg src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <CtaWrapper>
                    <CtaBtn href={github} className="btn" target="_blank">
                      {btn}
                    </CtaBtn>
                    <CtaBtn
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      {btnPrimary}
                    </CtaBtn>
                  </CtaWrapper>
                </article>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </PortfolioWrapper>
  );
};

export default PortfolioContainer;
