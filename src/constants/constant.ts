export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

import washingmachine from "../../public/images/services/washingmachine.jpg";
import refrigerator from "../../public/images/services/refrigerator.jpg";
import ac from "../../public/images/services/airconditioning.jpg";

export const serviceCollection = [
  {
    title: "Washing Machine Repair",
    slug: "washing-machine-repair",
    img: washingmachine,
    description:
      "Our team of skilled technicians is dedicated to diagnosing and resolving any issues with your washing machine promptly and efficiently. Whether it's a minor repair or a major overhaul, you can trust us to get your washing machine back up and running in no time. With our commitment to quality service and customer satisfaction, you can rest assured that your laundry woes are in good hands with Quick Repair Service.",
  },
  {
    title: "Refrigerator Repair",
    slug: "refrigerator-repair",
    img: refrigerator,
    description:
      "Our refrigerator repair service is dedicated to providing swift and reliable solutions to any issues you may encounter. Whether it's a faulty compressor, a malfunctioning thermostat, or any other problem, our experienced technicians are equipped to diagnose and fix it efficiently. Trust us to restore your refrigerator to optimal performance, ensuring your food stays cool and your home life stays uninterrupted.",
  },
  {
    title: "AC Repair",
    slug: "ac-repair",
    img: ac,
    description:
      "Our team of skilled technicians is trained to diagnose and fix a wide range of AC issues, from faulty compressors to refrigerant leaks and beyond. Whether it's a residential or commercial unit, you can rely on us to restore your air conditioner's performance efficiently. Trust Quick Repair Service for prompt, reliable air conditioner repairs that you can count on to beat the heat.",
  },
];