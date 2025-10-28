# 🦌 Buck-et List Brands

**A modern, full-stack e-commerce platform for premium hunting apparel — built with Next.js and AWS Cloud Services.**

Buck-et List Brands blends rugged outdoor style with scalable, production-grade web engineering.  
This project demonstrates professional full-stack development using **Next.js, Tailwind CSS, AWS, and Stripe**, designed for real-world deployment and portfolio presentation.

---

## 🔗 Live Demo

👉 [**Visit the Live Site**](https://your-live-demo-link.com) *(coming soon)*

---

## 🧭 Overview

**Buck-et List Brands** is a developer-built e-commerce web app created as a professional portfolio project.  
It demonstrates end-to-end architecture — from UI/UX and authentication to serverless APIs, payments, and cloud integration — all powered by modern frameworks and AWS infrastructure.

---

## ⚙️ Tech Stack

### **Frontend**
- **Next.js 15 (React 18)** — App Router, SSR, ISR for SEO and performance  
- **Tailwind CSS** — Responsive utility-first styling  
- **TypeScript** — Strongly typed, production-grade development  
- **Framer Motion** — Smooth animations and transitions  
- **React Query (TanStack Query)** — Asynchronous state and API data caching  
- **Next Auth / AWS Cognito** — Authentication and session management  

### **Backend & Cloud**
- **AWS Lambda** — Serverless backend functions  
- **Amazon API Gateway** — Routing and REST API layer  
- **Amazon DynamoDB** — NoSQL database for product and order data  
- **Amazon S3** — Product image and media storage  
- **Stripe API** — Secure checkout and payment processing  
- **AWS CloudWatch** — Logging and monitoring  

### **Developer Tools**
- **Node.js + npm** — Core runtime and package management  
- **Git + GitHub** — Version control and collaboration  
- **Prettier + ESLint** — Code formatting and linting  
- **Vercel / AWS Amplify** — Hosting and CI/CD  
- **Environment variables** managed with `.env.local` and AWS Secrets Manager  

---

## 🧠 Core Features 

| Feature | Description |
|----------|--------------|
| **Product Catalog** | Dynamic, database-driven apparel listings |
| **Authentication** | Secure user signup/login via Cognito or NextAuth |
| **Shopping Cart** | Add/remove items, persistent session state |
| **Checkout** | Stripe integration for secure payments |
| **Admin Dashboard** | Manage products, orders, and analytics |
| **Media Management** | Upload and serve product images from S3 |
| **Responsive Design** | Optimized for mobile, tablet, and desktop |
| **Serverless Architecture** | Fully scalable backend via AWS Lambda |

---

## 🏗️ Architecture Diagram

```
Client (Next.js + Tailwind)
      ↓
API Routes (Next.js or AWS API Gateway)
      ↓
AWS Lambda Functions
      ↓
DynamoDB (Products, Orders, Users)
      ↓
S3 (Media Storage)  ←→  Stripe (Payments)
```

---

## 🗂️ Project Structure

```
buck-et-list-brands/
│
├── public/               # Static assets (logos, icons, etc.)
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable UI components
│   ├── lib/              # Utilities, helpers, and API logic
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Tailwind/global styles
│   ├── types/            # TypeScript types and interfaces
│   └── services/         # AWS SDK, Stripe, Auth integrations
│
├── .env.example          # Example environment variables
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---


## 🧱 Developer Notes

This project emphasizes:
- Scalable **serverless architecture**
- Clean, **component-driven design**
- **Secure authentication** and data flows
- Cloud-native **AWS integrations**
- Accessibility, responsiveness, and performance
- CI/CD and production-ready deployment practices

---


## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [AWS SDK v3 Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)
- [Stripe Docs](https://stripe.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
