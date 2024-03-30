import type { IServiceInfo } from "../../../interface/interface";

//react icons
import { LuDot } from "react-icons/lu";

import { PiCaretDoubleRightLight } from "react-icons/pi";
import { serviceCollection } from "../../../constants/constant";

const ServiceInfo = ({ data }: IServiceInfo) => {
  const serviceSlug = data?.slug;
  return (
    <div className="layout component-padding black-color">
      <div className="grid lg:grid-cols-8 gap-40">
        <div className="col-span-5">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="text-[30px] font-semibold lg:w-[60%]">
                {data?.title}
              </div>
              <div className="leading-[30px]">{data?.detail}</div>
            </div>
            <div className="">
              <div className="grid lg:grid-cols-2 gap-6 ">
                {data?.relatedImg?.map((data, index) => {
                  return (
                    <div key={index} className="overflow-hidden rounded-[8px]">
                      <div className="  hover:scale-110 transition-all duration-700">
                        <img
                          src={data?.img?.src}
                          alt=""
                          className=" object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-[24px] font-semibold">
                About This Service
              </div>
              <div className="leading-[30px]">{data?.aboutUsDetail}</div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-[24px] font-semibold">
                Features of This Service
              </div>
              <div className="">
                {data?.feature?.map((data, index) => {
                  return (
                    <div key={index} className="flex items-center ">
                      <div className=" text-[#8D2CFF]">
                        <LuDot size={40} />
                      </div>
                      <div className="text-[16px]">{data?.list}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="sticky top-[140px] flex flex-col gap-4">
            {serviceCollection?.map((data, index) => {
              return (
                <a
                  href={`/service-detail/${data?.slug}`}
                  key={index}
                  className={`${
                    data?.slug == serviceSlug
                      ? "bg-[#7924DC] text-white"
                      : "bg-[#f1eded] hover:bg-[#7924DC] hover:text-white"
                  }  flex items-center justify-between p-6`}
                >
                  <div>{data?.title}</div>
                  <div>
                    <PiCaretDoubleRightLight />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
