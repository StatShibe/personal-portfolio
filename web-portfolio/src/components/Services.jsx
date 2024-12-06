import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Web Development",
    description:
      "Specialise in building interactive and robust web applications using a variety of technologies which include React JS, Node, Express, Postgresql, MongoDB, Flask etc.",
  },
  {
    name: "Artificial Intelligence",
    description:
      "Building powerful and accurate machine learning models to model relationships between data and use them for various problems.",
  },
  {
    name: "Data Analytics",
    description:
      "Creating comprehensive reports using data insight and business domain to deliver analytical services that help people make important decisions.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-sky-400 mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
            I'm a Junior Developer stepping into the world of Information Technology.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description} = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[30px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-3">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
