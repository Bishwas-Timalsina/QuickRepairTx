import ComponentHeader from "../../../components/componentHeader/ComponentHeader";

//images
import washingmachine from "../../../../public/images/services/washingmachine.jpg";
import refrigerator from "../../../../public/images/services/refrigerator.jpg";
import ac from "../../../../public/images/services/airconditioning.jpg";

const ServiceList = () => {
  const serviceCollection = [
    {
      title: "Washing Machine Repair",
      img: washingmachine,
      description:
        "Our team of skilled technicians is dedicated to diagnosing and resolving any issues with your washing machine promptly and efficiently. Whether it's a minor repair or a major overhaul, you can trust us to get your washing machine back up and running in no time. With our commitment to quality service and customer satisfaction, you can rest assured that your laundry woes are in good hands with Quick Repair Service.",
    },
    {
      title: "Refrigerator Repair",
      img: refrigerator,
      description:
        "Our refrigerator repair service is dedicated to providing swift and reliable solutions to any issues you may encounter. Whether it's a faulty compressor, a malfunctioning thermostat, or any other problem, our experienced technicians are equipped to diagnose and fix it efficiently. Trust us to restore your refrigerator to optimal performance, ensuring your food stays cool and your home life stays uninterrupted.",
    },
    {
      title: "AC Repair",
      img: ac,
      description:
        "Our team of skilled technicians is trained to diagnose and fix a wide range of AC issues, from faulty compressors to refrigerant leaks and beyond. Whether it's a residential or commercial unit, you can rely on us to restore your air conditioner's performance efficiently. Trust Quick Repair Service for prompt, reliable air conditioner repairs that you can count on to beat the heat.",
    },
  ];
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
        <div className="flex flex-col gap-14">
          {serviceCollection?.map((data, index) => {
            return (
              <div key={index} className="">
                <div
                  className={`${
                    index % 2 !== 0
                      ? "lg:flex-row-reverse flex-col"
                      : "lg:flex-row flex-col"
                  } flex justify-between items-center w-[100%]`}
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
                        className="rounded-full w-[50vh] h-[50vh]  object-cover "
                      />
                    </div>
                    <div
                      style={{
                        zIndex: "-1",
                      }}
                      className={` ${
                        index % 2 !== 0
                          ? "top-[-50px] right-[60px]"
                          : "top-[-50px] left-[60px]"
                      }z-0 absolute top-0`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                        viewBox="0 0 409.6 409.6"
                        fill="#8D2CFF"
                      >
                        <defs>
                          <linearGradient id="Gradient1">
                            <stop className="stop1" offset="0%" />
                            <stop className="stop2" offset="50%" />
                            <stop className="stop3" offset="100%" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0"
                          // fill='url("#SvgjsLinearGradient1042")'
                          fill='url("#Gradient1")'
                        ></path>
                        <defs>
                          <linearGradient id="SvgjsLinearGradient1042">
                            <stop stop-color="#3a7bd5" offset="0"></stop>
                            <stop stop-color="#3a6073" offset="1"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="lg:w-[50%] flex flex-col gap-4">
                    <div className="bg-gradient-to-t text-[22px] font-semibold text-transparent bg-clip-text from-[#8D2CFF] to-[#7924DC]">
                      {data?.title}
                    </div>
                    <div className=" text-[14px] leading-[26px]">
                      {data?.description}
                    </div>
                  </div>
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
