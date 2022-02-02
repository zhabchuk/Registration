import React from "react";

export const Input = ({ size, values, placeholder, onChange, onBlur }) => {
  return (
    <input
      size={size}
      values={values}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
