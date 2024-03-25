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
        },
        {
          list: "Basic repairs for identified issues.",
        },
        {
          list: "Standard parts replacement as needed.",
        },
        {
          list: "30-day warranty on repairs.",
        },
        {
          list: "Priority scheduling for service visits.",
        },
      ],
    },
    {
      title: "Gold Plan",
      price: "$ 29.65",
      pricingService: [
        {
          list: "Comprehensive diagnosis of up to 3 electronic appliances.",
        },
        {
          list: "Advanced repairs for identified issues.",
        },
        {
          list: "Premium parts replacement for enhanced durability.",
        },
        {
          list: "60-day warranty on repairs.",
        },
        {
          list: "Annual maintenance check-up for covered appliances.",
        },
      ],
    },
    {
      title: "Diamond Plan",
      price: "$ 29.65",
      pricingService: [
        {
          list: "Thorough diagnosis of up to 5 electronic appliances",
        },
        {
          list: "Extensive repairs for identified issues, including complex troubleshooting.",
        },
        {
          list: "High-quality parts replacement for maximum performance",
        },
        {
          list: "90-day warranty on repairs.",
        },
        {
          list: "Exclusive discounts on future repairs and upgrades.",
        },
        {
          list: "Dedicated customer support hotline for immediate assistance",
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
        <div className="grid lg:grid-cols-3 gap-6">
          {pricingList?.map((data, index) => {
            return (
              <div className="bg-[#FEFEFE] p-8 h-[100%] flex flex-col justify-between">
                <div>
                  <div className="lg:text-[24px] text-[20px]">
                    {data?.title}
                  </div>
                  <div>
                    <div className="lg:text-[57px] font-medium">
                      {data?.price}{" "}
                      <span
                        style={{
                          fontSize: "16px",
                        }}
                      >
                        /Monthly
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      {data?.pricingService.map((data, index) => {
                        return (
                          <div key={index} className="flex items-center gap-2">
                            <div>
                              <FaCheck />
                            </div>
                            <div>{data.list}</div>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
