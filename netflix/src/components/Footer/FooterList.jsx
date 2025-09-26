import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterList = () => {
  const items = [
    "Audio Description",
    "Help Centre",
    "Gift Cards",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    "Terms of Use",
    "Privacy",
    "Legal Notices",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" }); 

  return (
    <ul ref={ref}>
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: i * 0.1, 
          }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
};

export default FooterList;
