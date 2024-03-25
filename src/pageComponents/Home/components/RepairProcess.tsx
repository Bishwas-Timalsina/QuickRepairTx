//images
import diagnosis from "../../../../public/images/workingProcess/diagnosis.png";
import repair from "../../../../public/images/workingProcess/repair.png";
import satisafaction from "../../../../public/images/workingProcess/qualityAssurance.png";

const RepairProcess = () => {
  const repairList = [
    {
      img: diagnosis,
      title: "Diagnosis & Assessment",
      description:
        "Firstly, we diagnose the issue reported by the customer, ensuring an accurate understanding before proceeding with repairs",
    },
    {
      img: repair,
      title: "Repair Process",
      description:
        "In our repair process, we meticulously diagnose device issues, followed by expert repairs and quality assurance checks to ensure optimal performance and reliability.",
    },
    {
      img: satisafaction,
      title: "Customer Satisfaction",
      description:
        " We aim to ensure that every customer interaction leaves them feeling valued and content with our service. We achieve this through attentive support, transparent communication, and high-quality repairs",
    },
  ];
  return (
    <div className="bg-[#16111D]">
      <div className="layout component-padding">
        <div className=" white-color ">
          <div className=" flex flex-col gap-20">
            <div className="flex items-center justify-center">
              <div className="lg:text-[48px] text-center lg:w-[60%]  text-[28px] font-semibold">
                Who We are & How We Work
              </div>
            </div>
            <div>
              <div className="grid lg:grid-cols-3 gap-8">
                {repairList?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="border-[1px] relative group border-[white] p-6 rounded-[8px] flex flex-col gap-8"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[60px] object-contain">
                          <img src={data?.img.src} alt="" />
                        </div>
                        <div className="text-[20px] font-semibold">
                          {data?.title}
                        </div>
                      </div>
                      <div>{data?.description}</div>
                      <div className="absolute top-[-30px] right-10 group-hover:animate-spin">
                        <div className="border-[2px] h-[60px] w-[60px] border-[#8D2CFF] group-hover:bg-[white] group-hover:text-[#8D2CFF] bg-[#16111D] rounded-full flex items-center justify-center">
                          <div className="text-[24px]">0{index + 1}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairProcess;
