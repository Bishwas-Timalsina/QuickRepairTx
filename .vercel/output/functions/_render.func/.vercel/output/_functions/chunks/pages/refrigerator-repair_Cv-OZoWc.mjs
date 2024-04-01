/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_D3z7NaBN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { P as PageHeader, $ as $$Layout } from './about-us_AH2SQKe1.mjs';
import { jsx } from 'react/jsx-runtime';
import { S as ServiceInfo, r as refrigerator } from './ac-repair_fdzya5f-.mjs';

const RefrigeratorService = () => {
  const relatedImg = [
    {
      img: refrigerator
    },
    {
      img: refrigerator
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
  const slug = "refrigerator-repair";
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
const $$RefrigeratorRepair = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RefrigeratorRepair;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", PageHeader, { "data": {
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2023/05/ac-repair.jpeg.jpg",
    title: "Refrigerator Repair"
  } })} ${renderComponent($$result2, "RefrigeratorService", RefrigeratorService, {})} ` })} </div>`;
}, "D:/Personal/QuickRepairTx/src/pages/service-detail/refrigerator-repair.astro", void 0);

const $$file = "D:/Personal/QuickRepairTx/src/pages/service-detail/refrigerator-repair.astro";
const $$url = "/service-detail/refrigerator-repair";

export { $$RefrigeratorRepair as default, $$file as file, $$url as url };
