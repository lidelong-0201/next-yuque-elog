import { ArticleLayout } from '@/components/ArticleLayout';
import Image from 'next/image'

export const article = {
  author: '李德龙',
  date:"2024-01-07 13:04:18",
  title: "测试图片",
  description:"demo01正文。。。。。。。。。。import { ArticleLayout } from '@/components/ArticleLayout'; import Image from 'next/image';",
};

export const metadata = {
  title: article.title,
  description: article.description,
};

export default (props) => <ArticleLayout article={article} {...props} />;

demo01![favicon-16x16.jpeg](../../images/articles/c205e49879cb5a9597622e1a937752b9.jpeg)<br />正文。。。。。。。。。。
```javascript
import { ArticleLayout } from '@/components/ArticleLayout';
import Image from 'next/image';
```
