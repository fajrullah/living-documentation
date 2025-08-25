import React from "react";
import "./card.css";

export interface CardProps {
  /**
   * Title of the card
   */
  title: string;
  /**
   * Price text
   */
  price: string;
  /**
   * Short description
   */
  description: string;
}

/**
 * UI component for displaying product or service info
 */
export const Card = ({ title, price, description }: CardProps) => {
  return (
    <div className="storybook-card">
      <div className="storybook-card__title">{title}</div>
      <div className="storybook-card__price">{price}</div>
      <div className="storybook-card__description">{description}</div>
    </div>
  );
};
