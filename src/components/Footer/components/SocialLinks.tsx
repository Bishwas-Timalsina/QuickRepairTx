import type { ISocialLinks } from "../../../interface/interface";

const SocialLinks = ({ data }: ISocialLinks) => {
  return (
    <div className="group">
      <a
        href={data?.link}
        className="bg-[#251d30] group-hover:transition-transform group-hover:duration-700 group-hover:bg-[#8D2CFF]  duration-700 group-hover:rounded-[8px] text-[20px] w-fit flex items-center justify-center rounded-full p-2"
      >
        {data?.icon}
      </a>
    </div>
  );
};

export default SocialLinks;
