import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
//import logoMaklar from "../../../public/assets/imgs/logo/Maklar_logo_black.png";
import logoMaklar from "../../../public/assets/imgs/logo/Maklar_logo_white_new.png";
import Shape11 from "../../../public/assets/imgs/shape/11.png";
import Shape12 from "../../../public/assets/imgs/shape/12.png";
import Image from "next/image";

const Canvas = ({ bladeMode = "", ofCanvasArea }) => {
  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);
  const headerTitle = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        let rootParent = headerTitle.current.children;
        for (let i = 0; i < rootParent.length; i++) {
          let firstParent = rootParent[i].children;
          for (let j = 0; j < firstParent.length; j++) {
            if (firstParent[j].className.includes("header_title")) {

              let arr = firstParent[j].children[0].textContent.split("");
              let spanData = "";
              for (let k = 0; k < arr.length; k++) {
                if (arr[k] == " ") {
                  spanData += `<span style='width:2vw;'>${arr[k]}</span>`;
                } else {
                  spanData += `<span>${arr[k]}</span>`;
                }
              }
              let result = '<div class="menu-text">' + spanData + "</div>";
              firstParent[j].children[0].innerHTML = result;
            }
          }
        }
      }, 10);
    }
  }, []);
  const openData = (data) => {
    setAccordion(data);
  };
  const openSubData = (data) => {
    setSubAccordion(data);
  };
  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
    if (bladeMode) {
      let header_bg = bladeMode;
      header_bg.style.setProperty("mix-blend-mode", "exclusion");
    }
  };
  return (
    <>
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">
          <div className="offcanvas__left">
            <div className="offcanvas__logo">
            <Link href="/digital-marketing">
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={logoMaklar}
              alt="Offcanvas Logo"
            />
          </Link>
            </div>
            <div className="offcanvas__social">
            <h3 className="social-title">Follow Us</h3>
            <ul className="social-links">
  <li>
    <a href="https://mail.google.com/mail/?view=cm&to=maklarcreations@gmail.com" target="_blank" rel="noopener noreferrer">
      <span style={{ marginRight: "10px" }}>
        <i className="fa-solid fa-envelope"></i>
      </span>
      Email
    </a>
  </li>

  <li>
    <a href="https://www.instagram.com/maklarcreations/" target="_blank" rel="noopener noreferrer">
      <span style={{ marginRight: "10px" }}>
        <i className="fa-brands fa-instagram"></i>
      </span>
      Instagram
    </a>
  </li>

  <li>
    <a href="https://www.linkedin.com/company/maklar-creations/" target="_blank" rel="noopener noreferrer">
      <span style={{ marginRight: "10px" }}>
        <i className="fa-brands fa-linkedin"></i>
      </span>
      Linkedin
    </a>
  </li>
</ul>

            </div>
            <div className="offcanvas__links">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
              {/*   <li>
                  <Link href="/career">Career</Link>
                </li> */}
              {/*   <li>
                  <Link href="/blog">blog</Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="offcanvas__mid">
            <div className="offcanvas__menu-wrapper">
              <nav className="offcanvas__menu">
                <ul className="menu-anim title" ref={headerTitle}>
                  <li>
                    <div className="header_title">
                      <Link href={"/digital-marketing"}>HOME</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/about"}>ABOUT</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/service-v4"}>SERVICE</Link>
                    </div>
                    <ul
                      className="sub_title"
                      style={
                        accordion === 3 ? { display: "" } : { display: "none" }
                      }
                    >
                      <li>
                        <Link href={"/service"}>service</Link>
                      </li>
                      <li>
                        <Link href={"/service-dark"}>service dark</Link>
                      </li>
                      <li>
                        <Link href={"/service-v2"}>service v2</Link>
                      </li>
                      <li>
                        <Link href={"/service-v2-dark"}>service v2 dark</Link>
                      </li>
                      <li>
                        <Link href={"/service-v3"}>service v3</Link>
                      </li>
                      <li>
                        <Link href={"/service-v3-dark"}>service v3 dark</Link>
                      </li>
                      <li>
                        <Link href={"/service-v4"}>service v4</Link>
                      </li>
                      <li>
                        <Link href={"/service-v4-dark"}>service v4 dark</Link>
                      </li>
                      <li>
                        <Link href={"/service-v5"}>service v5</Link>
                      </li>
                      <li>
                        <Link href={"/service-v5-dark"}>service v5 dark</Link>
                      </li>
                      <li>
                        <Link href={"/service-v6"}>service v6</Link>
                      </li>
                      <li>
                        <Link href={"/service-v6-dark"}>service v6 dark</Link>
                      </li>
                      <li>
                        <Link href={"/service-details"}>service details</Link>
                      </li>
                      <li>
                        <Link href={"/service-details-dark"}>
                          service details dark
                        </Link>
                      </li>
                    </ul>
                  </li>
                 {/*  <li>
                    <div className="header_title">
                      <Link href={"/blog"}>BLOG</Link>
                    </div>
                    <ul
                      className="sub_title"
                      style={
                        accordion === 5 ? { display: "" } : { display: "none" }
                      }
                    >
                      <li>
                        <Link href={"/blog"}>blog</Link>
                      </li>
                      <li>
                        <Link href={"/blog-dark"}>blog dark</Link>
                      </li>
                      <li>
                        <Link href={"/blog-v2"}>blog v2</Link>
                      </li>
                      <li>
                        <Link href={"/blog-v2-dark"}>blog v2 dark</Link>
                      </li>
                      <li>
                        <Link href={"/blog-details"}>blog details</Link>
                      </li>
                      <li>
                        <Link href={"/blog-details-dark"}>
                          blog details dark
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <div className="header_title">
                      <Link href={"/contact"}>CONTACT</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="offcanvas__right">
            <div className="offcanvas__search">
              <form action="#">
                <input type="text" name="search" placeholder="Search keyword" />
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
              </form>
            </div>
            <div className="offcanvas__contact">
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <a href="tel:+(92)3088342049">(+92) 308-834-2049</a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/?view=cm&to=maklarcreations@gmail.com"> maklarcreations@gmail.com  </a>
                </li>
                <li>  Opposite Gate 1, DHA 2, Islamabad, Pakistan</li>
              </ul>
            </div>
          {/*   <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape11}
              alt="shape"
              className="shape-1"
            />
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape12}
              alt="shape"
              className="shape-2"
            /> */}
          </div>
          <div className="offcanvas__close">
            <button type="button" onClick={closeCanvas}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
