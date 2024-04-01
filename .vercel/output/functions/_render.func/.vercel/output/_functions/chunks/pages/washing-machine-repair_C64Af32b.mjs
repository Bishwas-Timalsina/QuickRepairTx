/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_D3z7NaBN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { P as PageHeader, $ as $$Layout } from './about-us_AH2SQKe1.mjs';
import { jsx } from 'react/jsx-runtime';
import { S as ServiceInfo } from './ac-repair_fdzya5f-.mjs';

const washing1 = new Proxy({"src":"/_astro/washing.BBFzGWXf.jpg","width":848,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/services/washing.jpg";
							}
							
							return target[name];
						}
					});

const washing2 = new Proxy({"src":"/_astro/washing2.C8C6jnxT.jpg","width":848,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Personal/QuickRepairTx/public/images/services/washing2.jpg";
							}
							
							return target[name];
						}
					});

const WashingMachineRepair = () => {
  const relatedImg = [
    {
      img: washing1
    },
    {
      img: washing2
    }
  ];
  const feature = [
    {
      list: "24/7 Live Support"
    },
    {
      list: "Low Cost Services"
    },
    {
      list: "Quick Repair Services"
    },
    {
      list: "Fast Delivery"
    }
  ];
  const detail = "At Quick Repair, we're your trusted experts in washing machine repair. From minor adjustments to major overhauls, our skilled technicians are dedicated to restoring your machine's functionality promptly and efficiently. Say goodbye to laundry disruptions with our reliable repair services tailored to suit your needs";
  const aboutUsDetail = "With years of experience under our belt, we've cultivated a reputation for reliability, professionalism, and top-notch service. Our team of skilled technicians is dedicated to restoring your washing machine to optimal performance, ensuring that you can get back to your daily routine without any hassle";
  const slug = "washing-machine-repair";
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    ServiceInfo,
    {
      data: {
        title: "Professional Repair Solutions for Your Machine",
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
const $$WashingMachineRepair = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WashingMachineRepair;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", PageHeader, { "data": {
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2023/05/ac-repair.jpeg.jpg",
    title: "Washing Machine Repair"
  } })} ${renderComponent($$result2, "WashingMachine", WashingMachineRepair, {})} ` })} </div>`;
}, "D:/Personal/QuickRepairTx/src/pages/service-detail/washing-machine-repair.astro", void 0);

const $$file = "D:/Personal/QuickRepairTx/src/pages/service-detail/washing-machine-repair.astro";
const $$url = "/service-detail/washing-machine-repair";

export { $$WashingMachineRepair as default, $$file as file, $$url as url };
