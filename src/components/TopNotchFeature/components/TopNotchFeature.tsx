import { FaShieldAlt, FaUserFriends } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa6";

const TopNotchFeature = () => {
  const topNotchFeatureList = [
    {
      title: "Eco-Friendly Repair Solutions",
      icon: <FaLeaf size={30} />,
    },
    {
      title: "Integrated Warranty Management System",
      icon: <FaShieldAlt size={30} />,
    },
    {
      title: "Virtual Consultations with Experts",
      icon: <FaUserFriends size={30} />,
    },
  ];

  return (
    <div className="layout component-padding">
      <div className="lg:grid-cols-3 grid grid-cols-1">
        {topNotchFeatureList?.map((data, index) => {
          return (
            <div key={index}>
              <div className="flex  gap-4">
                <div className="text-[#636363]">{data?.icon}</div>
                <div className="text-[14px] font-semibold text-[#636363]">
                  {data?.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopNotchFeature;
