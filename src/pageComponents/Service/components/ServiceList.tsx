//components
import ComponentHeader from "../../../components/componentHeader/ComponentHeader";
import Button from "../../../components/Buttons/components/Button";

//constants
import { serviceCollection } from "../../../constants/constant";

//react icons
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceList = () => {
  return (
    <div className="layout component-padding">
      <div className="flex flex-col gap-[100px]">
        <div className="lg:w-[60%]">
          <ComponentHeader
            data={{
              section: "Our Services",
              title: "What We Offer to Our Customers",
            }}
          />
        </div>
        <div className="flex flex-col lg:gap-14 gap-[150px]">
          {serviceCollection?.map((data, index) => {
            return (
              <div key={index} className="flex flex-col ">
                <div
                  className={`${
                    index % 2 !== 0
                      ? "lg:flex-row-reverse flex-col"
                      : "lg:flex-row flex-col"
                  } flex lg:justify-between lg:items-center w-[100%] `}
                >
                  <div
                    className={`${
                      index % 2 !== 0 && "  flex  lg:justify-end"
                    } lg:w-[50%]  relative`}
                  >
                    <div className="">
                      <img
                        src={data?.img.src}
                        alt=""
                        className="rounded-full lg:w-[50vh] lg:h-[50vh] w-[25vh] h-[25vh]  object-cover "
                      />
                    </div>
                  </div>

                  <a
                    href={`/service-detail/${data?.slug}`}
                    className="lg:w-[50%] flex flex-col gap-6 group"
                  >
                    <div className=" flex flex-col gap-4">
                      <div className="bg-gradient-to-t text-[22px] font-semibold text-transparent bg-clip-text from-[#8D2CFF] to-[#7924DC]">
                        {data?.title}
                      </div>
                      <div className=" text-[14px] leading-[26px]">
                        {data?.description}
                      </div>
                    </div>

                    <Button
                      data={{
                        name: "Explore More",
                        icon: <FaArrowRightLong />,
                      }}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
