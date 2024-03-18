import "./perfoBot.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

const PerfoBot = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="perfobot_container">
      <div data-aos="fade-down">
        <h4 className="perfobot_title">My Projects</h4>
        <div className="perfobot_wrapper">
          <div className="perfobot_left">
            <div className="perfobot_left_des">
              <p className="perfobot_left_contact">
                This is my projects that are made by me while learning.There are
                just a few project that i practise while learning and after.I
                used nodemailer for reset password. For authentication,used
                jsonwebtoken and cookie.Upload image for multer and Image resize
                used for sharp and used bcrypt and crypto to hash.Learning make
                some project with nextjs and typescript.And still learn React
                Native.Hope you can see my skill with that projects.
              </p>
            </div>
          </div>
          <div className="perfobot_right">
            <div className="perfobot_right_container">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                  bulletActiveClass: "swiper-pagination-bullet-active",
                  bulletClass: "swiper-pagination-bullet",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".next",
                  prevEl: ".prev",
                }}
              >
                <SwiperSlide>
                  <div className="perfobot_right_wrapper">
                    <a
                      href={"https://buy-and-sell-app.vercel.app/user/products"}
                    >
                      <div className="perfobot_right_card">
                        <img
                          src={require("../../outsideImg/buy-sell.PNG")}
                          alt="hello"
                          className="perfobot_right_img"
                        />
                      </div>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="perfobot_right_wrapper">
                    <a href={"https://shop-ui-tau.vercel.app/"}>
                      <div className="perfobot_right_card">
                        <img
                          src={require("../../outsideImg/shopdoora.PNG")}
                          alt="hello"
                          className="perfobot_right_img"
                        />
                      </div>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="perfobot_right_wrapper">
                    <a href={"https://mern-shopping-ui.vercel.app"}>
                      <div className="perfobot_right_card">
                        <img
                          src={require("../../outsideImg/mernshop.PNG")}
                          alt="hello"
                          className="perfobot_right_img"
                        />
                      </div>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="perfobot_right_wrapper">
                    <a
                      href={"https://tictoc-ebon.vercel.app/tictocwelcome.html"}
                    >
                      <div className="perfobot_right_card">
                        <img
                          src={require("../../outsideImg/tic.PNG")}
                          alt="hello"
                          className="perfobot_right_img"
                        />
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
                <div className="slide_arrow">
                  <div className="next right_arrow ">&gt;&gt;</div>
                  <div className="prev left_arrow">&lt;&lt;</div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfoBot;
