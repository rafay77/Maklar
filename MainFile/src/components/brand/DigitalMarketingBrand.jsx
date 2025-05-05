/* import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
//import Brand1 from "../../../public/assets/imgs/brand/1.png";
import Brand1 from "../../../public/assets/imgs/prev_work/regalian.png";
import Brand2 from "../../../public/assets/imgs/prev_work/Muse_studio.png";
import Brand3 from "../../../public/assets/imgs/prev_work/sysmint.png";
//import Brand2 from "../../../public/assets/imgs/brand/2.png";
//import Brand3 from "../../../public/assets/imgs/brand/3.png";
import Brand4 from "../../../public/assets/imgs/brand/4.png";
import Brand5 from "../../../public/assets/imgs/brand/5.png";
import Brand6 from "../../../public/assets/imgs/brand/6.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger); */

/* const DigitalMarketingBrand = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      setTimeout(() => {
        let tHero = gsap.context(() => {
          gsap.set(".fade_bottom", { y: 30, opacity: 0 });

          if (device_width < 1023) {
            const fadeArray = gsap.utils.toArray(".fade_bottom");
            fadeArray.forEach((item, i) => {
              let fadeTl = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                },
              });
              fadeTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
              });
            });
          } else {
            gsap.to(".fade_bottom", {
              scrollTrigger: {
                trigger: ".fade_bottom",
                start: "top center+=300",
                markers: false,
              },
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1,
              stagger: {
                each: 0.2,
              },
            });
          }
        });
        return () => tHero.revert();
      }, 100);
    }
  }, []);
  return (
    <>
      <section className="brand__area">
        <div className="container pt-140 pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <h2 className="brand__title-3 title-anim">
              We have worked with the largest global brands              </h2>
              <div className="brand__list-3" style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
              <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={150}
                    height={120}
                    src={Brand1}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={150}
                    height={120}
                    src={Brand2}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={150}
                    height={120}
                    src={Brand3}
                    alt="Brand Logo"
                  />
                </div>
          {/*       <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={82}
                    height={70}
                    src={Brand4}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={115}
                    height={67}
                    src={Brand5}
                    alt="Brand Logo"
                  />
                </div>
                <div className="brand__item-2 fade_bottom">
                  <Image
                    priority
                    width={121}
                    height={63}
                    src={Brand6}
                    alt="Brand Logo"
                  />
                </div> }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}; */

// export default DigitalMarketingBrand;  

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Brand1 from "../../../public/assets/imgs/prev_work/regalian.svg";
import Brand2 from "../../../public/assets/imgs/prev_work/Muse_studio.svg";
import Brand3 from "../../../public/assets/imgs/prev_work/sysmint.svg";
import Brand4 from "../../../public/assets/imgs/prev_work/samtech.svg";
import Brand5 from "../../../public/assets/imgs/prev_work/progency.svg";



const DigitalMarketingBrand = () => {
  const marqueeRef = useRef(null);

  const brands = [Brand1, Brand2, Brand3,Brand4,Brand5];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".marquee-track",
        { xPercent: 0 },
        {
          xPercent: -50, // Since we duplicated the track
          ease: "linear",
          repeat: -1,
          duration: 20, // Slower scroll for smoother loop
        }
      );
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="brand__area" ref={marqueeRef}>
      <div className="container pt-140 pb-140">
        <div className="row">
          <div className="col-xxl-12">
            <h1 className="brand__title-3 title-anim" style={{ fontSize: "30px" }}>
             Brands
            </h1>

            <div
              className="marquee-wrapper"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "100%",
                position: "relative",
              }}
            >
              <div
                className="marquee-track"
                style={{
                  display: "inline-flex",
                  gap: "8rem",
                }}
              >
                {/* Duplicate the logos for seamless loop */}
                {[...brands, ...brands].map((brand, index) => {
                  const isFirstBrand = index % brands.length === 0;
                  return (
                    <div
                      className="brand__item-2"
                      key={index}
                      style={isFirstBrand ? { transform: "scale(1.2)" } : {}}
                    >
                      <Image
                        priority
                        width={isFirstBrand ? 400 : 350}
                        height={isFirstBrand ? 350 : 320}
                        src={brand}
                        alt={`Brand Logo ${index}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingBrand;


