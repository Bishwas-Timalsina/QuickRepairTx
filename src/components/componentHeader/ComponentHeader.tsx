import type { IComponentHeader } from "../../interface/interface";

const ComponentHeader = ({ data }: IComponentHeader) => {
  return (
    <div className="">
      <div className="bg-gradient-to-t font-semibold text-transparent bg-clip-text from-[#8D2CFF] to-[#7924DC]">
        {data?.section}
      </div>
      <div className="lg:text-[48px]  text-[28px] font-semibold">
        {data?.title.split(" ").map((word, index, array) => {
          if (array.length === 2 && index === array.length - 1) {
            return (
              <span
                key={index}
                className="bg-gradient-to-t text-transparent bg-clip-text from-[#8D2CFF] to-[#7924DC]"
              >
                {word}{" "}
              </span>
            );
          } else if (array.length === 3 && index >= array.length - 2) {
            return (
              <span
                key={index}
                className="bg-gradient-to-t text-transparant bg-clip-text from-[#8D2CFF] to-[#7924DC]"
              >
                {word}{" "}
              </span>
            );
          } else if (array.length > 3 && index >= array.length - 3) {
            return (
              <span
                key={index}
                className="bg-gradient-to-t text-transparent bg-clip-text from-[#8D2CFF] to-[#7924DC]"
              >
                {word}{" "}
              </span>
            );
          } else {
            return word + " ";
          }
        })}
      </div>
    </div>
  );
};

export default ComponentHeader;
