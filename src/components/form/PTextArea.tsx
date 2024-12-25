"use client";
import { Textarea } from "@nextui-org/input";
import { Controller } from "react-hook-form";

type TProps = {
  name: string;
  label: string;
  variant?: "flat" | "bordered" | "underlined" | "faded";
  size?: "sm" | "md" | "lg";
  defaultValue?: string;
  rows?: number;
  className?: string;
};

export default function PTextarea({
  name,
  label,
  variant = "underlined",
  size = "md",
  defaultValue = "",
  rows = 3,
  className,
}: TProps) {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <div className="relative">
          <Textarea
            value={value || ""}
            onChange={onChange}
            onBlur={onBlur}
            size={size}
            label={label}
            variant={variant}
            minRows={rows}
            className={className}
          />
          {error && (
            <div className="absolute left-1 bottom-[-1.4rem] text-red-500 whitespace-nowrap overflow-hidden text-sm font-medium text-ellipsis">
              <small>{error.message}</small>
            </div>
          )}
        </div>
      )}
    />
  );
}
