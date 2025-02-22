# Amateur Store BD

An E-commerce start-up from some amateur entrepreneurs.

## 📌 Project Overview

Amateur Store BD is an online shopping platform being developed as part of a learning journey. The goal is to build a fully functional e-commerce website from scratch.

## 🚀 Tech Stack

This project leverages modern web technologies, including:

- **Next.js v15** - React framework for server-side rendering and static site generation.
- **React v19** - Core UI library.
- **TypeScript** - Enhancing code reliability and maintainability.
- **ESLint** - Ensuring code quality and consistency.
- **PostgreSQL** - Relational database for efficient data management.
- **Prisma** - ORM for database interactions.
- **Zod** - Schema validation for TypeScript.
- **NextAuth** - Authentication system for user accounts.
- **React Hook Form** - Managing form validation and state.
- **PayPal & Stripe API** - Payment gateways for handling transactions.
- **ShadCN UI** - UI component library.
- **Tailwind CSS** - Utility-first styling for a modern UI.
- **Recharts** - Data visualization library.
- **Uploadthing** - File upload solution.
- **Jest** - JavaScript testing framework.

## 🔧 Features

- 🛍️ **Product Listing & Filtering**
- 🔄 **Cart & Checkout System**
- 🔑 **User Authentication & Authorization**
- 💳 **Payment Integration (PayPal & Stripe)**
- 📦 **Order Management**
- 📸 **Image Upload & Optimization**
- 📊 **Admin Dashboard for Product & Order Management**

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- PostgreSQL (local or cloud)
- PayPal & Stripe Account
- Cloud Storage for Image Uploads

### Steps to Run Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/amateur-store-bd.git
   cd amateur-store-bd
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

### 3️⃣ Set up environment variables

Create a `.env.local` file in the root of your project and add your credentials:

```env
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-key
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_SECRET=your-paypal-secret
UPLOADTHING_SECRET=your-uploadthing-secret

```

### 4️⃣ Run database migrations

Run the following command to apply database migrations:

```sh
npx prisma migrate dev --name init
```

### 5️⃣ Start the development server

Run the following command to start the local development server:

```sh
npm run dev
```
