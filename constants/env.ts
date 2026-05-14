import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const firstCommitId = '3ac8a728c742d2ee7275f0bfb31cd86116f32dd0'

const env = createEnv({
  server: {
    VERCEL_GIT_COMMIT_SHA: z.string().optional().default(firstCommitId)
  },
  client: {
    NEXT_PUBLIC_COMMIT_SHA: z.string().optional().default(firstCommitId)
  },
  runtimeEnv: {
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    NEXT_PUBLIC_COMMIT_SHA: process.env.NEXT_PUBLIC_COMMIT_SHA
  }
})

export { env }
