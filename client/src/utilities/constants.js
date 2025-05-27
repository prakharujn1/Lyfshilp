import { CreditCard, Smartphone, Globe, Wallet } from "lucide-react";

export const navItems = [
  { id: "intro", title: "Introduction" },
  { id: "what-is-bank", title: "What is a Bank?" },
  { id: "account-types", title: "Account Types" },
  { id: "digital-tools", title: "Digital Banking" },
  { id: "comparison", title: "Wallet vs Bank" },
  { id: "example", title: "Real Example" },
  { id: "reflection", title: "Reflection" },
];

export const accountTypes = [
  {
    type: "Savings Account",
    purpose: "For saving and daily use",
    interest: {
      hasInterest: true,
      rate: "2–4%",
    },
    liquidity: {
      canWithdraw: true,
      details: "Yes, anytime",
    },
  },
  {
    type: "Fixed Deposit (FD)",
    purpose: "For locking money for months/years",
    interest: {
      hasInterest: true,
      rate: "5–7%",
    },
    liquidity: {
      canWithdraw: false,
      details: "No (until the period ends)",
    },
  },
  {
    type: "Current Account",
    purpose: "Mostly for businesses",
    interest: {
      hasInterest: false,
    },
    liquidity: {
      canWithdraw: true,
      details: "Yes, unlimited times",
    },
  },
];

export const digitalTools = [
  {
    name: "ATM/Debit Card",
    description: "Pull out money from an ATM or pay in shops",
    icon: "CreditCard",
  },
  {
    name: "Net Banking",
    description: "Use a website to check and send money",
    icon: "Globe",
  },
  {
    name: "Mobile Banking App",
    description: "Use your phone to do everything – send, receive, check",
    icon: "Smartphone",
  },
  {
    name: "Digital Wallet",
    description:
      "Keep small amounts to pay instantly for snacks, auto rides, etc.",
    icon: "Wallet",
  },
];

export const toolIcons = {
  CreditCard,
  Globe,
  Smartphone,
  Wallet,
};

export const comparisonItems = [
  {
    feature: "Safe for big savings?",
    digitalWallet: {
      supported: false,
    },
    bankAccount: {
      supported: true,
    },
  },
  {
    feature: "Gives interest?",
    digitalWallet: {
      supported: false,
    },
    bankAccount: {
      supported: true,
    },
  },
  {
    feature: "Very fast for small payments?",
    digitalWallet: {
      supported: true,
    },
    bankAccount: {
      supported: true,
    },
  },
  {
    feature: "Government protection?",
    digitalWallet: {
      supported: false,
    },
    bankAccount: {
      supported: true,
    },
  },
];
