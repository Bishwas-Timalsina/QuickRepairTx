//images

import customer from "../../../../public/images/services/customer.png";
import freeservice from "../../../../public/images/services/freeservice.png";
import promptservice from "../../../../public/images/services/promptservice.png";
import technician from "../../../../public/images/services/technician.png";

//interface
import type { IReasonList } from "../../../interface/interface";

const ReasonList = () => {
  const reasons = [
    {
      title: "Expert Technicians",
      detail:
        "Our team comprises experienced technicians equipped with the knowledge and skill to diagnose and repair a diverse range of home appliances efficiently.",
      image: technician,
    },
    {
      title: "Prompt Service",
      detail:
        "We understand the inconvenience of a malfunctioning appliance. That's why we prioritize prompt service, ensuring your appliances are back in working order as quickly as possible.",
      image: promptservice,
    },
    {
      title: "Customer Satisfaction Guarantee",
      detail:
        "Your satisfaction is our priority. We strive to exceed your expectations with every repair, providing transparent communication and reliable service from start to finish.",
      image: freeservice,
    },
    {
      title: "Free Electronic Services",
      detail:
        "Unlike other providers, we offer complimentary electronic services for your repaired appliances. From software updates to calibration, we ensure your devices are optimized for peak performance.",
      image: customer,
    },
  ];

  return (
    <div className="black-color">
      <div className="flex flex-col gap-6">
        {reasons?.map((data: IReasonList, index) => {
          return (
            <div key={index}>
              <div className="flex lg:flex-row flex-col gap-10 w-[100%]">
                <div className="lg:w-[12%]  h-[85%] w-fit p-2 flex items-center justify-center bg-[white] drop-shadow-md rounded-[8px]">
                  <img
                    src={data?.image?.src}
                    alt=""
                    className="h-[50px] w-[50px] object-contain"
                  />
                </div>
                <div className="lg:w-[80%] flex flex-col gap-4">
                  <div className="text-[20px] font-semibold">{data?.title}</div>
                  <div className="leading-[24px]">{data?.detail}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReasonList;
