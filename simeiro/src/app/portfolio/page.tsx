import Image from "next/image";
import Product from '@/app/component/product';

export default function Portfolio(){
    return(
        <div className="bg-teal-100 min-h-screen w-screen">
            <h1 className="pt-10 text-5xl text-slate-600 ">ポートフォリオ(工事中)</h1>
            {/* <Image
                src="/profile/tatsukushi.jpg"
                width={1200}
                height={800}
                alt="しめいろちゃん"
                className="w-full"
            /> */}
            <h2 className="text-5xl text-center text-slate-600">About me</h2>
            <div className="pt-10 flex items-center flex-wrap justify-center">
            <Image
                src="/profile/face.jpg"
                width={500}
                height={500}
                alt="しめいろちゃん"
                className="rounded-2xl pr-36 py-10"
            />
            <ul className="list-disc list-inside space-y-2 text-lg text-slate-600">
                <li>名前
                    <p>中川 海翔 (Nakagawa Kaito)</p>
                </li>
                <li>生年月日
                    <p>2003年11月28日</p>
                </li>
                <li>出身
                    <p>大阪府 阪南市</p>
                </li>
                <li>所属
                    <p>京都産業大学 情報理工学部 情報理工学科 3年生</p>
                </li>
                <li>部活</li>
                <p>電子計算機応用部 (C.A.C.)</p>
                <li>趣味
                    <p>ボカロ聴く、ゲームする</p>
                </li>
                <li>SNS</li>
                <p>
                <a href="https://x.com/simeir0" className="text-blue-500 hover:text-blue-700">X(Twitter)</a>/
                <a href="https://github.com/simeiro" className="text-blue-500 hover:text-blue-700">GitHub</a>
                </p>
            </ul>
            
            </div>
            <h2 className="text-5xl text-center text-slate-600">Product</h2>
            <div className="py-10 flex items-center flex-wrap justify-center">
                <Product></Product>
            </div>

            <h2 className="text-5xl text-center text-slate-600">Skill</h2>
            <p className="text-center">今まで使用してきた技術です。</p>
            <div className="flex flex-col items-center flex-wrap justify-center">
                <div className="pt-10 flex flex-col items-start justify-center text-slate-600">
                    <p className="text-5xl">☆☆☆</p>
                    <p className="text-xl">複数のプロダクトを作成したことがある</p>
                    <p>Python / HTML, CSS, JavaScript / Java</p>
                </div>
                <div className="pt-10 flex flex-col items-start justify-center text-slate-600">
                    <p className="text-5xl">☆☆</p>
                    <p>TypeScript, React, Next.js / Dart, Flutter / C#, Unity / Firebase / MongoDB</p>
                </div>
                <div className="pt-10 flex flex-col items-start justify-center text-slate-600">
                    <p className="text-5xl">☆</p>
                </div>
            </div>
            



                <div>
                    <p>C言語</p>
                    <p>Ruby / Ruby on rails</p>
                    <p>Google App Script</p>
                    <p>SQLite</p>
                </div>
        </div>
    );
}