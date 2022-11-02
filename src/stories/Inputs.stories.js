import { Input } from "components";
export default {
  title: "abhinav_s_application3/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder16",
  variant: "GradientTealA40087DeeppurpleA20087",
  size: "md",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
