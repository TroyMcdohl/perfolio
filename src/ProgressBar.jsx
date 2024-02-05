import React, { useEffect, useState } from "react";
import "./progressBar.css";
import { motion } from "framer-motion";

const ProgressBar = (props) => {
  const [barData, setBarData] = useState(0);

  useEffect(() => {
    if (barData != 100) {
      setTimeout(() => {
        setBarData((prev) => prev + 20);
      }, 1000);
    } else {
      props.barProps(barData);
    }
  }, [barData]);

  return (
    <div className="progress_container">
      <div className="progress_bar">
        <motion.div
          className="bar"
          animate={{ width: `${barData}%` }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="percent">{barData}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;
