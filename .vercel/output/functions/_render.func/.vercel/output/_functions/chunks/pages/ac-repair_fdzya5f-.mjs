/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_D3z7NaBN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { P as PageHeader, $ as $$Layout } from './about-us_AH2SQKe1.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { LuDot } from 'react-icons/lu';
import { PiCaretDoubleRightLight } from 'react-icons/pi';

const washingmachine = new Proxy({"src":"/_astro/washingmachine.BDYevnUO.jpg","width":1024,"height":683,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/services/washingmachine.jpg";
							}
							
							return target[name];
						}
					});

const refrigerator = new Proxy({"src":"/_astro/refrigerator.0kMBloKs.jpg","width":1500,"height":810,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/services/refrigerator.jpg";
							}
							
							return target[name];
						}
					});

const airconditioning = new Proxy({"src":"/_astro/airconditioning.BoDrEvVx.jpg","width":612,"height":408,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/services/airconditioning.jpg";
							}
							
							return target[name];
						}
					});

const serviceCollection = [
  {
    title: "Washing Machine Repair",
    slug: "washing-machine-repair",
    img: washingmachine,
    description: "Our team of skilled technicians is dedicated to diagnosing and resolving any issues with your washing machine promptly and efficiently. Whether it's a minor repair or a major overhaul, you can trust us to get your washing machine back up and running in no time. With our commitment to quality service and customer satisfaction, you can rest assured that your laundry woes are in good hands with Quick Repair Service."
  },
  {
    title: "Refrigerator Repair",
    slug: "refrigerator-repair",
    img: refrigerator,
    description: "Our refrigerator repair service is dedicated to providing swift and reliable solutions to any issues you may encounter. Whether it's a faulty compressor, a malfunctioning thermostat, or any other problem, our experienced technicians are equipped to diagnose and fix it efficiently. Trust us to restore your refrigerator to optimal performance, ensuring your food stays cool and your home life stays uninterrupted."
  },
  {
    title: "AC Repair",
    slug: "ac-repair",
    img: airconditioning,
    description: "Our team of skilled technicians is trained to diagnose and fix a wide range of AC issues, from faulty compressors to refrigerant leaks and beyond. Whether it's a residential or commercial unit, you can rely on us to restore your air conditioner's performance efficiently. Trust Quick Repair Service for prompt, reliable air conditioner repairs that you can count on to beat the heat."
  }
];

const ServiceInfo = ({ data }) => {
  const serviceSlug = data?.slug;
  return /* @__PURE__ */ jsx("div", { className: "layout component-padding black-color", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-8 gap-40", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[30px] font-semibold lg:w-[60%]", children: data?.title }),
        /* @__PURE__ */ jsx("div", { className: "leading-[30px]", children: data?.detail })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-6 ", children: data?.relatedImg?.map((data2, index) => {
        return /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-[8px]", children: /* @__PURE__ */ jsx("div", { className: "  hover:scale-110 transition-all duration-700", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: data2?.img?.src,
            alt: "",
            className: " object-cover"
          }
        ) }) }, index);
      }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[24px] font-semibold", children: "About This Service" }),
        /* @__PURE__ */ jsx("div", { className: "leading-[30px]", children: data?.aboutUsDetail })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[24px] font-semibold", children: "Features of This Service" }),
        /* @__PURE__ */ jsx("div", { className: "", children: data?.feature?.map((data2, index) => {
          return /* @__PURE__ */ jsxs("div", { className: "flex items-center ", children: [
            /* @__PURE__ */ jsx("div", { className: " text-[#8D2CFF]", children: /* @__PURE__ */ jsx(LuDot, { size: 40 }) }),
            /* @__PURE__ */ jsx("div", { className: "text-[16px]", children: data2?.list })
          ] }, index);
        }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "col-span-3 ", children: /* @__PURE__ */ jsx("div", { className: "sticky top-[140px] flex flex-col gap-4", children: serviceCollection?.map((data2, index) => {
      return /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/service-detail/${data2?.slug}`,
          className: `${data2?.slug == serviceSlug ? "bg-[#7924DC] text-white" : "bg-[#f1eded] hover:bg-[#7924DC] hover:text-white"}  flex items-center justify-between p-6`,
          children: [
            /* @__PURE__ */ jsx("div", { children: data2?.title }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(PiCaretDoubleRightLight, {}) })
          ]
        },
        index
      );
    }) }) })
  ] }) });
};

const airconditioning2 = new Proxy({"src":"/_astro/airconditioning2.ClUJaKCZ.jpg","width":1600,"height":1067,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/services/airconditioning2.jpg";
							}
							
							return target[name];
						}
					});

const AirConditionService = () => {
  const relatedImg = [
    {
      img: airconditioning
    },
    {
      img: airconditioning2
    }
  ];
  const feature = [
    {
      list: "Expert Technicians"
    },
    {
      list: "Prompt Response"
    },
    {
      list: "Comprehensive Repairs"
    },
    {
      list: "Transparent Pricing"
    }
  ];
  const detail = "Whether it's cooling problems, strange noises, or malfunctioning components, you can trust us to provide expert solutions. Rest easy knowing your refrigerator is in capable hands - schedule your repair with us today and keep your kitchen running smoothly.";
  const aboutUsDetail = " With years of experience in the appliance repair industry, our team is committed to providing top-notch service to our customers. We pride ourselves on our professionalism, reliability, and dedication to restoring your refrigerator to optimal performance.";
  const slug = "ac-repair";
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    ServiceInfo,
    {
      data: {
        title: "Your Trusted Refrigerator Repair Solution",
        detail,
        relatedImg,
        feature,
        aboutUsDetail,
        slug
      }
    }
  ) });
};

const $$Astro = createAstro();
const $$AcRepair = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AcRepair;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", PageHeader, { "data": {
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2023/05/ac-repair.jpeg.jpg",
    title: "AC Repair"
  } })} ${renderComponent($$result2, "AirConditionService", AirConditionService, {})} ` })} </div>`;
}, "D:/Personal/QuickRepairTx/src/pages/service-detail/ac-repair.astro", void 0);

const $$file = "D:/Personal/QuickRepairTx/src/pages/service-detail/ac-repair.astro";
const $$url = "/service-detail/ac-repair";

const acRepair = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AcRepair,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ServiceInfo as S, acRepair as a, refrigerator as r, serviceCollection as s };
