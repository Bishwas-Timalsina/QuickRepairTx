import type { IPricingQualityList } from "../../../interface/interface";

const PricingQualityForWhyUs = () => {
  const pricingQualityList = [
    {
      title: "Free Diagnosis",
    },
    {
      title: "Transparent Pricing",
    },
    {
      title: "Free Electronic Services",
    },
    {
      title: "Warranty Coverage",
    },
    {
      title: "Flexible Payment Options",
    },
  ];

  return (
    <div>
      <div className="bg-white drop-shadow-md rounded-[8px] p-6 flex flex-col gap-8">
        <div className="border-b-[1px] border-[#1e1e1e]">
          <div className="mb-4 text-[20px] font-semibold">
            Our Awesome Pricing
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {pricingQualityList?.map((data: IPricingQualityList, index) => {
            return (
              <div className="text-[16px] font-medium" key={index}>
                {data?.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingQualityForWhyUs;
