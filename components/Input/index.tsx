import React, {DetailedHTMLProps, useState} from "react";

import classes from "./styles.module.scss";

type propTypes = {
  label?: string;
  value?: string;
  password?: string;
} & DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type textAreaPropTypes = {
  label?: string;
  value?: string;
  height?: string;
} & DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const Input = ({label, value, password, ...props}: propTypes) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={classes.input_wrap}>
      <label>{label}</label>
      <input
        value={value}
        {...props}
        type={showPassword ? "text" : props.type}
        className={classes.field}
      />
      {props.type == "password" && (
        <span
          className="cursor-pointer
         select-none font-light text-sm"
          onClick={() => setShowPassword(!showPassword)}
        >
          Show
        </span>
      )}
    </div>
  );
};

export default Input;

export const TextArea = ({
  label,
  value,
  height = "min-h-28",
  ...props
}: textAreaPropTypes) => {
  return (
    <div className={`${classes.input_wrap} `}>
      <label>{label}</label>
      <textarea
        value={value}
        className={`${classes.field} resize-none pt-4 ${height}  `}
        {...props}
      />
    </div>
  );
};
