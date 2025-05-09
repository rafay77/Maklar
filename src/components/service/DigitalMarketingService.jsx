import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "@/plugins";
import Image from "next/image";
import MyImage from "../../../public/assets/imgs/service/Services_imgs/new/Branding.svg"; // adjust path
import Content from "../../../public/assets/imgs/service/Services_imgs/new/Content Creation.svg"; // adjust path
import Ecom from "../../../public/assets/imgs/service/Services_imgs/new/Ecommarketing.svg"; // adjust path
import Influencer from "../../../public/assets/imgs/service/Services_imgs/new/Influencer.svg"; // adjust path
import packaging from "../../../public/assets/imgs/service/Services_imgs/new/packaging.svg"; // adjust path
import Performance from "../../../public/assets/imgs/service/Services_imgs/new/Performance.svg"; // adjust path
import SM from "../../../public/assets/imgs/service/Services_imgs/new/SM.svg"; // adjust path
import Web from "../../../public/assets/imgs/service/Services_imgs/new/Web.svg"; // adjust path


import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const DigitalMarketingService = () => {
  const router = useRouter();
  
  useEffect(() => {
    const id = window.location.hash?.substring(1);
    if (!id) return;
  
    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (el) {
        // Scroll with GSAP instead of scrollIntoView
        gsap.to(window, {
          scrollTo: { y: el, offsetY: 100 }, // adjust offset if there's a sticky header
          duration: 1.0,
          ease: "power2.out",
        });
      }
    };
    const timer = setTimeout(scrollToSection, 1000); // ensure all GSAP triggers are set
  
    return () => clearTimeout(timer);
  }, [router.asPath]);

  const serviceList = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      imageAnimation(serviceList.current.children);
      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });

          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  const imageAnimation = (data) => {
    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    for (let i = 0; i < data.length; i++) {
      data[i].addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, data[i]), 1000);
      });
    }
  };

  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h3 className="sec-title title-anim">
                   Services
                </h3>
                <p>
                  Consumers today rely heavily on digital means to research
                  products. We research a brand of bldend engaging with it,
                  according to the meanwhile, 51% of consumers say they use
                  Google to research products before buying.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3" ref={serviceList}>
                <div id="branding" className="service__item-3 service_animation">
                  <h3>
                  <div className="service__title-3">
                    Branding  <br />
                  </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Crafting visually compelling brand identities and graphic assets that reflect your business core values and enhance recognition.
                    </p>
                  {/*   <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul> */}
                  </div>
                  <div className="service__btn-3">
            <div className="btn_wrapper">
              <Image
                src={MyImage}
                alt="Service Button Image"
                width={400} // square dimensions
                height={250}
                style={{ borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
              />
            </div>
          </div>

                  <div
                    className="service__hover-3"
                    style={{
                      // backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                <div id="performance" className="service__item-3 service_animation">
                  <h3>
                    <div className="service__title-3 ">
                    Performanace                     <br />
                    Marketing
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Strategically managing and optimizing ad campaigns across Meta, Google, and LinkedIn to drive targeted traffic and conversions.
                    </p>
                   {/*  <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul> */}
                  </div>
                  <div className="service__btn-3">
                  <div className="btn_wrapper">
              <Image
                src={Performance}
                alt="Service Button Image"
                width={400} // square dimensions
                height={250}
                style={{ borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
              />
            </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
/*                       backgroundImage: "url(assets/imgs/service/3/2.png)",
 */                    }}
                  ></div>
                </div>

                <div id="SM" className="service__item-3 service_animation">
                  <h3 className="">
                    <div className="service__title-3">
                    Social Media Management  <br />
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Establishing and managing your social media presence to build community engagement and brand awareness.
                    </p>
                    {/* <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul> */}
                  </div>
                  <div className="service__btn-3">
                  <div className="btn_wrapper">
              <Image
                src={SM}
                alt="Service Button Image"
                width={400} // square dimensions
                height={250}
                style={{ borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
              />
            </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
/*                       backgroundImage: "url(assets/imgs/service/3/3.png)",
 */                    }}
                  ></div>
                </div>

                <div id="content" className="service__item-3 service_animation">
                  <h3 className="">
                    <div className="service__title-3">
                    Content <br />
                    Creation 
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Developing tailored content plans that align with your brand goals, audience, and marketing channels for maximum impact.
                    </p>
                   {/*  <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul> */}
                  </div>
                  <div className="service__btn-3">
                  <div className="btn_wrapper">
              <Image
                src={Content}
                alt="Service Button Image"
                width={400} // square dimensions
                height={250}
                style={{ borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
              />
            </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      // backgroundImage: "url(assets/imgs/service/3/4.png)",
                    }}
                  ></div>
                </div>

                <div id="influencer" className="service__item-3 service_animation">
                  <h3 className="">
                    <div className="service__title-3">
                    Influencer <br />
                    Marketing
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Connecting your brand with the right influencers to authentically promote your products and increase reach.
                  </p>
                   {/*  <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul> */}
                  </div>
                  <div className="service__btn-3">
                  <div className="btn_wrapper">
              <Image
                src={Influencer}
                alt="Service Button Image"
                width={400} // square dimensions
                height={250}
                style={{ borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
              />
            </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      // backgroundImage: "url(assets/imgs/service/3/4.png)",
                    }}
                  ></div>
                </div>

                <div id="web" className="service__item-3 service_animation">
                  <h3 className="">
                    <div className="service__title-3">
                    Website <br />
                    Development 
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Designing and developing responsive, user-centric websites that reflect your brand and drive online success.
                    </p>
                   {/*  <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul> */}
                  </div>
                  <div className="service__btn-3">
                  <div className="btn_wrapper">
              <Image
                src={Web}
                alt="Service Button Image"
                width={400} // square dimensions
                height={250}
                style={{ borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
              />
            </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      // backgroundImage: "url(assets/imgs/service/3/4.png)",
                    }}
                  ></div>
                </div>

                <div id="ecom" className="service__item-3 service_animation">
                  <h3 className="">
                    <div  className="service__title-3">
                    E-Commerce <br />
                    Management 
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Handling all aspects of your online store—from inventory to promotions—to ensure smooth operations and sales growth.                    </p>
                   {/*  <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul> */}
                  </div>
                  <div className="service__btn-3">
                  <div className="btn_wrapper">
              <Image
                src={Ecom}
                alt="Service Button Image"
                width={400} // square dimensions
                height={250}
                style={{ borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
              />
            </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      // backgroundImage: "url(assets/imgs/service/3/4.png)",
                    }}
                  ></div>
                </div>


                <div id="packaging" className="service__item-3 service_animation">
                  <h3 className="">
                    <div className="service__title-3">
                    Packaging  <br />
                    & Design 
                    </div>
                  </h3>
                  <div className="service__content-3">
                    <p>
                    Creating innovative packaging solutions that not only protect your product but also enhance shelf appeal and brand identity.</p>
                   {/*  <ul className="">
                      <li>+ Logo Design</li>
                      <li>+ Advertisement</li>
                      <li>+ Promotion</li>
                    </ul> */}
                  </div>
                  <div className="service__btn-3">
                  <div className="btn_wrapper">
              <Image
                src={packaging}
                alt="Service Button Image"
                width={400} // square dimensions
                height={250}
                style={{ borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
              />
            </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      // backgroundImage: "url(assets/imgs/service/3/4.png)",
                    }}
                  ></div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;
