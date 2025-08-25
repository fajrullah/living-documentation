import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Branding/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Pro Plan",
    price: "$29/month",
    description: "Best for startups that want to scale quickly.",
  },
};

export const Premium: Story = {
  args: {
    title: "Premium Plan",
    price: "$99/month",
    description: "For growing companies with advanced needs.",
  },
};

export const Free: Story = {
  args: {
    title: "Free Plan",
    price: "$0",
    description: "Get started with the essentials at no cost.",
  },
};
