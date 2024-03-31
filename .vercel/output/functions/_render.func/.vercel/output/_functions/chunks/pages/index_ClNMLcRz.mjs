/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_D3z7NaBN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { C as ComponentHeader, B as Button, A as AboutUs, $ as $$Layout } from './about-us_AH2SQKe1.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { FaArrowRightLong } from 'react-icons/fa6';
import { s as serviceCollection } from './ac-repair_fdzya5f-.mjs';
/* empty css                          */
import { FaCheck } from 'react-icons/fa';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const ServiceList = () => {
  return /* @__PURE__ */ jsx("div", { className: "layout component-padding", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-[100px]", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:w-[60%]", children: /* @__PURE__ */ jsx(
      ComponentHeader,
      {
        data: {
          section: "Our Services",
          title: "What We Offer to Our Customers"
        }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col lg:gap-14 gap-[150px]", children: serviceCollection?.map((data, index) => {
      return /* @__PURE__ */ jsx("div", { className: "flex flex-col ", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${index % 2 !== 0 ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"} flex lg:justify-between lg:items-center w-[100%] `,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `${index % 2 !== 0 && "  flex  lg:justify-end"} lg:w-[50%]  relative`,
                children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: data?.img.src,
                    alt: "",
                    className: "rounded-full lg:w-[50vh] lg:h-[50vh] w-[25vh] h-[25vh]  object-cover "
                  }
                ) })
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `/service-detail/${data?.slug}`,
                className: "lg:w-[50%] flex flex-col gap-6 group",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: " flex flex-col gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-t text-[22px] font-semibold text-transparent bg-clip-text from-[#8D2CFF] to-[#7924DC]", children: data?.title }),
                    /* @__PURE__ */ jsx("div", { className: " text-[14px] leading-[26px]", children: data?.description })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center w-fit group-hover:text-[#7924DC] group hover:cursor-pointer ", children: [
                    /* @__PURE__ */ jsx("div", { className: "group-hover:tracking-wide transition-all duration-700", children: "Explore" }),
                    /* @__PURE__ */ jsx("div", { className: "group-hover:translate-x-2 transition-all duration-700", children: /* @__PURE__ */ jsx(FaArrowRightLong, {}) })
                  ] })
                ]
              }
            )
          ]
        }
      ) }, index);
    }) })
  ] }) });
};

const HeroSection = () => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "max-w-[1920px] mx-auto relative bg-no-repeat white-color bg-cover",
      style: {
        backgroundImage: `url("./images/herosection/washingmachine.jpg")`
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute bg-gradient-to-l from-[#0c090f] to-[#2d1749] opacity-80 3xl:opacity-70 w-full h-full top-0 left-0 right-0 bottom-0" }),
        /* @__PURE__ */ jsx("div", { className: "lg:pt-[95px]  h-[100vh] flex items-center justify-center lg:translate-y-[-20px]    3xl:pt-[100px] pt-[50px]    relative ", children: /* @__PURE__ */ jsx("div", { className: "layout component-padding  relative", children: /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-14 lg:col-span-7", children: [
          /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                color: "white"
              },
              className: "before:content-[''] text-[20px]  font-medium  before:bottom-[6px] before:w-[18%] before:h-[8%] before:bg-[#8D2CFF] before:absolute before:left-[44%] before:lg:left-[55%] before:right-0",
              children: "Washing Machine Repairing Services"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
            /* @__PURE__ */ jsx("div", { className: "lg:text-[58px] font-semibold", children: "Repair Your Machines From Expert" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-7", children: [
              /* @__PURE__ */ jsx("div", { className: "", children: "Our repair services offer prompt and professional assistance to ensure your appliance is up and running efficiently. Whether it's a minor glitch or a major breakdown, our skilled technicians are equipped to diagnose and fix a wide range of issues." }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                Button,
                {
                  data: {
                    name: "Learn More",
                    icon: /* @__PURE__ */ jsx(FaArrowRightLong, {})
                  }
                }
              ) })
            ] })
          ] })
        ] }) }) }) })
      ]
    }
  );
};

const OurAssurance = () => {
  const assuranceList = [
    {
      title: "Reliable Services",
      description: "From expert solutions to dependable support, we ensure peace of mind with our top-notch reliability, professional licensing, and ironclad guarantees. Trust us to deliver excellence every step of the way.",
      link: "#"
    },
    {
      title: "Licensed & Certified",
      description: "Our repair service is licensed and certified, ensuring the highest standards of quality and professionalism. Our team of expert technicians holds all required licenses to operate within the region, demonstrating their competency and compliance with regulatory guidelines",
      link: "#"
    },
    {
      title: "Quality Guarantee",
      description: "Our quality guarantee ensures that you receive nothing but the best, backed by our dedication to delivering superior craftsmanship, reliability, and customer satisfaction.",
      link: "#"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "layout component-padding black-color", children: /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 grid-cols-1 gap-8", children: assuranceList?.map((data, index) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          backgroundColor: "var(--primary-color)"
        },
        className: "drop-shadow-md p-6 flex flex-col gap-6 group",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  color: "var(--accent-color)"
                },
                className: "lg:text-[36px] font-bold",
                children: [
                  "0",
                  index + 1
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "lg:text-[24px] font-semibold", children: data?.title })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-[16px] h-[20vh] no-scrollbar overflow-y-scroll leading-[26px]", children: data?.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center w-fit group-hover:text-[#7924DC] group hover:cursor-pointer ", children: [
            /* @__PURE__ */ jsx("div", { className: "group-hover:tracking-wide transition-all duration-700", children: "Read More" }),
            /* @__PURE__ */ jsx("div", { className: "group-hover:translate-x-2 transition-all duration-700", children: /* @__PURE__ */ jsx(FaArrowRightLong, {}) })
          ] })
        ]
      },
      index
    );
  }) }) });
};

const diagnosis = new Proxy({"src":"/_astro/diagnosis.C-CGFC0r.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/workingProcess/diagnosis.png";
							}
							
							return target[name];
						}
					});

const repair = new Proxy({"src":"/_astro/repair.BgZsTqHw.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/workingProcess/repair.png";
							}
							
							return target[name];
						}
					});

const satisafaction = new Proxy({"src":"/_astro/qualityAssurance.CvM81Kxa.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/workingProcess/qualityAssurance.png";
							}
							
							return target[name];
						}
					});

const RepairProcess = () => {
  const repairList = [
    {
      img: diagnosis,
      title: "Diagnosis & Assessment",
      description: "Firstly, we diagnose the issue reported by the customer, ensuring an accurate understanding before proceeding with repairs"
    },
    {
      img: repair,
      title: "Repair Process",
      description: "In our repair process, we meticulously diagnose device issues, followed by expert repairs and quality assurance checks to ensure optimal performance and reliability."
    },
    {
      img: satisafaction,
      title: "Customer Satisfaction",
      description: " We aim to ensure that every customer interaction leaves them feeling valued and content with our service. We achieve this through attentive support, transparent communication, and high-quality repairs"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "bg-[#16111D]", children: /* @__PURE__ */ jsx("div", { className: "layout component-padding", children: /* @__PURE__ */ jsx("div", { className: " white-color ", children: /* @__PURE__ */ jsxs("div", { className: " flex flex-col gap-20", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:text-[48px] text-center lg:w-[60%]  text-[28px] font-semibold", children: "Who We are & How We Work" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8", children: repairList?.map((data, index) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "border-[1px] relative group border-[white] p-6 rounded-[8px] flex flex-col gap-8",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-[60px] h-[60px] object-contain", children: /* @__PURE__ */ jsx("img", { src: data?.img.src, alt: "" }) }),
              /* @__PURE__ */ jsx("div", { className: "text-[20px] font-semibold", children: data?.title })
            ] }),
            /* @__PURE__ */ jsx("div", { children: data?.description }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-[-30px] right-10 group-hover:animate-spin", children: /* @__PURE__ */ jsx("div", { className: "border-[2px] h-[60px] w-[60px] border-[#8D2CFF] group-hover:bg-[white] group-hover:text-[#8D2CFF] bg-[#16111D] rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-[24px]", children: [
              "0",
              index + 1
            ] }) }) })
          ]
        },
        index
      );
    }) }) })
  ] }) }) }) });
};

const david = new Proxy({"src":"/_astro/david.nKqDZXE4.jpg","width":848,"height":932,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/teams/david.jpg";
							}
							
							return target[name];
						}
					});

const holden = new Proxy({"src":"/_astro/ken.9h5Q5VmT.jpg","width":848,"height":932,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/teams/holden.jpg";
							}
							
							return target[name];
						}
					});

const jordan = new Proxy({"src":"/_astro/jordan.L1T15dFj.jpg","width":848,"height":932,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/teams/jordan.jpg";
							}
							
							return target[name];
						}
					});

const ken = new Proxy({"src":"/_astro/ken.9h5Q5VmT.jpg","width":848,"height":932,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/teams/ken.jpg";
							}
							
							return target[name];
						}
					});

const OurTeam = () => {
  const teamList = [
    {
      img: david,
      title: "David",
      position: "Tech Specialist"
    },
    {
      img: holden,
      title: "Holden",
      position: "Tech Specialist"
    },
    {
      img: jordan,
      title: "Jordan",
      position: "Tech Specialist"
    },
    {
      img: ken,
      title: "Ken",
      position: "Tech Specialist"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "black-color", children: /* @__PURE__ */ jsxs("div", { className: "layout component-padding flex flex-col gap-20", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-center lg:w-[45%] ", children: /* @__PURE__ */ jsx(
      ComponentHeader,
      {
        data: {
          section: "Experts on Repairs",
          title: "Meet Our Expert Team Members"
        }
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-4 gap-10", children: teamList?.map((data, index) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            backgroundColor: "var(--primary-color)"
          },
          className: " rounded-[8px] drop-shadow-md p-6 flex flex-col gap-4",
          children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: data?.img?.src, alt: "" }) }),
            /* @__PURE__ */ jsxs("div", { className: "black-color flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[18px]", children: data?.title }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-[16px] font-semibold",
                  style: {
                    color: "var(--accent-color)"
                  },
                  children: data?.position
                }
              )
            ] })
          ]
        },
        index
      );
    }) }) })
  ] }) });
};

const snap = new Proxy({"src":"/_astro/snap.BtY6nTkX.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/random/snap.png";
							}
							
							return target[name];
						}
					});

const BestFeature = () => {
  return /* @__PURE__ */ jsx("div", { className: "bg-[#cfe2de] black-color", children: /* @__PURE__ */ jsx("div", { className: "layout component-padding", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:text-[38px]  font-semibold text-center leading-[60px]", children: /* @__PURE__ */ jsxs("span", { children: [
    "Through our top-notch services, our customers have seen",
    " ",
    /* @__PURE__ */ jsxs("span", { className: "inline", children: [
      "remarkable improvements,",
      " ",
      /* @__PURE__ */ jsx(
        "img",
        {
          src: snap?.src,
          alt: "",
          className: "h-[60px] w-[60px] inline object-contain"
        }
      ),
      " ",
      "making their lives easier and more convenient than ever before."
    ] })
  ] }) }) }) }) });
};

const PricingPlans = () => {
  const pricingList = [
    {
      title: "Silver Plan",
      price: "$ 29.65",
      pricingService: [
        {
          list: "Diagnosis of up to 2 electronic appliances.",
          included: "yes"
        },
        {
          list: "Basic repairs for identified issues.",
          included: "yes"
        },
        {
          list: "Standard parts replacement as needed.",
          included: "yes"
        },
        {
          list: "30-day warranty on repairs.",
          included: "no"
        },
        {
          list: "Priority scheduling for service visits.",
          included: "no"
        }
      ]
    },
    {
      title: "Gold Plan",
      price: "$ 50.65",
      pricingService: [
        {
          list: "Comprehensive diagnosis of up to 3 electronic appliances.",
          included: "yes"
        },
        {
          list: "Advanced repairs for identified issues.",
          included: "yes"
        },
        {
          list: "Premium parts replacement for enhanced durability.",
          included: "yes"
        },
        {
          list: "60-day warranty on repairs.",
          included: "no"
        },
        {
          list: "Annual maintenance check-up for covered appliances.",
          included: "no"
        }
      ]
    },
    {
      title: "Diamond Plan",
      price: "$ 85.65",
      pricingService: [
        {
          list: "Thorough diagnosis of up to 5 electronic appliances",
          included: "yes"
        },
        {
          list: "Extensive repairs for identified issues, including complex troubleshooting.",
          included: "yes"
        },
        {
          list: "30-day warranty on repairs",
          included: "yes"
        },
        {
          list: "Priority scheduling for service visits.",
          included: "yes"
        },
        {
          list: "60-day warranty on repairs",
          included: "yes"
        },
        {
          list: "Annual maintenance check-up for covered appliances",
          included: "yes"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "layout component-padding black-color", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-20", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-center lg:w-[60%]", children: /* @__PURE__ */ jsx(
      ComponentHeader,
      {
        data: {
          section: "Our Pricing Plans",
          title: "Select The Best Package For You"
        }
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8", children: pricingList?.map((data, index) => {
      return /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#",
          className: "bg-[#F5F5F5] group drop-shadow-md rounded-[8px] p-8 h-[100%] flex flex-col justify-between",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 lg:mb-[75px]", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-[16px]", children: data?.title }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "lg:text-[57px] font-medium group-hover:text-[#8D2CFF]", children: [
                  data?.price,
                  " ",
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        fontSize: "12px",
                        color: "gray"
                      },
                      children: "/ Monthly"
                    }
                  )
                ] }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: data?.pricingService.map((data2, index2) => {
                return /* @__PURE__ */ jsxs("div", { className: "flex  gap-4", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `${data2?.included == "yes" ? "bg-[#d1b3f3]" : "bg-gray-300"} translate-y-[-1px]  flex items-center justify-center p-2  h-[25px] w-[25px] rounded-full`,
                      children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(FaCheck, { size: 10 }) })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `
                                ${data2.included == "no" ? "line-through" : ""}
                                `,
                      children: data2.list
                    }
                  )
                ] }, index2);
              }) }) })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              Button,
              {
                data: {
                  name: "Choose Package"
                }
              }
            ) })
          ]
        }
      );
    }) })
  ] }) });
};

const girlone = new Proxy({"src":"/_astro/girlone.CabW2mET.jpg","width":996,"height":664,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/testimonial/girlone.jpg";
							}
							
							return target[name];
						}
					});

const girlthree = new Proxy({"src":"/_astro/girlthree.b7IDDhAW.jpg","width":1500,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/testimonial/girlthree.jpg";
							}
							
							return target[name];
						}
					});

const boyone = new Proxy({"src":"/_astro/boyone.YOfeo6IN.jpg","width":1500,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/testimonial/boyone.jpg";
							}
							
							return target[name];
						}
					});

const Testimonial = () => {
  const testimonialList = [
    {
      img: girlone,
      name: "Ava Smith",
      detail: "Efficient and professional repair service! They quickly diagnosed and fixed my device, exceeding my expectations. I'm impressed with their expertise and outstanding customer care. Highly recommend their services to all!",
      position: "Sales Associate"
    },
    {
      img: boyone,
      name: "Oliver Michael Robinson",
      detail: "Fast, reliable service! Fixed my device with expertise and care. Highly recommended for anyone needing quick, professional repairs. Thank you!",
      position: "Research Assistant"
    },
    {
      img: girlthree,
      name: "Ava Smith",
      detail: "Exceptional service! Repaired my device swiftly and effectively. Highly skilled team with excellent customer support. Trustworthy and dependable. Will definitely use again and recommend to others.",
      position: "Human Resources Specialist"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "layout component-padding black-color flex flex-col gap-20", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      ComponentHeader,
      {
        data: {
          title: "Hear from our happy customer",
          section: ""
        }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8", children: testimonialList?.map((data, index) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "drop-shadow-md hover:drop-shadow-xl p-6 rounded-[8px] flex flex-col gap-6",
          style: {
            backgroundColor: "var(--primary-color)"
          },
          children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(BiSolidQuoteAltLeft, { size: 45, className: "text-[#1e1e1e]" }) }),
            /* @__PURE__ */ jsx("div", { className: "h-[22vh] no-scrollbar overflow-y-scroll leading-[26px]", children: /* @__PURE__ */ jsx("div", { children: data?.detail }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex  gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: data?.img?.src,
                  alt: "",
                  className: "h-[80px] w-[80px] rounded-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "translate-y-[10px]", children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-[16px]", children: data?.name }),
                /* @__PURE__ */ jsx("div", { className: "text-gray-400", children: data?.position })
              ] }) })
            ] })
          ]
        },
        index
      );
    }) })
  ] });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${maybeRenderHead()}<div class=""> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", HeroSection, {})} ${renderComponent($$result2, "OurAssurance", OurAssurance, {})} ${renderComponent($$result2, "AboutUs", AboutUs, {})} ${renderComponent($$result2, "ServiceList", ServiceList, {})} ${renderComponent($$result2, "RepairProcess", RepairProcess, {})} ${renderComponent($$result2, "PricingPlans", PricingPlans, {})} ${renderComponent($$result2, "BestFeature", BestFeature, {})} ${renderComponent($$result2, "Testimonial", Testimonial, {})} ${renderComponent($$result2, "OurTeam", OurTeam, {})} ` })} </div>`;
}, "D:/Personal/QuickRepairTx/src/pages/index.astro", void 0);

const $$file = "D:/Personal/QuickRepairTx/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ServiceList as S, index as i };
