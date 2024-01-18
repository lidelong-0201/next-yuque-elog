import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { AtomIcon, GitHubIcon, MailIcon } from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import moment from 'moment/moment'
import { projects, ProjectType } from '@/lib/projects'
import Newsletter from '@/ui/Newsletter'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {moment(article.date).format('YYYY-MM-DD')}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>阅读全文</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300 " />
    </Link>
  )
}

function Project({ project }: { project: ProjectType }) {
  return (
    <Link href={project.link.href}>
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image src={project.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {project.name}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {project.description}
          </dd>
          <dt className="sr-only">Date</dt>
        </dl>
      </li>
    </Link>
  )
}

function Projects() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">项目</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {projects.slice(0, 4).map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            前端开发者
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi，我是delong，目前是一名前端开发工程师，在此博客我将会总结工作、技术点滴,并添加筛选出来我觉得还不错的项目合集。
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              title={'github'}
              href="https://github.com/lidelong-0201"
              aria-label="GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="mailto:lidelong0201@foxmail.com"
              aria-label="邮箱"
              title={'邮箱'}
              icon={MailIcon}
            />
            <SocialLink
              href="https://follow.it/5yomdm?leanpub"
              aria-label="RSS 订阅"
              title={'RSS 订阅'}
              icon={AtomIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Projects />
          </div>
        </div>
      </Container>
    </>
  )
}
