//images
import logo from "../../../../public/images/logo/white-logo.png";

//react icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import type { IFooter } from "../../../interface/interface";

const Footer = () => {
  const footerList = [
    {
      title: "Services",
      servicesName: [
        {
          name: "Washing Machine Repair",
          slug: "washing-machine-repair",
        },
        {
          name: "Refrigerator Repair",
          slug: "refrigerator-repair",
        },
        {
          name: "AC Repair",
          slug: "ac-repair",
        },
      ],
    },
    {
      title: "Useful Links",
      servicesName: [
        {
          name: "Conditions",
          slug: "pc-repair",
        },
        {
          name: "Privacy Policy",
          slug: "pc-repair",
        },
        {
          name: "Latest Blogs",
          slug: "pc-repair",
        },
        {
          name: "Testimonials",
          slug: "pc-repair",
        },
        {
          name: "Our Mechanics",
          slug: "pc-repair",
        },
      ],
    },
    {
      title: "Get in Touch",
      servicesName: [
        {
          name: "Phone",
          detail: "+123 14565 232454327",
          linktype: "tel",
        },
        {
          name: "Email",
          detail: "lp@gmail.com",
          linktype: "mail",
        },
        {
          name: "Location",
          detail: "Coral Way, Miami, Florida, 33169",
        },
      ],
    },
  ];
  return (
    <div className="bg-[#16111D] white-color">
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
          <div className="flex flex-col gap-4">
            <div className="h-[7vh] ">
              <img src={logo?.src} alt="" />
            </div>
            <div className="text-[14px]">
              Your trusted repair solution: Fast, reliable, and hassle-free
              service. We fix it all, from gadgets to appliances. Visit us
              online or call now for expert assistance.
            </div>
            <div className="flex items-center gap-4">
              <SocialLinks
                data={{
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/",
                }}
              />
              <SocialLinks
                data={{
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/",
                }}
              />
              <SocialLinks
                data={{
                  icon: <FaWhatsapp />,
                  link: "https://www.whatsapp.com/",
                }}
              />
            </div>
          </div>

          {footerList?.map((data: IFooter, index: any) => {
            return (
              <div key={index} className="flex flex-col items-center ">
                <div className="flex flex-col gap-4">
                  <div className=" text-[18px] font-semibold  h-[7vh] ">
                    {data?.title}
                  </div>
                  <div className="flex flex-col gap-4">
                    {data?.servicesName?.map((data, index) => {
                      return (
                        <div key={index} className="">
                          {data?.slug ? (
                            <a href={data?.slug}>{data?.name}</a>
                          ) : (
                            <div className="">{data?.name}</div>
                          )}
                          {data?.linktype ? (
                            <a href={`${data?.linktype}:${data?.detail}`}>
                              {data?.detail}
                            </a>
                          ) : (
                            <div className="">{data?.detail}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 border-t-[1px] flex lg:flex-row lg:justify-between flex-col  border-[white]">
          <div className="mt-4">
            <div className="">
              &#169; Quick Repair 2023 | All Rights Reserved
            </div>
          </div>
          <div className="mt-4 text-[14px] flex gap-6">
            <a href="">Privacy Policy</a>
            <a href="">Terms Of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
