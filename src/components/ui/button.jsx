import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none font-semibold disabled:opacity-50 transition-opacity hover:opacity-80",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-t from-black/10 to-transparent bg-primary border-t-[1.75px] border-white/30 shadow ",
        secondary:
          "bg-gradient-to-t from-black/10 to-transparent bg-secondary border-t-[1.75px] border-white/20 shadow ",
        danger:
          "bg-gradient-to-t from-black/10 to-transparent bg-danger border-t-[1.75px] border-white/40 shadow  ",
        success:
          "bg-gradient-to-t from-black/10 to-transparent bg-success border-t-[1.75px] border-white/40 shadow  ",
        light:
          "bg-gradient-to-t from-black/15 to-transparent bg-foreground text-background border-t-[2px] border-black/5  shadow  ",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      type: {
        plain: "!from-transparent !to-transparent !border-none !opacity-100 hover:!brightness-110 !font-[500]  transition-filter",
        chill: "!from-transparent !to-transparent !border-none !opacity-100 hover:!brightness-110 !font-[500]  transition-filter",

      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, type, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, type, className }), `${type == "chill" && `${!variant ? 'bg-primary/50' : variant == 'secondary' ? 'bg-white/[0.075] hover:!brightness-150' : 'bg-danger/50'}`}`)}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
