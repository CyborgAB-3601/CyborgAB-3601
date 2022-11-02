import React from "react";
const variantClasses = {
  h1: "font-bold 2xl:text-[101px] 3xl:text-[121px] lg:text-[72px] text-[90px]",
  h2: "font-normal lg:text-[56px] text-[70px] 2xl:text-[78px] 3xl:text-[94px]",
  h3: "font-normal lg:text-[48px] text-[60px] 2xl:text-[67px] 3xl:text-[81px]",
  h4: "lg:text-[40px] text-[50px] 2xl:text-[56px] 3xl:text-[67px]",
  h5: "font-bold lg:text-[32px] text-[40px] 2xl:text-[45px] 3xl:text-[54px]",
  h6: "font-bold lg:text-[24px] text-[30px] 2xl:text-[33px] 3xl:text-[40px]",
  body1:
    "font-normal lg:text-[20px] text-[25px] 2xl:text-[28px] 3xl:text-[33px]",
  body2: "lg:text-[16px] text-[20px] 2xl:text-[22px] 3xl:text-[27px]",
  body3: "font-bold lg:text-[14px] text-[18px] 2xl:text-[20px] 3xl:text-[24px]",
  body4: "font-bold lg:text-[12px] text-[16px] 2xl:text-[18px] 3xl:text-[21px]",
  body5:
    "font-normal lg:text-[12px] text-[15px] 2xl:text-[16px] 3xl:text-[20px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
