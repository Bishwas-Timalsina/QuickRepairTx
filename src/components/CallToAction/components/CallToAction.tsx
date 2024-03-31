import { useEffect, useRef } from "react";

//components
import Button from "../../Buttons/components/Button";

//lottie filex
import Lottie from "lottie-web";
import repair from "../../../../public/animatedjson/repair.json";

const CallToAction = () => {
  const animated_svg = useRef(null);

  useEffect(() => {
    if (animated_svg.current) {
      const animation = Lottie.loadAnimation({
        container: animated_svg.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: repair,
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);
  return (
    <div className="">
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-8 p-8 white-color bg-gradient-to-r from-[#31077E] to-[#0A51C7] drop-shadow-md rounded-[8px]">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="lg:text-[38px] lg:w-[90%] font-semibold  ">
              {" "}
              Secure Your Expert Repair Service Now!
            </div>
            <div className=" ">
              <Button
                data={{
                  name: "Book A Service",
                }}
              />
            </div>
          </div>
          <div className="lg:col-span-3  flex lg:items-center lg:justify-center">
            <div
              ref={animated_svg}
              className="lg:w-[30vh] lg:h-[30vh] 3xl:h-[20vh] 3xl:w-[20vh]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
