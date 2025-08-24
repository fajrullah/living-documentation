import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"], // 👈 this allows Storybook Docs to auto-generate
  args: {
    label: "Badge",
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    label: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Error",
    variant: "error",
  },
};
