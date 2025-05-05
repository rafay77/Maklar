import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText, chroma } from "@/plugins";
import Link from "next/link.js";
import SiteLogoWhite from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Maklar_logo_black from "../../../public/assets/imgs/logo/Maklar_logo_white_new.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

export default function Footer1() {
  const menuAnim = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);
  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("")
      let spanData = ''
      for (let j = 0; j < arr.length; j++) {
        if(arr[j] == ' ') {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + '</div>';
      firstParent[0].innerHTML = result
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let endTl = gsap.timeline({
          repeat: -1,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".end",
            start: "bottom 100%-=50px",
          },
        });
        gsap.set(".end", {
          opacity: 0,
        });
        gsap.to(".end", {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".end",
            start: "bottom 100%-=50px",
            once: true,
          },
        });
        let mySplitText = new SplitText(".end", { type: "words,chars" });
        let chars = mySplitText.chars;
        let endGradient = chroma.scale([
          "#F9D371",
          "#F47340",
          "#EF2F88",
          "#8843F2",
        ]);
        endTl.to(chars, {
          duration: 0.5,
          scaleY: 0.6,
          ease: "power3.out",
          stagger: 0.04,
          transformOrigin: "center bottom",
        });
        endTl.to(
          chars,
          {
            yPercent: -20,
            ease: "elastic",
            stagger: 0.03,
            duration: 0.8,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            stagger: 0.03,
            duration: 1.5,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            color: (i, el, arr) => {
              return endGradient(i / arr.length).hex();
            },
            ease: "power2.out",
            stagger: 0.03,
            duration: 0.3,
          },
          0.5
        );
        endTl.to(
          chars,
          {
            yPercent: 0,
            ease: "back",
            stagger: 0.03,
            duration: 0.8,
          },
          0.7
        );
        endTl.to(chars, {
          color: "#c9f31d",
          duration: 1.4,
          stagger: 0.05,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <footer className="footer__area-3">
        <div className="footer__top-3">
          <div className="footer__top-wrapper-3">
            <div className="footer__logo-3 pt-160">
              <Image
                priority
                style={{ width: "auto", height: "auto" ,marginTop:"8px",marginLeft:"45px",justifyContent:"center"}}
                src={Maklar_logo_black}
                alt="Footer Logo"
              />
              <p 
               style={{marginLeft:"45px",justifyContent:"center"}}

              >
When you need breakthrough strategies, count on us. When conventional approaches fail, our innovative solutions deliver. No empty promises—just measurable impact.
              </p>
            </div>
            <div className="footer__social-3">
  <ul>
    <li>
      <a
        href="https://mail.google.com/mail/?view=cm&to=maklarcreations@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span style={{ marginRight: "8px" }}>
          <i className="fa-solid fa-envelope"></i>
        </span>
        Email Us
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/maklar-creations/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span style={{ marginRight: "8px" }}>
          <i className="fa-brands fa-linkedin"></i>
        </span>
        LinkedIn
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/maklarcreations/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span style={{ marginRight: "8px" }}>
          <i className="fa-brands fa-instagram"></i>
        </span>
        Instagram
      </a>
    </li>
  </ul>
</div>

            <div className="footer__contact-3">
              <Link className="" href="/contact">
                Lets Create
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__btm-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="footer__copyright-3">
                  <p>
                  © Maklar Creations | All rights reserved 
                  </p>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="footer__nav-2">
                  <ul className="footer-menu-2 menu-anim" ref={menuAnim}>
                    <li>
                      <Link href="/about">about us</Link>
                    </li>
                    <li>
                      <Link href="/contact">contact</Link>
                    </li>
                   {/*  <li>
                      <Link href="/career">Career</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQs</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
