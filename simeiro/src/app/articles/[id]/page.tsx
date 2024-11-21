// app/blog/[id]/page.tsx
import { client } from '@/app/component/microcms';
import dayjs from 'dayjs';
import styles from './page.module.css';

// ブログ記事の型定義
type Props = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  eyecatch: any;
}

// microCMSから特定の記事を取得
async function getBlogPost(id: string): Promise<Props> {
  const data = await client.get({
    endpoint: `articles/${id}`,
  });
  return data;
}

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // IDを取得
  const post = await getBlogPost(id);

  // dayjsを使ってpublishedAtをYY.MM.DD形式に変換
  const formattedDate = dayjs(post.publishedAt).format('YY.MM.DD');

  return (
    <div className="bg-slate-50">
      <header className="bg-white w-auto mb-10">
        <a href="./"><h1 className="text-5xl m-4">simeiroのブログ</h1></a>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>{post.title}</h1> {/* タイトルを表示 */}
        <div className={styles.date}>{formattedDate}</div> {/* 日付を表示 */}
        {/* <div>カテゴリー：{post.category && post.category.name}</div> カテゴリーを表示 */}
        <div className={styles.post} dangerouslySetInnerHTML={{ __html: post.content }} /> {/* 記事本文を表示 */}
      </main>
    </div>
    
  );
}

// 静的パスを生成
export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: 'articles' });

  return contentIds.map((contentId) => ({
    id: contentId, // 各記事のIDをパラメータとして返す
  }));
}