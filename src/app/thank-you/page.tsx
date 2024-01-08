import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="感谢订阅。"
      intro="每当我发布新的博客文章、发布新项目或有任何我认为您想听的有趣的事情要分享时，我都会向您发送电子邮件。您可以随时取消订阅。"
    />
  )
}
