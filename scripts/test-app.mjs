import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testDatabase() {
  try {
    await prisma.$connect()
    console.log('✅ Database connection successful')
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  }
}

async function testEnvironmentVariables() {
  const requiredVars = [
    'NODE_ENV',
    'NEXT_PUBLIC_APP_URL',
    'AUTH_SECRET',
    'JWT_SECRET_KEY',
    'DATABASE_URL'
  ]

  const missing = requiredVars.filter(varName => !process.env[varName])
  
  if (missing.length > 0) {
    console.error('❌ Missing environment variables:', missing.join(', '))
    return false
  }
  
  console.log('✅ Environment variables verified')
  return true
}

async function main() {
  console.log('🔍 Starting application tests...\n')
  
  const dbResult = await testDatabase()
  const envResult = await testEnvironmentVariables()
  
  console.log('\n📊 Test Results:')
  console.log(`Database: ${dbResult ? '✅' : '❌'}`)
  console.log(`Environment: ${envResult ? '✅' : '❌'}`)
  
  await prisma.$disconnect()
  
  if (!dbResult || !envResult) {
    process.exit(1)
  }
}

main().catch(console.error) 