/**
 * 自定义文档插件
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @return {Promise<DocDetail>} 返回处理后的文档对象
 */
const format = async (doc) => {
  if (doc.body) {
    // 添加mdx需要的代码
    const codeToAdd = `import { ArticleLayout } from '@/components/ArticleLayout';
import Image from 'next/image'

export const article = {
  author: '李德龙',
  date:"${doc.properties.date}",
  title: "${doc.properties.title}",
  description:"${doc.properties.description}",
};

export const metadata = {
  title: article.title,
  description: article.description,
};

export default (props) => <ArticleLayout article={article} {...props} />;
`;
    doc.body = codeToAdd+'\n'+doc.body

  }
  return doc;
};

module.exports = {
  format,
};
