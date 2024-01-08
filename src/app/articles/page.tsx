import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import moment from "moment/moment";

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {moment(article.date).format('YYYY-MM-DD')}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>阅读全文</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {moment(article.date).format('YYYY-MM-DD')}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: '撰写有关技术、软件教程的文章',
  description:
    '我所有关于编程、软件使用等的长篇想法，都按时间顺序收集。',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="撰写有关技术、软件教程的文章"
      intro="我所有关于编程、软件使用等的长篇想法，都按时间顺序收集。"
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
