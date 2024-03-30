//images
import "react-multi-carousel/lib/styles.css";

import david from "../../../../public/images/teams/david.jpg";
import holden from "../../../../public/images/teams/holden.jpg";
import jordan from "../../../../public/images/teams/jordan.jpg";
import ken from "../../../../public/images/teams/ken.jpg";
import ComponentHeader from "../../../components/componentHeader/ComponentHeader";

const OurTeam = () => {
  const teamList = [
    {
      img: david,
      title: "David",
      position: "Tech Specialist",
    },
    {
      img: holden,
      title: "Holden",
      position: "Tech Specialist",
    },
    {
      img: jordan,
      title: "Jordan",
      position: "Tech Specialist",
    },
    {
      img: ken,
      title: "Ken",
      position: "Tech Specialist",
    },
  ];

  return (
    <div className="black-color">
      <div className="layout component-padding flex flex-col gap-20">
        <div className="flex items-center justify-center">
          <div className="text-center lg:w-[45%] ">
            <ComponentHeader
              data={{
                section: "Experts on Repairs",
                title: "Meet Our Expert Team Members",
              }}
            />
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-4 gap-10">
            {teamList?.map((data, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: "var(--primary-color)",
                  }}
                  className=" rounded-[8px] drop-shadow-md p-6 flex flex-col gap-4"
                >
                  <div>
                    <img src={data?.img?.src} alt="" />
                  </div>
                  <div className="black-color flex flex-col gap-1">
                    <div className="text-[18px]">{data?.title}</div>
                    <div
                      className="text-[16px] font-semibold"
                      style={{
                        color: "var(--accent-color)",
                      }}
                    >
                      {data?.position}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
