import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c89a5a] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#2a1711] text-[#fff7ea] shadow-[0_18px_48px_rgba(78,45,25,0.25)] hover:-translate-y-0.5 hover:bg-[#3a2118]",
        secondary:
          "border border-[#3a2118]/15 bg-white/55 text-[#2a1711] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/80",
        gold:
          "bg-[#c89a5a] text-[#25150f] shadow-[0_18px_54px_rgba(200,154,90,0.35)] hover:-translate-y-0.5 hover:bg-[#d7aa6a]"
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4",
        lg: "h-14 px-7 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
