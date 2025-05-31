import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";
import * as SegmentedControlPrimitive from "@kobalte/core/segmented-control";
import { cn } from "~/utils";

const SegmentedControl = (
  props: ComponentProps<typeof SegmentedControlPrimitive.Root> & {
    class?: string;
    children?: JSX.Element;
  },
) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <SegmentedControlPrimitive.Root
      {...others}
      class={cn("inline-flex flex-col gap-2", local.class)}
    >
      {local.children}
    </SegmentedControlPrimitive.Root>
  );
};

const SegmentedControlLabel = (
  props: ComponentProps<typeof SegmentedControlPrimitive.Label> & {
    class?: string;
    children?: JSX.Element;
  },
) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <SegmentedControlPrimitive.Label
      {...others}
      class={cn("text-sm font-medium text-muted-foreground mb-1", local.class)}
    >
      {local.children}
    </SegmentedControlPrimitive.Label>
  );
};

const SegmentedControlGroup = (props: {
  class?: string;
  children?: JSX.Element;
}) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <div
      {...others}
      class={cn(
        "relative inline-flex items-center rounded-md bg-muted p-1",
        "shadow-inner border border-muted-foreground/10",
        local.class,
      )}
    >
      {local.children}
    </div>
  );
};

const SegmentedControlIndicator = (
  props: ComponentProps<typeof SegmentedControlPrimitive.Indicator> & {
    class?: string;
  },
) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <SegmentedControlPrimitive.Indicator
      {...others}
      class={cn(
        "absolute top-1 bottom-1 z-0",
        "bg-background",
        "border border-sidebar-foreground",
        "opacity-100",
        "rounded-sm",
        "transition-[transform,width] duration-300 ease-out",
        "will-change-[transform,width]",
        local.class,
      )}
    />
  );
};
const SegmentedControlItem = (
  props: ComponentProps<typeof SegmentedControlPrimitive.Item> & {
    class?: string;
    children?: JSX.Element;
  },
) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <SegmentedControlPrimitive.Item
      {...others}
      class={cn("relative z-10", "flex items-center", local.class)}
    >
      {local.children}
    </SegmentedControlPrimitive.Item>
  );
};

const SegmentedControlItemInput = (
  props: ComponentProps<typeof SegmentedControlPrimitive.ItemInput> & {
    class?: string;
  },
) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <SegmentedControlPrimitive.ItemInput
      {...others}
      class={cn("sr-only", local.class)}
    />
  );
};

const SegmentedControlItemControl = (
  props: ComponentProps<typeof SegmentedControlPrimitive.ItemControl> & {
    class?: string;
    children?: JSX.Element;
  },
) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <SegmentedControlPrimitive.ItemControl
      {...others}
      class={cn(
        "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all",
        "bg-transparent text-muted-foreground",
        "hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "data-[checked]:text-foreground  cursor-pointer",
        "disabled:pointer-events-none disabled:opacity-50",
        local.class,
      )}
    >
      {local.children}
    </SegmentedControlPrimitive.ItemControl>
  );
};

const SegmentedControlItemLabel = (
  props: ComponentProps<typeof SegmentedControlPrimitive.ItemLabel> & {
    class?: string;
    children?: JSX.Element;
  },
) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <SegmentedControlPrimitive.ItemLabel
      {...others}
      class={cn("pointer-events-none", local.class)}
    >
      {local.children}
    </SegmentedControlPrimitive.ItemLabel>
  );
};

export {
  SegmentedControl,
  SegmentedControlLabel,
  SegmentedControlGroup,
  SegmentedControlIndicator,
  SegmentedControlItem,
  SegmentedControlItemInput,
  SegmentedControlItemControl,
  SegmentedControlItemLabel,
};
