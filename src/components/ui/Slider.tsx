import type { JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as SliderPrimitive from "@kobalte/core/slider";

import { cn } from "~/utils";

import { Label } from "~/components/ui/Label";

type SliderRootProps<T extends ValidComponent = "div"> = SliderPrimitive.SliderRootProps<T> & {
  class?: string | undefined;
};

const Slider = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderRootProps<T>>
) => {
  const [local, others] = splitProps(props as SliderRootProps, ["class"]);
  return (
    <SliderPrimitive.Root
      class={cn("relative flex w-full touch-none flex-col items-center select-none", local.class)}
      {...others}
    />
  );
};

type SliderTrackProps<T extends ValidComponent = "div"> = SliderPrimitive.SliderTrackProps<T> & {
  class?: string | undefined;
};

const SliderTrack = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderTrackProps<T>>
) => {
  const [local, others] = splitProps(props as SliderTrackProps, ["class"]);
  return (
    <SliderPrimitive.Track
      class={cn("bg-secondary relative h-2 w-full grow rounded-full", local.class)}
      {...others}
    />
  );
};

type SliderFillProps<T extends ValidComponent = "div"> = SliderPrimitive.SliderFillProps<T> & {
  class?: string | undefined;
};

const SliderFill = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderFillProps<T>>
) => {
  const [local, others] = splitProps(props as SliderFillProps, ["class"]);
  return (
    <SliderPrimitive.Fill
      class={cn("bg-primary absolute h-full rounded-full", local.class)}
      {...others}
    />
  );
};

type SliderThumbProps<T extends ValidComponent = "span"> = SliderPrimitive.SliderThumbProps<T> & {
  class?: string | undefined;
  children?: JSX.Element;
};

const SliderThumb = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, SliderThumbProps<T>>
) => {
  const [local, others] = splitProps(props as SliderThumbProps, ["class", "children"]);
  return (
    <SliderPrimitive.Thumb
      class={cn(
        "border-primary bg-background ring-offset-background focus-visible:ring-ring top-[-6px] block size-5 rounded-full border-2 transition-colors hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        local.class
      )}
      {...others}>
      <SliderPrimitive.Input />
    </SliderPrimitive.Thumb>
  );
};

const SliderLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, SliderPrimitive.SliderLabelProps<T>>
) => {
  return <SliderPrimitive.Label as={Label} {...props} />;
};

const SliderValueLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, SliderPrimitive.SliderValueLabelProps<T>>
) => {
  return <SliderPrimitive.ValueLabel as={Label} {...props} />;
};

export { Slider, SliderTrack, SliderFill, SliderThumb, SliderLabel, SliderValueLabel };
