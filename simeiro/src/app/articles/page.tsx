import Link from 'next/link';
import { client } from '@/app/component/microcms';

// ブログ記事の型定義
type Props = {
  id: string;
  title: string;
};

// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'articles', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id,title',  // idとtitleを取得
      limit: 5,  // 最新の5件を取得
    },
  });
  return data.contents;
}

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <main>
      <h1>simeiroのブログ（大工事中）</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/articles/${post.id}`}> {/* 記事へのリンクを生成 */}
              {post.title} {/* タイトルを表示 */}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}