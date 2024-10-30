# Next.js 14 Starter with Authentication and Database

A modern full-stack starter template built with Next.js 14, featuring authentication, database integration, and a comprehensive UI component system.

## Features

### Core Technology Stack
- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ PostgreSQL database with Prisma ORM
- ✅ ShadCN UI components

### Authentication & Security
- ✅ NextAuth.js integration
- ✅ JWT-based authentication
- ✅ Multiple auth methods:
  - Email/Password
  - Magic Links
  - OAuth (Google, GitHub)
- ✅ Email verification
- ✅ Password reset functionality

### User Interface
- ✅ Modern responsive design
- ✅ Dark/Light mode support
- ✅ Toast notifications
- ✅ Form validation with Zod
- ✅ Loading states and error handling
- ✅ Accessible components (ARIA compliant)

### Content Management
- ✅ Blog system with MDX support
- ✅ Content management with Contentlayer
- ✅ Newsletter subscription system
- ✅ Contact form functionality

### Developer Experience
- ✅ ESLint configuration
- ✅ TypeScript strict mode
- ✅ Prettier code formatting
- ✅ Hot reload support
- ✅ Environment variable validation

## Getting Started

1. Clone the repository:

## Deployment

### Prerequisites
- Node.js 20.10.0 or higher
- PostgreSQL database
- OAuth credentials (Google, GitHub)
- Resend account for email services

### Deployment Options

#### 1. Vercel (Recommended)
1. Fork this repository
2. Create a new project on [Vercel](https://vercel.com)
3. Connect your forked repository
4. Configure environment variables in Vercel dashboard
5. Deploy

#### 2. Railway
1. Create a new project on [Railway](https://railway.app)
2. Connect your repository
3. Add PostgreSQL service
4. Configure environment variables
5. Deploy

#### 3. Self-hosted
1. Clone the repository
2. Install dependencies: `pnpm install`
3. Build the project: `pnpm build`
4. Set up environment variables
5. Start the server: `pnpm start`

### Database Migration for Production
