//images
import girlone from "../../../../public/images/testimonial/girlone.jpg";
import girlthree from "../../../../public/images/testimonial/girlthree.jpg";
import boyone from "../../../../public/images/testimonial/boyone.jpg";
import ComponentHeader from "../../componentHeader/ComponentHeader";
import type { ITestimonial } from "../../../interface/interface";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonial = () => {
  const testimonialList = [
    {
      img: girlone,
      name: "Ava Smith",
      detail:
        "Efficient and professional repair service! They quickly diagnosed and fixed my device, exceeding my expectations. I'm impressed with their expertise and outstanding customer care. Highly recommend their services to all!",
      position: "Sales Associate",
    },
    {
      img: boyone,
      name: "Oliver Michael Robinson",
      detail:
        "Fast, reliable service! Fixed my device with expertise and care. Highly recommended for anyone needing quick, professional repairs. Thank you!",
      position: "Research Assistant",
    },
    {
      img: girlthree,
      name: "Ava Smith",
      detail:
        "Exceptional service! Repaired my device swiftly and effectively. Highly skilled team with excellent customer support. Trustworthy and dependable. Will definitely use again and recommend to others.",
      position: "Human Resources Specialist",
    },
  ];

  return (
    <div className="layout component-padding black-color flex flex-col gap-20">
      <div>
        <ComponentHeader
          data={{
            title: "Hear from our happy customer",
            section: "",
          }}
        />
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {testimonialList?.map((data: ITestimonial, index: number) => {
          return (
            <div
              key={index}
              className="drop-shadow-md hover:drop-shadow-xl p-6 rounded-[8px] flex flex-col gap-6"
              style={{
                backgroundColor: "var(--primary-color)",
              }}
            >
              <div>
                <BiSolidQuoteAltLeft size={45} className="text-[#1e1e1e]" />
              </div>
              <div className="h-[22vh] no-scrollbar overflow-y-scroll leading-[26px]">
                <div>{data?.detail}</div>
              </div>
              <div className="flex  gap-4">
                <div className="">
                  <img
                    src={data?.img?.src}
                    alt=""
                    className="h-[80px] w-[80px] rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="translate-y-[10px]">
                    <div className="font-semibold text-[16px]">
                      {data?.name}
                    </div>
                    <div className="text-gray-400">{data?.position}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
