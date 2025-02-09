"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    className={cn(
      "peer inline-flex h-[17px] w-8 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200 dark:data-[state=checked]:bg-blue-400 dark:data-[state=unchecked]:bg-gray-800",
      "focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-950",
      className
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb className="block h-3 w-3 rounded-full bg-white shadow-lg transition-transform data-[state=checked]:translate-x-4 dark:bg-gray-950" />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
