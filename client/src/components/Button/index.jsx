import React from "react";
import { Button } from "antd";

export const CaButton = ({ onClick, title, type }) => {
  return (
    <Button type={type} onClick={onClick}>
      {title}
    </Button>
  );
};
