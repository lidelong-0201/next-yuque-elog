import { Button } from '@/components/Button'
// import { useRouter } from 'next/navigation'
import React from 'react'
function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}
export default function Newsletter() {
  // const router = useRouter()
  return (
    <form
      // onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      //   e.preventDefault()
      //   fetch('/api/newsletter', {
      //     method: 'post',
      //     body: JSON.stringify({
      //       email: (document.querySelector('#email') as HTMLInputElement)!
      //         .value,
      //     }),
      //   })
      //   router.push('/thank-you')
      // }}
      action={
        'https://api.follow.it/subscription-form/NmpGQmZDSHJwOE1pWTh6Zlh2Vkhzb1cyMEJPOHNoOG5kdFp0U3JBczB5YjFwaGl1SXpONmd5b0lqUWNPN1F0VU4zejJyT2ZaUnJRbEdNbVFKVjY0QjYyVzRrQWwrdEZqZDQvaVhqZUNOMm9RMXcraDhpTkx5RXErWStwU28vUW98YlNhQjhQN0VvQU5DUndzTU9hekpMN0RHVXEvM1c3bkR1L3BmZUVOUll6dz0=/8'
      }
      method={'post'}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">随时了解最新内容</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        当我发布新内容时收到通知，并随时取消订阅。
      </p>
      <div className="mt-6 flex">
        <input
          id="email"
          type="email"
          placeholder="邮箱地址"
          aria-label="邮箱地址"
          name="email"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          提交
        </Button>
      </div>
    </form>
  )
}
