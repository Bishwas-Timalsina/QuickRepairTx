//
import Button from "../../../components/Buttons/components/Button";
import ComponentHeader from "../../../components/componentHeader/ComponentHeader";

import { FaCheck } from "react-icons/fa";
const PricingPlans = () => {
  const pricingList = [
    {
      title: "Silver Plan",
      price: "$ 29.65",
      pricingService: [
        {
          list: "Diagnosis of up to 2 electronic appliances.",
          included: "yes",
        },
        {
          list: "Basic repairs for identified issues.",
          included: "yes",
        },
        {
          list: "Standard parts replacement as needed.",
          included: "yes",
        },
        {
          list: "30-day warranty on repairs.",
          included: "no",
        },
        {
          list: "Priority scheduling for service visits.",
          included: "no",
        },
      ],
    },
    {
      title: "Gold Plan",
      price: "$ 50.65",
      pricingService: [
        {
          list: "Comprehensive diagnosis of up to 3 electronic appliances.",
          included: "yes",
        },
        {
          list: "Advanced repairs for identified issues.",
          included: "yes",
        },
        {
          list: "Premium parts replacement for enhanced durability.",
          included: "yes",
        },
        {
          list: "60-day warranty on repairs.",
          included: "no",
        },
        {
          list: "Annual maintenance check-up for covered appliances.",
          included: "no",
        },
      ],
    },
    {
      title: "Diamond Plan",
      price: "$ 85.65",
      pricingService: [
        {
          list: "Thorough diagnosis of up to 5 electronic appliances",
          included: "yes",
        },
        {
          list: "Extensive repairs for identified issues, including complex troubleshooting.",
          included: "yes",
        },
        {
          list: "30-day warranty on repairs",
          included: "yes",
        },
        {
          list: "Priority scheduling for service visits.",
          included: "yes",
        },
        {
          list: "60-day warranty on repairs",
          included: "yes",
        },
        {
          list: "Annual maintenance check-up for covered appliances",
          included: "yes",
        },
      ],
    },
  ];
  return (
    <div className="layout component-padding black-color">
      <div className="flex flex-col gap-20">
        <div className="flex items-center justify-center">
          <div className="text-center lg:w-[60%]">
            <ComponentHeader
              data={{
                section: "Our Pricing Plans",
                title: "Select The Best Package For You",
              }}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingList?.map((data, index) => {
            return (
              <a
                href="#"
                key={index}
                className="bg-[#F5F5F5] group drop-shadow-md rounded-[8px] p-8 h-[100%] flex flex-col justify-between"
              >
                <div className="flex flex-col gap-8 lg:mb-[75px]">
                  <div>
                    <div className="text-[16px]">{data?.title}</div>
                    <div>
                      <div className="lg:text-[57px] font-medium group-hover:text-[#8D2CFF]">
                        {data?.price}{" "}
                        <span
                          style={{
                            fontSize: "12px",
                            color: "gray",
                          }}
                        >
                          / Monthly
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-4">
                      {data?.pricingService.map((data, index) => {
                        return (
                          <div key={index} className="flex  gap-4">
                            <div
                              className={`${
                                data?.included == "yes"
                                  ? "bg-[#d1b3f3]"
                                  : "bg-gray-300"
                              } translate-y-[-1px]  flex items-center justify-center p-2  h-[25px] w-[25px] rounded-full`}
                            >
                              <div>
                                <FaCheck size={10} />
                              </div>
                            </div>
                            <div
                              className={`
                                ${data.included == "no" ? "line-through" : ""}
                                `}
                            >
                              {data.list}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    data={{
                      name: "Choose Package",
                    }}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
