// app/blog/[id]/page.tsx
import { client } from '@/app/component/microcms';
import type { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';
import dayjs from 'dayjs';
import styles from './page.module.css';

interface Eyecatch {
  url: string;
  height: number;
  width: number;
}

// ブログ記事の型定義
type Props = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  eyecatch: Eyecatch;
  tags: {
    fieldId: string;
    tag: string;
  }[];
}

//リンクプレビューを作成
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params; // IDを取得
  const post = await getBlogPost(id);
  const text = post.content.replace(/<[^>]+>/g, '').substring(0, 50) + "...";
  return {
    openGraph: {
      siteName: "simeiro.com",
      title: post.title,
      description: text,
      images: [
        {
          url: post.eyecatch.url,
          width: 256,
          height: 144
        }
      ]
    }
  }
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
  const formattedPublished = dayjs(post.publishedAt).format('YYYY/MM/DD');
  const formattedUpdated = dayjs(post.updatedAt).format('YYYY/MM/DD');

  const shareX = `https://x.com/intent/post?text=${post.title}&url=https://simeiro.com/articles/${post.id}%0A&hashtags=simeiroのブログ`

  return (
    <div className="bg-slate-50">
      <header className="bg-white w-auto mb-10">
        <a href="./"><h1 className="text-5xl m-4">simeiroのブログ</h1></a>
        <hr/>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>{post.title}</h1> {/* タイトルを表示 */}
        <div className="flex">
          {post.tags.map((tagData, index) => (
              <div key={index} className={styles.tag}>{tagData.tag}</div>
          ))}
        </div>
        <div className="flex">
          <div className={styles.date}>投稿: {formattedPublished}</div> 
          <div className={styles.date}>最終更新: {formattedUpdated}</div> 
        </div>
        <div className={styles.post} dangerouslySetInnerHTML={{ __html: post.content }} /> {/* 記事本文を表示 */}
        <div className="float-right my-4">
          <Link href={shareX} target='_blank'>
            <Image
              src="/x-logo.png"
              width={25}
              height={25}
              alt="アイキャッチ"
              className="hover:scale-110"
            />
          </Link>
          
        </div>
        
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