import type { IButtonData } from "../../../interface/interface";
//css
import "../button.style.css";

const Button = ({ data }: IButtonData) => {
  return (
    <div>
      <button className="flex gap-2 items-center">
        <b>{data?.name}</b>
        <div>{data?.icon}</div>
      </button>
    </div>
  );
};

export default Button;
