import React from "react";
import Button from "@mui/material/Button";

export default function ButtonComponent({
  text,
  size,
  variant,
  onClick,
  className,
  type,
  startIcon,
  sx
}) {
  return (
    <div>
      <Button
        size={size}
        type={type}
        variant={variant}
        onClick={onClick}
        className={className}
        startIcon={startIcon}
        sx={sx}
      >
        {text}
      </Button>
    </div>
  );
}
