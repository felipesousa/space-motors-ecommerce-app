import React from "react";
import PropTypes from "prop-types";

import styles from './space-motors-button.module.scss';

interface Props {
  text: string;
  type: "primary" | "secondary" | "tertiary";
  className: any;
}

export const Button = ({
  text = "Get Started",
  type,
  className,
}: Props): JSX.Element => {
  return (
    <a
      className={`${styles.button} ${styles[type]} ${className}`}
      href="https://www.animaapp.com/?utm_source=figma-samples&amp;utm_campaign=figma-lp-ui-kit&amp;utm_medium=figma-samples"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={styles.label}>{text}</div>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};
