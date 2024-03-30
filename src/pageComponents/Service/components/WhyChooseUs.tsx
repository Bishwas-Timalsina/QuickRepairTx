import ComponentHeader from "../../../components/componentHeader/ComponentHeader";
import PricingQualityForWhyUs from "./PricingQualityForWhyUs";
import ReasonList from "./ReasonList";

const WhyChooseUs = () => {
  return (
    <div className="layout component-padding flex flex-col gap-20">
      <div className="flex items-center justify-center text-center">
        <ComponentHeader
          data={{
            title: "Why Choose Us",
            section: "Why Choose Us",
          }}
        />
      </div>
      <div className="grid lg:grid-cols-8 gap-10">
        <div className="lg:col-span-5">
          <div>
            <ReasonList />
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="sticky top-[140px]">
            <PricingQualityForWhyUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
