import Link from "next/link";
import ThumbFooter from "../../../public/assets/imgs/footer/footer_img.png";
import FooterLogoWhite from "../../../public/assets/imgs/logo/footer-logo-white.png";
//import Maklar_logo_black from "../../../public/assets/imgs/logo/Maklar_logo_black.png";
import Maklar_logo_black from "../../../public/assets/imgs/logo/Maklar_logo_white_new.png";
import Image from "next/image";

export default function Footer3() {
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container footer-line"></div>
          <Image
            priority
            width={1160}
            style={{ height: "auto" }}
            src={ThumbFooter}
            alt="Footer Image"
            data-speed="0.75"
          />
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
                  <div className="footer__widget">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      className="footer__logo"
                      src={Maklar_logo_black}
                      alt="Footer Logo"
                    />
                    <p>
                    When you need breakthrough strategies, count on us. When conventional approaches fail, our innovative solutions deliver. No empty promises—just measurable impact.
                    </p>
                    <ul className="footer__social">
                
                      <li>
                        <a href="https://mail.google.com/mail/?view=cm&to=maklarcreations@gmail.com" target="_blank">
                          <span>
                            <i className="fa-brands fa-gmail"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/maklarcreations/" target="_blank">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/maklar-creations/" target="_blank">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">Information</h2>
                    <ul className="footer__link">
                      <li>
                        <Link href="/about">About Company</Link>
                      </li>
                    {/*   <li>
                        <Link href="/portfolio">Case Study</Link>
                      </li> */}
                     {/*  <li>
                        <Link href="/career">Career</Link>
                      </li> */}
                     {/*  <li>
                        <Link href="/blog">blog</Link>
                      </li> */}
                      <li>
                        <Link href="/contact">contact</Link>
                      </li>
                    </ul>
                  </div>
                 

                  <div className="footer__widget-3">
                    <h2 className="footer__widget-title">Contact Us</h2>
                    <ul className="footer__contact">
                      <li>Opposite Gate 1, DHA 2, Islamabad, Pakistan</li>
                      <li>
                        <a href="tel:0308-834-2049" className="phone">
                          (+92) 308 - 834 - 2049{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://mail.google.com/mail/?view=cm&to=maklarcreations@gmail.com" target="_blank">
                        maklarcreations@gmail.com                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-4">
                    <h2 className="project-title">
                      Have a project in your mind?
                    </h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> contact us{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <h3 className="contact-time">09 : 00 AM - 5 : 00 PM</h3>
                    <h4 className="contact-day">Monday - Saturday</h4>
                  </div>

                  <div className="footer__copyright">
                    <p>
                      © Maklar Creations | All rights reserved 
                     {/*  <a href="https://wealcoder.com/" target="_blank">
                        Wealcoder
                      </a> */}
                    </p>
                  </div>

                  <div className="footer__subscribe">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <button type="submit" className="subs-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
