import placeholder from "../../assets/placeholder.png";
import "react-lazy-load-image-component/src/effects/blur.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Section = ({ img, title, subtitle, body, reversed }) => {
  return (
    <div
      className={`flex flex-col gap-4 lg:gap-8 mb-6 ${
        !reversed ? "lg:flex-row" : "lg:flex-row-reverse"
      } justify-center lg:gap-[109px] items-center px-10 lg:px-[128px]`}
    >
      <img src={img} alt="img" />
      <LazyLoadImage
        src={img}
        alt="hero"
        className="z-20 absolute bg-blend-hard-light "
        PlaceholderSrc={placeholder}
        effect="blur"
      />
      <div className="flex lg:w-[535px] flex-col gap-1 justify-center lg:justify-start text-center lg:text-left">
        <p className="font1 text-xl lg:text-3xl font-[800] text-white ">
          {title}
        </p>
        <p className="font1 text-xl lg:text-3xl font-[800] text-ppurple mb-4">
          {subtitle}
        </p>
        <p className="text-white text-xs lg:text-sm font2">{body}</p>
      </div>
    </div>
  );
};

export default Section;
