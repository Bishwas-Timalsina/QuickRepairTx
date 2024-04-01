/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead, f as renderComponent, g as renderSlot, m as maybeRenderHead } from '../astro_D3z7NaBN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const PageHeader = ({ data }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        backgroundImage: `url(${data?.image})`
      },
      className: "h-[55vh] bg-cover relative flex items-center justify-center white-color",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute bg-gradient-to-l from-[#0c090f] to-[#2d1749] opacity-80 3xl:opacity-70 w-full h-full top-0 left-0 right-0 bottom-0" }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "lg:text-[45px] text-[35px] font-medium", children: data?.title }),
          /* @__PURE__ */ jsx("div", { className: "w-[60%] text-center ", children: /* @__PURE__ */ jsx("div", { className: "", children: data?.subDetail }) })
        ] })
      ]
    }
  );
};

const HeaderItem = () => {
  const item_collection = [
    {
      name: "Home",
      slug: "/"
    },
    {
      name: "Services",
      slug: "/services"
    },
    {
      name: "About Us",
      slug: "/about-us"
    },
    {
      name: "Blogs",
      slug: "/blogs"
    }
  ];
  return item_collection;
};

const Button = ({ data }) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ jsx("b", { children: data?.name }),
    /* @__PURE__ */ jsx("div", { children: data?.icon })
  ] }) });
};

const Header = () => {
  const header_items = HeaderItem();
  const [topHeader, setTopHeader] = useState(true);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const customCloseIcon = /* @__PURE__ */ jsx(
    RxCross2,
    {
      style: {
        color: "var(--black-color)",
        backgroundColor: "var(--primary-color)"
      },
      className: "p-2 rounded-full"
    }
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${topHeader === false && " drop-shadow-md  bg-[#F5F5F5] black-color  transform transition-all duration-500 ease-in-out z-50"} z-50 fixed w-full py-6  white-color transition-all duration-500 hover:bg-[#F5F5F5] hover:text-[#1e1e1e] hover:drop-shadow-md `,
      children: [
        /* @__PURE__ */ jsx("div", { className: "layout px-6 lg:px-4  ", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 grid-cols-2 gap-10 items-center ", children: [
          /* @__PURE__ */ jsx("div", { className: "flex lg:gap-16 gap-4 items-center lg:col-span-3 ", children: /* @__PURE__ */ jsx("a", { href: "/", className: "  lg:text-[30px] text-[28px] font-semibold ", children: "QUICK REPAIR" }) }),
          /* @__PURE__ */ jsx("div", { className: "lg:flex hidden items-center justify-center lg:col-span-6 ", children: /* @__PURE__ */ jsx("div", { className: "flex lg:gap-8 items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:flex gap-8 hidden", children: header_items?.map((data, index) => {
            return /* @__PURE__ */ jsxs(
              "a",
              {
                href: data?.slug,
                className: " relative group hover:cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 ", children: /* @__PURE__ */ jsx("div", { className: "text-[16px]  font-medium", children: data?.name }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute w-[10%] h-[2px] transition-all duration-500 group-hover:w-[100%]  z-0  bottom-[-10px] left-0 right-0 rounded-[2px]  group-hover:bg-[#8D2CFF] " })
                ]
              },
              index
            );
          }) }) }) }),
          /* @__PURE__ */ jsx("div", { className: " lg:col-span-3  lg:flex justify-end hidden", children: /* @__PURE__ */ jsx(
            Button,
            {
              data: {
                name: "Book a Service",
                icon: /* @__PURE__ */ jsx(FaArrowRightLong, {})
              }
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: " lg:hidden  flex justify-end", children: /* @__PURE__ */ jsx("div", { className: "", onClick: showDrawer, children: /* @__PURE__ */ jsx(RiMenu3Fill, { size: 20 }) }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          Drawer,
          {
            styles: {
              header: { background: "#101317", color: "red" },
              body: {
                backgroundColor: "#0A0A0A"
              }
            },
            title: "",
            onClose,
            open,
            className: " z-50 ",
            closeIcon: customCloseIcon,
            children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6 ", children: header_items?.map((data, index) => {
              return /* @__PURE__ */ jsx(
                "a",
                {
                  href: data?.slug,
                  className: "text-[14px] white-color font-semibold",
                  children: data?.name
                },
                index
              );
            }) })
          }
        ) })
      ]
    }
  );
};

const logo = new Proxy({"src":"/_astro/white-logo.C5abmSUl.png","width":140,"height":46,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/logo/white-logo.png";
							}
							
							return target[name];
						}
					});

const SocialLinks = ({ data }) => {
  return /* @__PURE__ */ jsx("div", { className: "group", children: /* @__PURE__ */ jsx(
    "a",
    {
      href: data?.link,
      className: "bg-[#251d30] group-hover:transition-transform group-hover:duration-700 group-hover:bg-[#8D2CFF]  duration-700 group-hover:rounded-[8px] text-[20px] w-fit flex items-center justify-center rounded-full p-2",
      children: data?.icon
    }
  ) });
};

const Footer = () => {
  const footerList = [
    {
      title: "Services",
      servicesName: [
        {
          name: "PC Repair",
          slug: "pc-repair"
        },
        {
          name: "Laptop Repair",
          slug: "pc-repair"
        },
        {
          name: "Smartphone Repair",
          slug: "pc-repair"
        },
        {
          name: "Tablet Repair",
          slug: "pc-repair"
        },
        {
          name: "MAC Repair",
          slug: "pc-repair"
        }
      ]
    },
    {
      title: "Useful Links",
      servicesName: [
        {
          name: "Conditions",
          slug: "pc-repair"
        },
        {
          name: "Privacy Policy",
          slug: "pc-repair"
        },
        {
          name: "Latest Blogs",
          slug: "pc-repair"
        },
        {
          name: "Testimonials",
          slug: "pc-repair"
        },
        {
          name: "Our Mechanics",
          slug: "pc-repair"
        }
      ]
    },
    {
      title: "Get in Touch",
      servicesName: [
        {
          name: "Phone",
          detail: "+123 14565 232454327",
          linktype: "tel"
        },
        {
          name: "Email",
          detail: "lp@gmail.com",
          linktype: "mail"
        },
        {
          name: "Location",
          detail: "Coral Way, Miami, Florida, 33169"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "bg-[#16111D] white-color", children: /* @__PURE__ */ jsxs("div", { className: "layout component-padding", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 grid-cols-1 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-[7vh] ", children: /* @__PURE__ */ jsx("img", { src: logo?.src, alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: "text-[14px]", children: "Your trusted repair solution: Fast, reliable, and hassle-free service. We fix it all, from gadgets to appliances. Visit us online or call now for expert assistance." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(
            SocialLinks,
            {
              data: {
                icon: /* @__PURE__ */ jsx(FaFacebookF, {}),
                link: "https://www.facebook.com/"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            SocialLinks,
            {
              data: {
                icon: /* @__PURE__ */ jsx(FaInstagram, {}),
                link: "https://www.instagram.com/"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            SocialLinks,
            {
              data: {
                icon: /* @__PURE__ */ jsx(FaWhatsapp, {}),
                link: "https://www.whatsapp.com/"
              }
            }
          )
        ] })
      ] }),
      footerList?.map((data, index) => {
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex flex-col items-center justify-center",
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: " text-[18px] font-semibold h-[7vh] ", children: data?.title }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: data?.servicesName?.map((data2, index2) => {
                return /* @__PURE__ */ jsxs("div", { className: "", children: [
                  data2?.slug ? /* @__PURE__ */ jsx("a", { href: data2?.slug, children: data2?.name }) : /* @__PURE__ */ jsx("div", { className: "", children: data2?.name }),
                  data2?.linktype ? /* @__PURE__ */ jsx("a", { href: `${data2?.linktype}:${data2?.detail}`, children: data2?.detail }) : /* @__PURE__ */ jsx("div", { className: "", children: data2?.detail })
                ] }, index2);
              }) })
            ] })
          },
          index
        );
      })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 border-t-[1px] flex lg:flex-row lg:justify-between flex-col  border-[white]", children: [
      /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "", children: "© Quick Repair 2023 | All Rights Reserved" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 text-[14px] flex gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "", children: "Terms Of Service" })
      ] })
    ] })
  ] }) });
};

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<head><meta charset="UTF-8"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">${renderHead()}</head><div data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Personal/QuickRepairTx/src/components/Header/Header.tsx", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, { "data-astro-cid-sckkx6r4": true })} </div> `;
}, "D:/Personal/QuickRepairTx/src/layouts/Layout.astro", void 0);

const ComponentHeader = ({ data }) => {
  return /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-t  font-semibold text-transparent bg-clip-text from-[#8D2CFF] to-[#7924DC]", children: data?.section }),
    /* @__PURE__ */ jsx("div", { className: "lg:text-[48px]  text-[28px] font-semibold", children: data?.title.split(" ").map((word, index, array) => {
      if (array.length === 2 && index === array.length - 1) {
        return /* @__PURE__ */ jsxs(
          "span",
          {
            className: "bg-gradient-to-t text-transparent bg-clip-text from-[#8D2CFF] to-[#7924DC]",
            children: [
              word,
              " "
            ]
          },
          index
        );
      } else if (array.length === 3 && index >= array.length - 2) {
        return /* @__PURE__ */ jsxs(
          "span",
          {
            className: "bg-gradient-to-t text-transparant bg-clip-text from-[#8D2CFF] to-[#7924DC]",
            children: [
              word,
              " "
            ]
          },
          index
        );
      } else if (array.length > 3 && index >= array.length - 3) {
        return /* @__PURE__ */ jsxs(
          "span",
          {
            className: "bg-gradient-to-t text-transparent bg-clip-text from-[#8D2CFF] to-[#7924DC]",
            children: [
              word,
              " "
            ]
          },
          index
        );
      } else {
        return word + " ";
      }
    }) })
  ] });
};

const repairone = new Proxy({"src":"/_astro/repairone.CaMXAQyw.jpg","width":1000,"height":667,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/aboutus/repairone.jpg";
							}
							
							return target[name];
						}
					});

const repairthree = new Proxy({"src":"/_astro/repairthree.BKF78zga.jpg","width":1500,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/aboutus/repairthree.jpg";
							}
							
							return target[name];
						}
					});

const repairtwo = new Proxy({"src":"/_astro/repairtwo._31p87kA.jpg","width":1500,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/aboutus/repairtwo.jpg";
							}
							
							return target[name];
						}
					});

const AboutUs = () => {
  return /* @__PURE__ */ jsx("div", { className: "layout component-padding ", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-1 gap-16", children: [
    /* @__PURE__ */ jsxs("div", { className: " grid lg:grid-cols-12 gap-16 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-7 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx(
          ComponentHeader,
          {
            data: {
              section: "About Us",
              title: " Your Reliable Partner in Home Appliance Solutions"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "h-[20vh] no-scrollbar overflow-y-scroll leading-[26px]", children: [
          "At Quick Repair Services, we're more than just a team of technicians ",
          `-`,
          " we're your dedicated partners in keeping your home running smoothly. With a commitment to promptness and precision, we specialize in delivering efficient solutions for all your home appliance needs. Count on us for reliable service and unparalleled expertise, ensuring your peace of mind every step of the way"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-5 rounded-[8px]  overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: repairone.src,
          alt: "",
          className: "lg:h-[50vh] 3xl:h-[40vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-16", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-7 rounded-[8px] hover:cursor-pointer overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: repairtwo.src,
          alt: "",
          className: " object-cover hover:scale-110 transition-all duration-700 lg:h-[50vh] 3xl:h-[40vh] w-[100%] rounded-[8px]"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-5 rounded-[8px] hover:cursor-pointer overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: repairthree.src,
          alt: "",
          className: "lg:h-[50vh] 3xl:h-[40vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
        }
      ) })
    ] })
  ] }) });
};

const $$Astro = createAstro();
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutUs;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", PageHeader, { "data": {
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2023/05/ac-repair.jpeg.jpg",
    title: "About Us"
  } })} ${renderComponent($$result2, "About", AboutUs, {})} ` })} </div>`;
}, "D:/Personal/QuickRepairTx/src/pages/about-us.astro", void 0);

const $$file = "D:/Personal/QuickRepairTx/src/pages/about-us.astro";
const $$url = "/about-us";

const aboutUs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, AboutUs as A, Button as B, ComponentHeader as C, PageHeader as P, aboutUs as a };
