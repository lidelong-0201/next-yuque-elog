import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">首页</NavLink>
                <NavLink href="/articles">文章</NavLink>
                <NavLink href="/projects">项目</NavLink>
              </div>
              <div className={'flex gap-4'}>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {new Date().getFullYear()} lidelong
                </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
