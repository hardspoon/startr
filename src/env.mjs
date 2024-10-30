import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    AUTH_SECRET: z.string().min(1),
    JWT_SECRET_KEY: z.string().min(1),
    DATABASE_URL: z.string().url(),
    
    // OAuth
    GOOGLE_ID: z.string().min(1),
    GOOGLE_SECRET: z.string().min(1),
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    
    // Email
    RESEND_API_KEY: z.string().min(1),
    RESEND_EMAIL_FROM: z.string().email(),
    RESEND_EMAIL_TO: z.string().email(),
    RESEND_HOST: z.string().min(1),
    RESEND_USERNAME: z.string().min(1),
    RESEND_PORT: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    
    // OAuth
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    
    // Email
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_EMAIL_FROM: process.env.RESEND_EMAIL_FROM,
    RESEND_EMAIL_TO: process.env.RESEND_EMAIL_TO,
    RESEND_HOST: process.env.RESEND_HOST,
    RESEND_USERNAME: process.env.RESEND_USERNAME,
    RESEND_PORT: process.env.RESEND_PORT,
  },
})
