//images
import refrigerator from "../../../../public/images/services/refrigerator.jpg";
import ServiceInfo from "./ServiceInfo";

const RefrigeratorService = () => {
  const relatedImg = [
    {
      img: refrigerator,
    },
    {
      img: refrigerator,
    },
  ];

  const feature = [
    {
      list: "Expert Technicians",
    },
    {
      list: "Prompt Response",
    },
    {
      list: "Comprehensive Repairs",
    },
    {
      list: "Transparent Pricing",
    },
  ];

  const detail =
    "Whether it's cooling problems, strange noises, or malfunctioning components, you can trust us to provide expert solutions. Rest easy knowing your refrigerator is in capable hands - schedule your repair with us today and keep your kitchen running smoothly.";

  const aboutUsDetail =
    " With years of experience in the appliance repair industry, our team is committed to providing top-notch service to our customers. We pride ourselves on our professionalism, reliability, and dedication to restoring your refrigerator to optimal performance.";

  const slug = "refrigerator-repair";

  return (
    <div>
      <ServiceInfo
        data={{
          title: "Your Trusted Refrigerator Repair Solution",
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

export default RefrigeratorService;
