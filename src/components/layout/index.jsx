import PropTypes from "prop-types";
import React from "react";

import Container from "../container";

import classes from "./layout.module.css";
import "./normalize.css";
import "./global.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Container>{children}</Container>
      <div className={classes.blobMain}>
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(300,300)">
            <path
              d="M90.1,-115.9C120.6,-81.8,151.9,-57,176.4,-16.5C200.9,24,218.7,80.2,197.3,110.7C175.9,141.1,115.3,145.7,65.8,150.7C16.3,155.7,-22.1,161,-55.2,149.8C-88.3,138.6,-116,110.8,-150.4,75.2C-184.8,39.6,-225.8,-3.7,-213.2,-31.1C-200.6,-58.4,-134.4,-69.8,-89.9,-101.5C-45.4,-133.1,-22.7,-185.1,3.5,-189.3C29.8,-193.5,59.6,-150,90.1,-115.9Z"
              fill="#3586ea"
            />
          </g>
        </svg>
      </div>
      <div className={classes.blobSecondary}>
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(300,300)">
            <path
              d="M145.4,-184.2C164.7,-157,140.5,-88.7,133.8,-36.9C127.1,15,138,50.5,134.7,97.9C131.3,145.4,113.7,204.7,72.5,235.3C31.4,265.9,-33.4,267.8,-73.2,237.6C-113.1,207.3,-128,144.9,-155.9,92.1C-183.9,39.4,-224.9,-3.8,-224.4,-45.3C-224,-86.9,-182.1,-127,-137.7,-149.8C-93.4,-172.7,-46.7,-178.3,8.1,-188C63,-197.7,126,-211.5,145.4,-184.2Z"
              fill="#3586ea"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
