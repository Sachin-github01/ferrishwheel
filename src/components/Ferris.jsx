import React from "react";
import { motion } from "framer-motion";
import "./ferris.css";

const Ferris = () => {
  const ferrisOfTechs = [
    "node-js.svg",
    "firebase.svg",
    "mongodb.svg",
    "tailwindcss.svg",
    "html.svg",
    "scss.svg",
    "react-js.svg",
    "typescript.svg",
    "python.svg",
    "java.svg",
    "sqlite.svg",
    "jupyter.svg",
  ];
  return (
    <div className="App">
      {ferrisOfTechs.map((tech, index) => {
        return (
          <motion.div
            className="ferris-wheel-techs"
            key={index + 1}
            initial="initial"
            animate={["animate", "initialHide"]}
            variants={{
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index + 1,
                },
              },
              animate: {
                rotate: -360,
                transition: {
                  duration: ferrisOfTechs.length,
                  repeat: Infinity,
                  delay: index + 1,
                  ease: "linear",
                },
              },
            }}
          >
            <div className="image-parent">
              <img
                className="tech-icon"
                src={require(`../images/tech-icons/${tech}`)}
                alt={tech}
              />
            </div>
          </motion.div>
        );
      }, [])}
    </div>
  );
};

export default Ferris;
