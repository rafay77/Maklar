import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import Brand1 from "../../../public/assets/imgs/prev_work/regalian.svg";
import Brand2 from "../../../public/assets/imgs/prev_work/sysmint.svg";
import Brand3 from "../../../public/assets/imgs/prev_work/Muse_studio.svg";
import Brand4 from "../../../public/assets/imgs/prev_work/samtech.svg";
import Brand5 from "../../../public/assets/imgs/prev_work/progency.svg";

const ServiceBrand = () => {
  const marqueeRef = useRef(null);

  const brands = [Brand1, Brand2, Brand3, Brand4, Brand5];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".marquee-track",
        { xPercent: 0 },
        {
          xPercent: -50,
          ease: "linear",
          repeat: -1,
          duration: 20,
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

export default ServiceBrand;
