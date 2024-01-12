import { ArticleLayout } from '@/components/ArticleLayout';
import Image from 'next/image'

export const article = {
  author: 'delong',
  date:"2024-01-07 12:56:40",
  title: "测试blog",
  description:"这是测试blog",
};

export const metadata = {
  title: article.title,
  description: article.description,
};

export default (props) => <ArticleLayout article={article} {...props} />;

这是测试blog
