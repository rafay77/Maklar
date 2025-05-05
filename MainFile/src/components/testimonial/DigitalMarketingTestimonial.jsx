import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial31 from "../../../public/assets/imgs/testimonial/3/1.jpg";
import Testimonial32 from "../../../public/assets/imgs/testimonial/3/2.jpg";
import Testimonial33 from "../../../public/assets/imgs/testimonial/3/3.jpg";
import Testimonial34 from "../../../public/assets/imgs/testimonial/3/4.jpg";
import Testimonial35 from "../../../public/assets/imgs/testimonial/3/5.jpg";
import Testimonial36 from "../../../public/assets/imgs/testimonial/3/6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingTestimonial = () => {
  const testimonialArea = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".animation_image_zoom img", { opacity: 0, scale: 0.5 });

        gsap.to(".animation_image_zoom img", {
          scrollTrigger: {
            trigger: ".testimonial__area-3",
            start: "top center+=200",
            markers: false,
          },
          opacity: 1,
          scale: 1,
          x: 20,
          ease: "power2.out",
          duration: 2.5,
          stagger: {
            each: 0.3,
          },
        });
        function imageMoving(wrapper, image_list) {
          let container = wrapper;
          try {
            if (container) {
              container.addEventListener("mousemove", (e) => {
                var x = e.clientX;
                var y = e.clientY;
                let viewportWidth = window.innerWidth;
                let viewportHeight = window.innerHeight;
                let center = viewportWidth / 2;
                let centerHeight = innerHeight / 2;

                if (x > center) {
                  gsap.to(image_list, {
                    x: 15,
                    duration: 5,
                    ease: "power4.out",
                  });
                } else {
                  gsap.to(image_list, {
                    x: -15,
                    duration: 5,
                    ease: "power4.out",
                  });
                }
                if (y > centerHeight) {
                  gsap.to(image_list, {
                    y: 15,
                    duration: 5,
                    ease: "power4.out",
                  });
                } else {
                  gsap.to(image_list, {
                    y: -15,
                    duration: 5,
                    ease: "power4.out",
                  });
                }
              });
            }
          } catch (err) {
            console.log(err);
          }
        }
        imageMoving(testimonialArea.current, ".testimonial__area-3 img");
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="testimonial__area-3" ref={testimonialArea}>
      <h1 className="sec-title title-anim text-center">Testemonials</h1>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div>
                <Swiper
                  modules={[Navigation, FreeMode]}
                  spaceBetween={0}
                  slidesPerView={1}
                  freeMode={true}
                  loop={true}
                  speed={2000}
                  navigation={{
                    prevEl: ".prev-button",
                    nextEl: ".next-button",
                  }}
                  className="testimonial__slider-3"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                        I was skeptical about hiring an agency, but Maklar Creations proved me wrong! Their Google ads and influencer campaigns skyrocketed my sales and brand visibility.
                        </p>
                       {/*  <h2 className="client__name-3">Hamza Khan</h2>
                        <h3 className="client__role-3">Owner @ Blue World City</h3> */}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                        I wasn’t sure about influencer marketing for real estate, but Maklar Creations’ strategies brought me quality leads and a polished online presence.
                        </p>
                      {/*   <h2 className="client__name-3">Hamza Khalid</h2>
                        <h3 className="client__role-3">Owner @ Progency</h3> */}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                        I thought managing my store alone was enough, but their e-commerce management, packaging design, and Meta ads took my business to the next level.
                        </p>
                    {/*     <h2 className="client__name-3">Sajjad Isphani</h2>
                        <h3 className="client__role-3">Owner @ Maklar</h3> */}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                        They revamped my website and packaging design while running ads on Google and Meta. It made my restaurant the go-to spot!
                        </p>
                       {/*  <h2 className="client__name-3">Rafay Sohail</h2>
                        <h3 className="client__role-3">BDE @ Maklar</h3> */}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                        Maklar Creations nailed it with my branding and content production. Their social media management brought me consistent clients and doubled my online engagement
                        </p>
                       {/*  <h2 className="client__name-3">Taha Arshad</h2>
                        <h3 className="client__role-3">Honda City Hater</h3> */}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial__slide-3">
                        <p>
                        Maklar Creations’ creative 3D content and sleek PR campaigns gave my fashion brand the visibility I’d been dreaming of                        </p>
                       {/*  <h2 className="client__name-3">Random Nigga</h2>
                        <h3 className="client__role-3">Aspirant @ World Food Program
                           </h3> */}
                      </div>
                    </SwiperSlide>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="next-button swipper-btn"
                  >
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="prev-button swipper-btn"
                  >
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      {/*   <div className="testimonial__images-3 animation_image_zoom">
          <Image
            priority
            width={170}
            height={200}
            src={Testimonial31}
            alt="testimonial Image"
            className="testimonial3__img"
          />
          <Image
            priority
            width={90}
            height={100}
            src={Testimonial32}
            alt="testimonial Image"
            className="testimonial3__img-2"
          />
          <Image
            priority
            width={110}
            height={130}
            src={Testimonial33}
            alt="testimonial Image"
            className="testimonial3__img-3"
          />
          <Image
            priority
            width={330}
            height={430}
            src={Testimonial34}
            alt="testimonial Image"
            className="testimonial3__img-4"
          />
          <Image
            priority
            width={245}
            height={278}
            src={Testimonial35}
            alt="testimonial Image"
            className="testimonial3__img-5"
          />
          <Image
            priority
            width={140}
            height={160}
            src={Testimonial36}
            alt="testimonial Image"
            className="testimonial3__img-6"
          />
        </div> */}
      </section>
    </>
  );
};

export default DigitalMarketingTestimonial;
