import React from "react";
import clsx from "clsx";

export const Button = ({ variant = "primary", className, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition border focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    // Primary CTA – Elite Blue
    primary:
      "bg-[#14608D] text-white border-[#14608D] hover:opacity-95 focus:ring-[#14608D]/40",

    // Outline – Elite Blue
    outline:
      "bg-white text-[#14608D] border-[#14608D]/30 hover:bg-[#14608D]/10 focus:ring-[#14608D]/30",

    // Soft – light Elite Blue background
    soft:
      "bg-[#14608D]/10 text-[#14608D] border-[#14608D]/20 hover:bg-[#14608D]/20 focus:ring-[#14608D]/30",

    // OPTIONAL: Landscaping / success action (Elite Green)
    success:
      "bg-[#448A35] text-white border-[#448A35] hover:opacity-95 focus:ring-[#448A35]/40",
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    />
  );
};
