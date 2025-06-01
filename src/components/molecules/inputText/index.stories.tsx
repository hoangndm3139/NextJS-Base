import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputText from "./index";

const meta: Meta<typeof InputText> = {
  title: "components/molecules/InputText",
  component: InputText,
  argTypes: {
    name: {
      control: false,
    },
    label: {
      control: "text",
      defaultValue: "Password",
    },
    type: {
      control: "radio",
      options: ["text", "password"],
      defaultValue: "password",
    },
    disabled: {
      control: "boolean",
    },
    warningText: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputText>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: {
      [args.name]: args.defaultValue || "",
    },
    mode: "onBlur",
  });

  return (
    <div className="bg-black p-4">
      <FormProvider {...methods}>
        <form>
          <InputText {...args} />
        </form>
      </FormProvider>
    </div>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    name: "password",
    label: "Password",
  },
};

export const TextType: Story = {
  render: Template,
  args: {
    name: "username",
    label: "Username",
    type: "text",
  },
};

export const WithWarning: Story = {
  render: Template,
  args: {
    name: "email",
    label: "Email",
    type: "text",
    warningText: "We’ll never share your email.",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email",
      },
    },
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    name: "disabled",
    label: "Disabled Field",
    disabled: true,
  },
};

export const WithError: Story = {
  render: Template,
  args: {
    name: "requiredField",
    label: "Required Field",
    rules: {
      required: "This field is required",
    },
  },
};
