import { FaArrowRightLong } from "react-icons/fa6";

const OurAssurance = () => {
  const assuranceList = [
    {
      title: "Reliable Services",
      description:
        "From expert solutions to dependable support, we ensure peace of mind with our top-notch reliability, professional licensing, and ironclad guarantees. Trust us to deliver excellence every step of the way.",
      link: "#",
    },
    {
      title: "Licensed & Certified",
      description:
        "Our repair service is licensed and certified, ensuring the highest standards of quality and professionalism. Our team of expert technicians holds all required licenses to operate within the region, demonstrating their competency and compliance with regulatory guidelines",
      link: "#",
    },
    {
      title: "Quality Guarantee",
      description:
        "Our quality guarantee ensures that you receive nothing but the best, backed by our dedication to delivering superior craftsmanship, reliability, and customer satisfaction.",
      link: "#",
    },
  ];

  return (
    <div className="layout component-padding black-color">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {assuranceList?.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "var(--primary-color)",
              }}
              className="drop-shadow-md p-6 flex flex-col gap-6 group"
            >
              <div className="flex items-center gap-6">
                <div
                  style={{
                    color: "var(--accent-color)",
                  }}
                  className="lg:text-[36px] font-bold"
                >
                  0{index + 1}
                </div>
                <div className="lg:text-[24px] font-semibold">
                  {data?.title}
                </div>
              </div>
              <div className="text-[16px] h-[20vh] no-scrollbar overflow-y-scroll leading-[26px]">
                {data?.description}
              </div>
              <div className="flex gap-2 items-center w-fit group-hover:text-[#7924DC] group hover:cursor-pointer ">
                <div className="group-hover:tracking-wide transition-all duration-700">
                  Read More
                </div>
                <div className="group-hover:translate-x-2 transition-all duration-700">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurAssurance;
