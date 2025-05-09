import Story1 from "../../../public/assets/imgs/story/1.jpg";
import Story2 from "../../../public/assets/imgs/story/2.jpg";
import Story3 from "../../../public/assets/imgs/story/3.jpg";
import Story4 from "../../../public/assets/imgs/story/4.jpg";
import CoFounder1 from "../../../public/assets/imgs/about/taha.svg";
import CoFounder2 from "../../../public/assets/imgs/about/sajjad.svg";

import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
           {/*  <div className="from-text">
              from <span>1990</span>
            </div> */}

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Digital Studio</h2>
                <h3 className="sec-title title-anim">Our story</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                Your brand is your most powerful asset. At Maklar, we have spent over 6 years disrupting the digital landscape with bold strategies that connect brands with Gen Z audiences. Founded by forward-thinkers who refuse to follow conventional marketing paths, we have grown from a creative vision into a comprehensive digital powerhouse. Our journey is defined by breaking norms, setting trends, and transforming brands from ordinary to unforgettable in the digital space. We do not just aim for visibility—we create digital dominance.
                  </p>
                </div>
              </div>
            </div>
          </div>
   {/*        <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={Story1}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={Story2}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={Story3}
                  alt="Story Thumbnail"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={Story4}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div> */}
       <div className="row">
              {/* Co-founder 1 - Sajjad Ispahani */}
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <div className="team-member">
                  <div 
                    style={{ 
                      width: "100%", 
                      maxWidth: "300px",
                      minHeight: "200px",
                      margin: "0 auto", 
                      display: "flex", 
                      flexDirection: "column", 
                      justifyContent: "center", 
                      borderRadius: "8px", 
                      backgroundColor: "rgba(255,255,255,0.05)",
                      padding: "15px"
                    }}
                    className="mb-1"
                  >
                   {/*  <h3 style={{ 
                      color: 'white', 
                      fontWeight: 'bold', 
                      marginBottom: '10px',
                      fontSize: 'clamp(16px, 4vw, 20px)'
                    }}>
                      SAJJAD ISPAHANI
                    </h3> */}
                    <p style={{ 
                      fontSize: 'clamp(11px, 3vw, 14px)', 
                      lineHeight: '1.4',
                      color: 'var(--gray-2)'
                    }}>
                      WITH OVER 5 YEARS OF EXPERIENCE IN MARKETING AND BUILDING BRANDS ONLINE IDENTITY HE BRINGS TECHNICAL KNOWLEDGE WITH IN-DEPTH KNOWLEDGE ON HOW TO MANIPULATE YOUR BRAND TO CONQUER THE DIGITAL SPACE.
                    </p>
                  </div>
                  <h5 style={{ 
                    marginTop: '15px', 
                    color: 'white',
                    fontSize: 'clamp(14px, 4vw, 18px)'
                  }}>
                    Sajjad Ispahani
                  </h5>
                  <p className="text-muted" style={{ fontSize: 'clamp(11px, 3vw, 14px)' }}>
                    CO-FOUNDER
                  </p>
                </div>
              </div>

              {/* Co-founder 2 - Taha Arshad */}
              <div className="col-md-6 text-center">
                <div className="team-member">
                  <div 
                    style={{ 
                      width: "100%", 
                      maxWidth: "300px",
                      minHeight: "200px",
                      margin: "0 auto", 
                      display: "flex", 
                      flexDirection: "column", 
                      justifyContent: "center", 
                      borderRadius: "8px", 
                      backgroundColor: "rgba(255,255,255,0.05)",
                      padding: "15px"
                    }}
                    className="mb-1"
                  >
                  {/*   <h3 style={{ 
                      color: 'white', 
                      fontWeight: 'bold', 
                      marginBottom: '10px',
                      fontSize: 'clamp(16px, 4vw, 20px)'
                    }}>
                      TAHA ARSHAD
                    </h3> */}
                    <p style={{ 
                      fontSize: 'clamp(11px, 3vw, 14px)', 
                      lineHeight: '1.4',
                      color: 'var(--gray-2)'
                    }}>
                      WITH YEARS OF EXPERIENCE IN MARKETING AND REAL ESTATE, TAHA ARSHAD BRINGS HIS EXPERTISE FROM SUCCESSFULLY GROWING BUSINESSES IN A HIGHLY COMPETITIVE MARKET, CRAFTING STRATEGIES THAT CONNECT WITH AUDIENCES, DRIVE ENGAGEMENT, AND DELIVER IMPACTFUL RESULTS IN THE DIGITAL SPACE.
                    </p>
                  </div>
                  <h5 style={{ 
                    marginTop: '15px', 
                    color: 'white',
                    fontSize: 'clamp(14px, 4vw, 18px)'
                  }}>
                    Taha Arshad
                  </h5>
                  <p className="text-muted" style={{ fontSize: 'clamp(11px, 3vw, 14px)' }}>
                    CO-FOUNDER
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
