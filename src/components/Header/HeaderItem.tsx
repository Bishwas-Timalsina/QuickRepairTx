//React Icons
import { LuSendHorizonal, LuUser2 } from "react-icons/lu";
import { FiTool } from "react-icons/fi";
import { MdOutlineRestorePage } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

const HeaderItem = () => {
  const item_collection = [
    {
      name: "Home",
      slug: "/",
    },

    {
      name: "Services",
      slug: "/services",
    },

    {
      name: "About Us",
      slug: "/about-us",
    },
    {
      name: "Blogs",
      slug: "/blogs",
    },
  ];
  return item_collection;
};

export default HeaderItem;
