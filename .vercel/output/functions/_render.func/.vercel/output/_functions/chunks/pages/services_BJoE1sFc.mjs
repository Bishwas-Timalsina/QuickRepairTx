/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_D3z7NaBN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { C as ComponentHeader, P as PageHeader, $ as $$Layout } from './about-us_AH2SQKe1.mjs';
import { S as ServiceList } from './index_ClNMLcRz.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';

const PricingQualityForWhyUs = () => {
  const pricingQualityList = [
    {
      title: "Free Diagnosis"
    },
    {
      title: "Transparent Pricing"
    },
    {
      title: "Free Electronic Services"
    },
    {
      title: "Warranty Coverage"
    },
    {
      title: "Flexible Payment Options"
    }
  ];
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "bg-white drop-shadow-md rounded-[8px] p-6 flex flex-col gap-8", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b-[1px] border-[#1e1e1e]", children: /* @__PURE__ */ jsx("div", { className: "mb-4 text-[20px] font-semibold", children: "Our Awesome Pricing" }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: pricingQualityList?.map((data, index) => {
      return /* @__PURE__ */ jsx("div", { className: "text-[16px] font-medium", children: data?.title }, index);
    }) })
  ] }) });
};

const customer = new Proxy({"src":"/_astro/customer.CkXdFAIG.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/services/customer.png";
							}
							
							return target[name];
						}
					});

const freeservice = new Proxy({"src":"/_astro/freeservice.CmUNkxcy.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/services/freeservice.png";
							}
							
							return target[name];
						}
					});

const promptservice = new Proxy({"src":"/_astro/promptservice.DoR85dKn.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/services/promptservice.png";
							}
							
							return target[name];
						}
					});

const technician = new Proxy({"src":"/_astro/technician.Dq1Ati2Z.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/services/technician.png";
							}
							
							return target[name];
						}
					});

const ReasonList = () => {
  const reasons = [
    {
      title: "Expert Technicians",
      detail: "Our team comprises experienced technicians equipped with the knowledge and skill to diagnose and repair a diverse range of home appliances efficiently.",
      image: technician
    },
    {
      title: "Prompt Service",
      detail: "We understand the inconvenience of a malfunctioning appliance. That's why we prioritize prompt service, ensuring your appliances are back in working order as quickly as possible.",
      image: promptservice
    },
    {
      title: "Customer Satisfaction Guarantee",
      detail: "Your satisfaction is our priority. We strive to exceed your expectations with every repair, providing transparent communication and reliable service from start to finish.",
      image: freeservice
    },
    {
      title: "Free Electronic Services",
      detail: "Unlike other providers, we offer complimentary electronic services for your repaired appliances. From software updates to calibration, we ensure your devices are optimized for peak performance.",
      image: customer
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "black-color", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6", children: reasons?.map((data, index) => {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex lg:flex-row flex-col gap-10 w-[100%]", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:w-[12%]  h-[85%] w-fit p-2 flex items-center justify-center bg-[white] drop-shadow-md rounded-[8px]", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: data?.image?.src,
          alt: "",
          className: "h-[50px] w-[50px] object-contain"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:w-[80%] flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[20px] font-semibold", children: data?.title }),
        /* @__PURE__ */ jsx("div", { className: "leading-[24px]", children: data?.detail })
      ] })
    ] }) }, index);
  }) }) });
};

const WhyChooseUs = () => {
  return /* @__PURE__ */ jsxs("div", { className: "layout component-padding flex flex-col gap-20", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-center", children: /* @__PURE__ */ jsx(
      ComponentHeader,
      {
        data: {
          title: "Why Choose Us",
          section: "Why Choose Us"
        }
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-8 gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ReasonList, {}) }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsx("div", { className: "sticky top-[140px]", children: /* @__PURE__ */ jsx(PricingQualityForWhyUs, {}) }) })
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", PageHeader, { "data": {
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2023/05/ac-repair.jpeg.jpg",
    title: "Our Service",
    subDetail: " Whether it's a minor fix or a major overhaul, trust us to restore your appliances to optimal functionality, providing you with peace of mind and convenience at every step."
  } })} ${renderComponent($$result2, "ServiceList", ServiceList, {})} ${renderComponent($$result2, "WhyChooseUs", WhyChooseUs, {})} ` })} </div>`;
}, "D:/Personal/QuickRepairTx/src/pages/services.astro", void 0);

const $$file = "D:/Personal/QuickRepairTx/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
