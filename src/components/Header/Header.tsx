import { useEffect, useState } from "react";

//antd
import { Drawer } from "antd";

//react icons
import { RiMenu3Fill } from "react-icons/ri";

//constant
import HeaderItem from "./HeaderItem";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Buttons/components/Button";

const Header = () => {
  const header_items = HeaderItem();
  const [topHeader, setTopHeader] = useState<boolean>(true);

  //Drawer States

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const customCloseIcon = (
    <RxCross2
      style={{
        color: "var(--black-color)",
        backgroundColor: "var(--primary-color)",
      }}
      className="p-2 rounded-full"
    />
  );

  useEffect(() => {
    const changeNavbarDesign_onscroll = () => {
      const top = document.documentElement.scrollTop;

      if (top > 3) {
        setTopHeader(false);
      } else {
        setTopHeader(true);
      }
    };
    window.addEventListener("scroll", changeNavbarDesign_onscroll);
    return () => {
      window.removeEventListener("scroll", changeNavbarDesign_onscroll);
    };
  }, [topHeader]);

  return (
    <div
      // style={{
      //   transform: topHeader ? "translateY(15%)" : "translateY(-0%)",
      // }}
      className={`${
        topHeader === false &&
        " drop-shadow-md  bg-[#F5F5F5] black-color  transform transition-all duration-500 ease-in-out z-50"
      } z-50 fixed w-full py-6  white-color transition-all duration-500 hover:bg-[#F5F5F5] hover:text-[#1e1e1e] hover:drop-shadow-md `}
    >
      <div className="layout px-6 lg:px-4  ">
        <div className="grid lg:grid-cols-12 grid-cols-2 gap-10 items-center ">
          <div className="flex lg:gap-16 gap-4 items-center lg:col-span-3 ">
            <a href="/" className="  lg:text-[30px] text-[28px] font-semibold ">
              QUICK REPAIR
            </a>
          </div>

          <div className="lg:flex hidden items-center justify-center lg:col-span-6 ">
            <div className="flex lg:gap-8 items-center justify-center">
              <div className="lg:flex gap-8 hidden">
                {header_items?.map((data, index) => {
                  return (
                    <a
                      href={data?.slug}
                      key={index}
                      className=" relative group hover:cursor-pointer"
                    >
                      <div className="flex items-center gap-2 ">
                        <div className="text-[16px]  font-medium">
                          {data?.name}
                        </div>
                      </div>
                      {/* <div
                        className={`${
                          pathname == data?.slug &&
                          "absolute w-[100%] h-[2px]  z-0  bottom-[-10px] left-0 right-0 rounded-[2px]  bg-[#8600F2]"
                        }`}
                      ></div> */}
                      <div className="absolute w-[10%] h-[2px] transition-all duration-500 group-hover:w-[100%]  z-0  bottom-[-10px] left-0 right-0 rounded-[2px]  group-hover:bg-[#8D2CFF] "></div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className=" lg:col-span-3  lg:flex justify-end hidden">
            <Button
              data={{
                name: "Book a Service",
                icon: <FaArrowRightLong />,
              }}
            />
          </div>
          <div className=" lg:hidden  flex justify-end">
            <div className="" onClick={showDrawer}>
              <RiMenu3Fill size={20} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Drawer
          styles={{
            header: { background: "#101317", color: "red" },
            body: {
              backgroundColor: "#0A0A0A",
            },
          }}
          title=""
          onClose={onClose}
          open={open}
          className=" z-50 "
          closeIcon={customCloseIcon}
        >
          <div className="flex flex-col gap-6 ">
            {header_items?.map((data, index) => {
              return (
                <a
                  href={data?.slug}
                  key={index}
                  className="text-[14px] white-color font-semibold"
                >
                  {data?.name}
                </a>
              );
            })}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
