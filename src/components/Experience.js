import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="cursor-pointer dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <span className="font-medium w-full">{work}</span>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Front End Developer"
            company="Self-Employed"
            time="2022-Present"
            address="Freelancer"
            work={
              <ul className="list-disc pl-5 ">
                <li>Developed several projects for self-practice.</li>

                <li>Created the front-end for the admin panel.</li>
                <li>
                  Featuring various components like tables, graphs, detailed
                  lists, and custom dynamic forms to enhance user experience.
                </li>
                <li>
                  Engineered the data table UI with robust features, including
                  search functionality and complex multi-filter options.
                </li>
              </ul>
            }
          />

          <Details
            position="Intern Web Developer"
            company="Studio93"
            time="July 2024 – December 2024"
            address="Lahore"
            work={
              <ul className="list-disc pl-5">
                <li>
                  Built a strong foundation in React and Node.js, igniting my
                  enthusiasm for crafting dynamic and interactive web
                  applications.
                </li>

                <li>
                  Improved e-commerce capabilities by integrating seamless
                  Coupon system, Cart functionality and a Checkout Portal for a
                  smoother user experience.
                </li>
                <li>Create E-Commerce Store's with Admin Panel.</li>
                <li>
                  Recreated websites to refine my skills and improve my
                  experience.
                </li>
                <li>
                  Developed self-learning skills through continuous exploration
                  and research.
                </li>
              </ul>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
