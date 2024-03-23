import Button from "../../../components/Buttons/components/Button";

//react icons
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div
      className="max-w-[1920px] mx-auto relative bg-no-repeat white-color"
      style={{
        backgroundImage: `url("./images/herosection/washingmachine.jpg")`,
      }}
    >
      <div className="absolute bg-gradient-to-l from-[#0c090f] to-[#2d1749] opacity-80 3xl:opacity-70 w-full h-full top-0 left-0 right-0 bottom-0"></div>
      <div className="lg:pt-[95px]  h-[100vh] flex items-center justify-center lg:translate-y-[-20px]    3xl:pt-[100px] pt-[50px]    relative ">
        <div className="layout component-padding  relative">
          <div className="grid lg:grid-cols-12">
            <div className="flex flex-col gap-14 lg:col-span-7">
              <div className="relative">
                <div
                  style={{
                    color: "white",
                  }}
                  className="before:content-[''] text-[20px]  font-medium  before:bottom-[6px] before:w-[18%] before:h-[8%] before:bg-[#8D2CFF] before:absolute before:left-[44%] before:lg:left-[55%] before:right-0"
                >
                  Washing Machine Repairing Services
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="lg:text-[58px] font-semibold">
                  Repair Your Machines From Expert
                </div>
                <div className="flex flex-col gap-7">
                  <div className="">
                    Our repair services offer prompt and professional assistance
                    to ensure your appliance is up and running efficiently.
                    Whether it's a minor glitch or a major breakdown, our
                    skilled technicians are equipped to diagnose and fix a wide
                    range of issues.
                  </div>
                  <div>
                    <Button
                      data={{
                        name: "Learn More",
                        icon: <FaArrowRightLong />,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
