//images
import snap from "../../../../public/images/random/snap.png";

const BestFeature = () => {
  return (
    <div className="bg-[#cfe2de] black-color">
      <div className="layout component-padding">
        <div className="flex items-center justify-center">
          <div className="lg:text-[38px]  font-semibold text-center leading-[60px]">
            <span>
              Through our top-notch services, our customers have seen{" "}
              <span className="inline">
                remarkable improvements,{" "}
                <img
                  src={snap?.src}
                  alt=""
                  className="h-[60px] w-[60px] inline object-contain"
                />{" "}
                making their lives easier and more convenient than ever before.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFeature;
