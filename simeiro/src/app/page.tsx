import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
   <>
    <div className=" min-h-screen w-screen">
      <div className="pt-48 flex items-start flex-wrap justify-center mx-4">
        <Image
          src="/profile/simeiro.jpg"
          width={400}
          height={400}
          alt="しめいろちゃん"
          className="rounded-2xl pr-36 py-10"
        />
        <div className="">
          <h1 className="text-5xl font-bold text-slate-600">simeiro</h1>
          <ul className="list-disc list-inside space-y-2 text-lg text-slate-600">
            <li>自己紹介
              <p>simeiro(しめいろ)です。ボカロがすき。</p>
            </li>
            <li>
            <Link href="/articles" className="text-blue-500 hover:text-blue-700">
                simeiroのブログ
              </Link>
            </li>
              <p>日々の出来事、ボカロ曲の布教、たまに技術</p>
              
            <li>
              <Link href="/portfolio" className="text-blue-500 hover:text-blue-700">
                就活用ポートフォリオ
              </Link>
            </li>
              <p>大学3年生までのことをまとめています。</p>
            <li>各種SNS</li>
            <p>
              <a href="https://x.com/simeir0" className="text-blue-500 hover:text-blue-700">X(Twitter)</a>/
              <a href="https://github.com/simeiro" className="text-blue-500 hover:text-blue-700">GitHub</a>/
              <a href="https://discordapp.com/users/557978187221565482" className="text-blue-500 hover:text-blue-700">Discord</a>
            </p>
          </ul>
        </div>
        
      </div>
    </div>
   </>
  );
}