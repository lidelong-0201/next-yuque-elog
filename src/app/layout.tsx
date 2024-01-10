import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: {
    template: '%s - 李德龙',
    default: '李德龙的前端blog',
  },
  description:
    'Hi，我是李德龙，目前是一名前端开发工程师，在此博客我将会总结工作、技术点滴,并添加筛选出来我觉得还不错的项目合集。',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <Head>
        <meta
          name="follow.it-verification-code"
          content="8Guv7zRz4Smpx7SRKmaG"
        />
      </Head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
