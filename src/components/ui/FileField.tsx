import type { ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core";
import * as FileFieldPrimitive from "@kobalte/core/file-field";
import { cva } from "class-variance-authority";

import { cn } from "~/utils";

type FileFieldRootProps<T extends ValidComponent = "div"> =
  FileFieldPrimitive.FileFieldRootProps<T> & {
    class?: string | undefined;
  };

const FileField = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, FileFieldRootProps<T>>
) => {
  const [local, others] = splitProps(props as FileFieldRootProps, ["class"]);
  return <FileFieldPrimitive.Root class={cn("flex flex-col gap-1", local.class)} {...others} />;
};

type FileFieldInputProps<T extends ValidComponent = "input"> =
  FileFieldPrimitive.FileFieldInputProps<T> & {
    class?: string | undefined;
  };

const FileFieldInput = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, FileFieldInputProps<T>>
) => {
  const [local, others] = splitProps(props as FileFieldInputProps, ["class"]);
  return (
    <FileFieldPrimitive.Input
      class={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring data-[invalid]:border-error-foreground data-[invalid]:text-error-foreground flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      {...others}
    />
  );
};

type FileFieldTriggerProps<T extends ValidComponent = "button"> =
  FileFieldPrimitive.FileFieldTriggerProps<T> & {
    class?: string | undefined;
  };

const FileFieldTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, FileFieldTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as FileFieldTriggerProps, ["class"]);
  return (
    <FileFieldPrimitive.Trigger
      class={cn(
        "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        "border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 border px-4 py-2", // Default button appearance
        local.class
      )}
      {...others}
    />
  );
};

// --- Value Component ---
// Displays the selected file name(s).
type FileFieldValueProps<T extends ValidComponent = "div"> =
  FileFieldPrimitive.FileFieldValueProps<T> & {
    class?: string | undefined;
  };

const FileFieldValue = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, FileFieldValueProps<T>>
) => {
  const [local, others] = splitProps(props as FileFieldValueProps, ["class"]);
  return (
    <FileFieldPrimitive.Value
      class={cn("text-muted-foreground text-sm", local.class)}
      {...others}
    />
  );
};

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        label: "data-[invalid]:text-destructive",
        description: "font-normal text-muted-foreground",
        error: "text-xs text-destructive",
      },
    },
    defaultVariants: {
      variant: "label",
    },
  }
);

type FileFieldLabelProps<T extends ValidComponent = "label"> =
  FileFieldPrimitive.FileFieldLabelProps<T> & { class?: string | undefined };

const FileFieldLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, FileFieldLabelProps<T>>
) => {
  const [local, others] = splitProps(props as FileFieldLabelProps, ["class"]);
  return <FileFieldPrimitive.Label class={cn(labelVariants(), local.class)} {...others} />;
};

type FileFieldDescriptionProps<T extends ValidComponent = "div"> =
  FileFieldPrimitive.FileFieldDescriptionProps<T> & {
    class?: string | undefined;
  };

const FileFieldDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, FileFieldDescriptionProps<T>>
) => {
  const [local, others] = splitProps(props as FileFieldDescriptionProps, ["class"]);
  return (
    <FileFieldPrimitive.Description
      class={cn(labelVariants({ variant: "description" }), local.class)}
      {...others}
    />
  );
};

type FileFieldErrorMessageProps<T extends ValidComponent = "div"> =
  FileFieldPrimitive.FileFieldErrorMessageProps<T> & {
    class?: string | undefined;
  };

const FileFieldErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, FileFieldErrorMessageProps<T>>
) => {
  const [local, others] = splitProps(props as FileFieldErrorMessageProps, ["class"]);
  return (
    <FileFieldPrimitive.ErrorMessage
      class={cn(labelVariants({ variant: "error" }), local.class)}
      {...others}
    />
  );
};

export {
  FileField,
  FileFieldInput,
  FileFieldTrigger,
  FileFieldValue,
  FileFieldLabel,
  FileFieldDescription,
  FileFieldErrorMessage,
};
