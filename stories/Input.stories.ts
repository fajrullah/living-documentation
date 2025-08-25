import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Branding/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "••••••••",
    type: "password",
  },
};

export const Error: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    placeholder: "Can’t type here",
    disabled: true,
  },
};
