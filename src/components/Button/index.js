import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder20: "rounded-radius20",
  icbCircleBorder34: "rounded-radius34",
  icbCircleBorder37: "rounded-radius37",
  icbCircleBorder29: "rounded-radius2914",
  RoundedBorder6: "rounded-radius6",
};
const variants = {
  icbFillBlack901: "bg-black_901",
  icbGradientCyan600Indigo500: "bg-gradient2 ",
  icbFillBlack90033: "bg-black_900_33",
  icbFillBlack900: "bg-black_900",
  icbOutlinePurpleA701: "border border-purple_A701 border-solid",
  FillGray90019: "bg-gray_900_19 text-white_A700_7f",
};
const sizes = {
  smIcn: "p-[4px]",
  mdIcn: "lg:p-[5px] p-[7px] 3xl:p-[9px]",
  lgIcn: "p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px]",
  xlIcn: "lg:p-[19px] p-[24px] 2xl:p-[27px] 3xl:p-[32px]",
  sm: "lg:p-[11px] p-[14px] 2xl:p-[15px] 3xl:p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder20",
    "icbCircleBorder34",
    "icbCircleBorder37",
    "icbCircleBorder29",
    "RoundedBorder6",
  ]),
  variant: PropTypes.oneOf([
    "icbFillBlack901",
    "icbGradientCyan600Indigo500",
    "icbFillBlack90033",
    "icbFillBlack900",
    "icbOutlinePurpleA701",
    "FillGray90019",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "lgIcn", "xlIcn", "sm"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
