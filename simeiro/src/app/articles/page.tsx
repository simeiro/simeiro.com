import Link from 'next/link';
import { client } from '@/app/component/microcms';
import Image from "next/image";
import dayjs from 'dayjs';
import styles from './page.module.css';

// ブログ記事の型定義
interface Eyecatch {
  url: string;
  height: number;
  width: number;
}

type Props = {
  id: string;
  title: string;
  publishedAt: string;
  eyecatch: Eyecatch; 
};


// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'articles', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id,title,publishedAt,eyecatch',  // idとtitleを取得
      limit: 10,  // 最新の10件を取得
    },
  });
  return data.contents;
}

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-slate-50">
      <header className="bg-white w-auto">
        <h1 className="text-5xl m-4">simeiroのブログ</h1>
      </header>
      <main className={styles.main}>
        
        <ul className="flex flex-wrap items-center justify-center">
          {posts.map((post) => (
            <li key={post.id} className={styles.post} >
              <Link href={`/articles/${post.id}`} className="flex flex-col items-center justify-center p-4"> {/* 記事へのリンクを生成 */}
                <div className={styles.image_width}>
                  <Image
                    src={post.eyecatch.url}
                    width={1000}
                    height={1000}
                    alt="アイキャッチ"
                    className="rounded object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                
                <div className="mt-auto">{dayjs(post.publishedAt).format('YY.MM.DD')}</div>
                <div className="text-lg font-bold">{post.title} {/* タイトルを表示 */}</div>
                
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
    
  );
}