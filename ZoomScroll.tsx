import React, { useEffect, FC, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TProcessListData } from "types/serviceTypes";
import ZomScrollStyle from "assets/styles/components/our-service/ZoomScroll.style";

const ZoomScroll: FC<{
  processList?: TProcessListData[];
  processHeaderTitle?: string;
}> = ({ processList, processHeaderTitle }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [isVisible, setIsVisible] = useState(true);

  const onReload = () => {
    window.scrollTo(0, 0);
    setIsVisible(false);
    ScrollTrigger.disable();
  };

  useEffect(() => {
    window.addEventListener("beforeunload", onReload);

	  // important register animation
    ScrollTrigger.enable();

    typeof window !== "undefined" &&
      window.innerWidth > 1024 &&
      gsap.to(".panel", {
        yPercent: -100,
        ease: "slow(0.7, 0.7, false)",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".panels-container",
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 0.5,
        },
      });
    gsap.set(".panel", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    return () => {
      window.scrollTo(0, 0);
	    // important unregister animation
      ScrollTrigger.disable();
      ScrollTrigger.refresh(true);
      window.removeEventListener("beforeunload", onReload);
    };
  }, []);

  return (
    <ZomScrollStyle className="panels-container" isVisible={isVisible}>
      {processList.map(({ processTitle, processText, processImg }, index) => (
        <li key={index} className="panel">
          <div className="container">
            <h2>{processHeaderTitle}</h2>
            <div className="process-content">
              <p className="index-class">{`0${index + 1}`}</p>
              <div className="content">
                <h3>{processTitle}</h3>
                <p className="body1">{processText}</p>
              </div>

              <GatsbyImage
                image={getImage(processImg)}
                alt={processTitle}
                loading="lazy"
                className="process-img"
              />
            </div>
          </div>
        </li>
      ))}
    </ZomScrollStyle>
  );
};

export default ZoomScroll;
