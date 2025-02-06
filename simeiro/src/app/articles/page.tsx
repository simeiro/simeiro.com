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
  content: string;
  publishedAt: string;
  updatedAt: string;
  eyecatch: Eyecatch;
  tags: {
    fieldId: string;
    tag: string;
  }[];
}


// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'articles', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id,title,publishedAt,updatedAt,eyecatch,tags',  // idとtitleを取得
    },
  });
  return data.contents;
}

export default async function Home() {
  const posts = await getBlogPosts();
  const newPosts = posts.slice(0, 4);
  // const filterPosts = (tag: string, limit: number) => {
  //   return posts.filter(post => post.tags.some(t => t.tag === tag)).slice(0, limit);
  // };
  // const programmingPosts = filterPosts("プログラミング", 2);
  // const vocaloPosts = filterPosts("ボカロ", 2);
  // const lifePosts = filterPosts("日常", 2);

  return (
    <div className="bg-slate-50">
      <header className="bg-white w-auto">
        <h1 className="text-5xl m-4">simeiroのブログ</h1>
        <hr/>
      </header>
      <main className={styles.main}>

        <h2 className="text-2xl">新着記事</h2>
        <hr className="mb-4"/>
        <ul className="flex flex-wrap items-center justify-center mb-10">
          {newPosts.map((post) => (
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
                
                <div className="mt-auto">{dayjs(post.publishedAt).format('YYYY/MM/DD')}</div>
                <div className="text-lg font-bold">{post.title} {/* タイトルを表示 */}</div>
                
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl">人気記事</h2>
        <hr className="mb-4"/>
        <p className="text-center text-xl mb-10">工事中...</p>


        <h2 className="text-2xl">記事一覧</h2>
        <hr className="mb-4"/>
        <ul className="flex flex-wrap items-center justify-center mb-10">
          {posts.map((post) => (
            <li key={post.id} className={styles.postAll} >
              <Link href={`/articles/${post.id}`}>
                <div className="text-lg font-bold">{post.title} {/* タイトルを表示 */}</div>
                <div className="flex">
                    {post.tags.map((tagData, index) => (
                        <div key={index} className={styles.tag}>{tagData.tag}</div>
                    ))}
                </div>
                <div className="mt-auto text-gray-500">{dayjs(post.publishedAt).format('YYYY/MM/DD')}</div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
    
  );
}