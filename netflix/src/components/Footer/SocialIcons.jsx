import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import facebook from '../../assets/assets/facebook_icon.png'
import insta  from '../../assets/assets/instagram_icon.png'
import twitter from '../../assets/assets/twitter_icon.png'
import yt from '../../assets/assets/youtube_icon.png'

const SocialIcons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="ficons" ref={ref} style={{ display: "flex", gap: "1rem" }}>
      {[facebook, insta, twitter, yt].map((icon, i) => (
        <motion.img
          key={i}
          src={icon}
          alt=""
          initial={{ opacity: 0, x: 50 }} // start 50px to the right
          animate={isInView ? { opacity: 1, x: 0 } : {}} // move to original position when in view
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: i * 0.1, // stagger each icon
          }}
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default SocialIcons;
