import { Check } from "lucide-react";

export const PRODUCT_CATEGORIES = [
  { value: "all", label: "All Products" },
  {
    value: "electronics",
    label: "Electronics",
    icon: "icon-laptop-mobile-solid",
    color: "accent",
  },
  {
    value: "food",
    label: "Groceries",
    icon: "icon-burger-soda-solid",
    color: "header",
  },
  {
    value: "fashion",
    label: "Fashion",
    icon: "icon-shirt-solid",
    color: "red",
  },
  {
    value: "services",
    label: "Services",
    icon: "icon-user-gear-solid",
    color: "yellow",
  },
];

export const PRODUCT_SORT_OPTIONS = [
  { value: "best-selling", label: "Best Selling" },
  { value: "available", label: "Available" },
  { value: "price-low-to-high", label: "Price: Low to High" },
  { value: "price-high-to-low", label: "Price: High to Low" },
];

export const SELLER_SORT_OPTIONS = [
  { value: "best-selling", label: "Best Selling" },
  { value: "rating-high-to-low", label: "Rating: High to Low" },
  { value: "rating-low-to-high", label: "Rating: Low to High" },
  { value: "a-z", label: "By name: A-Z" },
  { value: "z-a", label: "By name: Z-A" },
];

export const REVIEW_SORT_OPTIONS = [
  { value: "recent", label: "Recent" },
  { value: "oldest", label: "Oldest" },
  { value: "rating-high-to-low", label: "Highest Rating" },
  { value: "rating-low-to-high", label: "Lowest Rating" },
];

export const LOCALES = [
  { value: "en-EN", label: "English (EN)", icon: "/icons/checked.svg" },
  { value: "de-DE", label: "Deutsch (DE)", icon: "/icons/checked.svg" },
  { value: "dk-DK", label: "Dansk (DK)", icon: "/icons/checked.svg" },
  { value: "ua-UA", label: "Українська (UA)", icon: "/icons/checked.svg" },
];

export const APPS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "development", label: "Developer Tools" },
  { value: "marketplace", label: "Marketplace" },
  { value: "finances", label: "Financial Accounting" },
];

export const PRODUCT_MANAGEMENT_OPTIONS = [
  { value: "all", label: "All" },
  { value: "publish", label: "Published" },
  { value: "draft", label: "Drafts" },
  { value: "trash", label: "Trash" },
];

export const ORDER_SORT_OPTIONS = [
  { value: "default", label: "Default sorting" },
  { value: "a-z", label: "By name: A-Z" },
  { value: "z-a", label: "By name: Z-A" },
  { value: "rating-high-to-low", label: "Rating: High to Low" },
  { value: "rating-low-to-high", label: "Rating: Low to High" },
];

export const PAYMENT_OPTIONS = [
  { value: "mastercard", icon: "/icons/checked.svg" },
  { value: "visa", icon: "/icons/checked.svg" },
  { value: "googlepay", icon: "/icons/checked.svg" },
  { value: "applepay", icon: "/icons/checked.svg" },
  { value: "paypal", icon: "/icons/checked.svg" },
  { value: "bitpay", icon: "/icons/checked.svg" },
];

export const NOTIFICATION_OPTIONS = [
  { value: "all", label: "All" },
  { value: "follow", label: "Following" },
  { value: "order", label: "Orders" },
];

export const MESSAGE_OPTIONS = [
  { value: "all", label: "All" },
  { value: "latest", label: "Latest" },
  { value: "archived", label: "Archive" },
];

export const STOCK_STATUS_OPTIONS = [
  { value: "in-stock", label: "In Stock" },
  { value: "low-inventory", label: "Low Inventory" },
  { value: "out-of-stock", label: "Out of Stock" },
  { value: "on-demand", label: "On Demand" },
  { value: "unavailable", label: "Temporarily Unavailable" },
];

export const PRODUCT_TYPE_OPTIONS = [
  { value: "simple", label: "Simple Product" },
  { value: "variable", label: "Variable Product" },
  { value: "grouped", label: "Grouped Product" },
  { value: "service", label: "Services Product" },
];

export const TRANSACTIONS_SORT_OPTIONS = [
  { value: "recent", label: "Recent" },
  { value: "oldest", label: "Oldest" },
  { value: "amount-high-to-low", label: "Amount: High to Low" },
  { value: "amount-low-to-high", label: "Amount: Low to High" },
];

export const PRODUCT_SELLER_OPTIONS = [
  { value: "best-seller", label: "Best Seller" },
  { value: "new-seller", label: "New Seller" },
  { value: "top-rated", label: "Top Rated" },
  { value: "featured-seller", label: "Featured Seller" },
];

export const PRODUCT_ADDITIONAL_OPTIONS = [
  { value: "last-modified", label: "Last Modified" },
  { value: "date-added", label: "Date Added" },
  { value: "last-viewed", label: "Last Viewed" },
  { value: "average-rating", label: "Average Rating" },
  { value: "popularity", label: "Popularity" },
];

export const PRODUCT_SELECT_OPTIONS = [
  { value: "to-draft", label: "Move to Drafts" },
  { value: "to-trash", label: "Move to Trash" },
  { value: "delete", label: "Delete Permanently" },
];

export const PROMOTIONAL_OPTIONS = [
  { value: "category-1", label: "Category 1" },
  { value: "category-2", label: "Category 2" },
  { value: "category-3", label: "Category 3" },
  { value: "category-4", label: "Category 4" },
  { value: "category-5", label: "Category 5" },
];

export const UNITS_OPTIONS = [
  { value: "pcs", label: "Pieces" },
  { value: "box", label: "Boxes" },
  { value: "kg", label: "Kilograms" },
];
