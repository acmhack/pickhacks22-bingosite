import React from "react";
import "./App.css";
import styled, { AnyStyledComponent } from "styled-components";
import { motion } from "framer-motion";
const Example: AnyStyledComponent = styled.div``;

export default () => {
  return (<div>
    <div>
    <motion.div animate={{ scale: 0.5}} transition={{ duration: 0.5}}>test</motion.div>
    
    </div>
    </div>)
};
