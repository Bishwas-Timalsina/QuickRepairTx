import ComponentHeader from "../../../components/componentHeader/ComponentHeader";

//Images
import repairone from "../../../../public/images/aboutus/repairone.jpg";
import repairthree from "../../../../public/images/aboutus/repairthree.jpg";
import repairtwo from "../../../../public/images/aboutus/repairtwo.jpg";

//react icons

const AboutUs = () => {
  return (
    <div className="layout component-padding ">
      <div className="grid lg:grid-cols-1 gap-16">
        <div className=" grid lg:grid-cols-12 gap-16 items-start">
          <div className="col-span-7 flex flex-col gap-4">
            <ComponentHeader
              data={{
                section: "About Us",
                title: " Your Reliable Partner in Home Appliance Solutions",
              }}
            />
            <div className="h-[20vh] no-scrollbar overflow-y-scroll leading-[26px]">
              At Quick Repair Services, we're more than just a team of
              technicians {`-`} we're your dedicated partners in keeping your
              home running smoothly. With a commitment to promptness and
              precision, we specialize in delivering efficient solutions for all
              your home appliance needs. Count on us for reliable service and
              unparalleled expertise, ensuring your peace of mind every step of
              the way
            </div>
          </div>
          <div className="col-span-5 rounded-[8px]  overflow-hidden">
            <img
              src={repairone.src}
              alt=""
              className="lg:h-[50vh] 3xl:h-[40vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="col-span-7 rounded-[8px] hover:cursor-pointer overflow-hidden">
            <img
              src={repairtwo.src}
              alt=""
              className=" object-cover hover:scale-110 transition-all duration-700 lg:h-[50vh] 3xl:h-[40vh] w-[100%] rounded-[8px]"
            />
          </div>
          <div className="col-span-5 rounded-[8px] hover:cursor-pointer overflow-hidden">
            <img
              src={repairthree.src}
              alt=""
              className="lg:h-[50vh] 3xl:h-[40vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
