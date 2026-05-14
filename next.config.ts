import type { NextConfig } from 'next'
import './constants/env'

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA
  }
}

export default nextConfig
