//images
import washing1 from "../../../../public/images/services/washing.jpg";
import washing2 from "../../../../public/images/services/washing2.jpg";
import ServiceInfo from "./ServiceInfo";

const WashingMachineRepair = () => {
  const relatedImg = [
    {
      img: washing1,
    },
    {
      img: washing2,
    },
  ];

  const feature = [
    {
      list: "24/7 Live Support",
    },
    {
      list: "Low Cost Services",
    },
    {
      list: "Quick Repair Services",
    },
    {
      list: "Fast Delivery",
    },
  ];

  const detail =
    "At Quick Repair, we're your trusted experts in washing machine repair. From minor adjustments to major overhauls, our skilled technicians are dedicated to restoring your machine's functionality promptly and efficiently. Say goodbye to laundry disruptions with our reliable repair services tailored to suit your needs";

  const aboutUsDetail =
    "With years of experience under our belt, we've cultivated a reputation for reliability, professionalism, and top-notch service. Our team of skilled technicians is dedicated to restoring your washing machine to optimal performance, ensuring that you can get back to your daily routine without any hassle";

  const slug = "washing-machine-repair";

  return (
    <div>
      <ServiceInfo
        data={{
          title: "Professional Repair Solutions for Your Machine",
          detail,
          relatedImg,
          feature,
          aboutUsDetail,
          slug,
        }}
      />
    </div>
  );
};

export default WashingMachineRepair;
