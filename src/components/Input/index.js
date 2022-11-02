import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  GradientTealA40087DeeppurpleA20087: "bg-gradient ",
  FillGray900b2: "bg-gray_900_b2",
  FillGray90019: "bg-gray_900_19",
  GradientBlue500Bluegray60000: "bg-gradient1 ",
};
const shapes = {
  RoundedBorder16: "rounded-radius16",
  RoundedBorder6: "rounded-radius6",
};
const sizes = {
  sm: "lg:p-[5px] p-[7px] 3xl:p-[9px]",
  md: "pb-[3px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] pt-[9px] px-[3px]",
  lg: "lg:pb-[13px] pb-[17px] 2xl:pb-[19px] 3xl:pb-[22px] pt-[11px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] px-[11px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px]",
  xl: "pb-[11px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pt-[13px] pt-[17px] 2xl:pt-[19px] 3xl:pt-[22px] px-[11px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder16", "RoundedBorder6"]),
  variant: PropTypes.oneOf([
    "GradientTealA40087DeeppurpleA20087",
    "FillGray900b2",
    "FillGray90019",
    "GradientBlue500Bluegray60000",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder16",
  variant: "GradientTealA40087DeeppurpleA20087",
  size: "md",
};

export { Input };
