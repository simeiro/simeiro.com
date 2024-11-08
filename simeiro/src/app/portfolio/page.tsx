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
            <div className="py-10 mx-4 flex items-center flex-wrap justify-center">
                <Product></Product>
            </div>

            <h2 className="text-5xl text-center text-slate-600">Skill</h2>
            <div className="flex flex-col items-center flex-wrap justify-center">
                <div className="w-auto">
                    <div className="pt-10 flex flex-col items-start justify-center text-slate-600">
                        <p className="text-5xl">☆☆☆</p>
                        <p className="text-xl">複数のプロダクトを作成したことがある</p>
                        <p>Python / HTML, CSS, JavaScript / Java</p>
                    </div>
                    <div className="pt-10 flex flex-col items-start justify-center text-slate-600">
                        <p className="text-5xl">☆☆</p>
                        <p className="text-xl">プロダクトを作成したことがある</p>
                        <p>TypeScript, React, Next.js / Dart, Flutter / C#, Unity / Firebase / MongoDB</p>
                    </div>
                    <div className="pt-10 flex flex-col items-start justify-center text-slate-600">
                        <p className="text-5xl">☆</p>
                        <p className="text-xl">触ったことがある</p>
                        <p>C言語 / Ruby, Ruby on rails / PHP, Laravel / Google App Script / SQLite / MySQL</p>
                    </div>
                </div>
                
            </div>

            <h2 className="text-5xl text-center text-slate-600">Intern</h2>
            <div className="py-4 w-auto flex flex-col items-center flex-wrap justify-center">
                <details className="text-slate-600">
                        <summary className="text-2xl">株式会社ナレッジラボ</summary>
                        <div className="w-auto h-auto bg-slate-50 border-4  flex flex-col m-4">
                            <div className="pt-4">
                                <h3 className="text-2xl">株式会社ナレッジラボ</h3>
                                <p className="text-xl pb-4">期間: 2024年9月（2週間）</p>
                                <p>manageboardというtoB向けのwebアプリケーションの開発に2週間携わりました。</p>
                                <p>Scrum開発を行っており、インターン生も社員さんと同じようにScrum開発に取り組みました。</p>
                                <p>インターン生がチームとなって機能（PBI）を3つ作り、リリースしました。</p>
                                <p>インターン生の中でとてもプログラミングができる子がいて、私自身がコードを書いた量は少なかったです。</p>
                                <p>その代わりに自分ができることを探し、積極的にコミュニケーションを取りました。</p>
                                <p>・機能を作る上で必要な作業（SBI）を洗い出す上での司会の役割</p>
                                <p>・SBIを洗い出す上で生じた疑問点をPdMに相談</p>
                                <p>・スプリントレビューでステークホルダーに新しく追加した機能のデモを行う</p>
                                <p>など、機能には直接表れていませんでしたが、チームの力にはなれたと思っています。</p>
                                <p>また、お客様から追加した機能がとても良いとコメントを頂きました。Scrum開発の流れを</p>
                                <p>掴み、お客様からのコメントを頂くまでを経験できた大変有意義な2週間でした。</p>
                                <p>使用技術: Ruby on rails</p>
                                <p>写真引用元:<a href="https://note.com/knowledgelabo/n/n8bdd05d89834" className="text-blue-500 hover:text-blue-700">会社側記事</a></p>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <Image
                                    src="/product/ナレッジラボ.jpg"
                                    width={100}
                                    height={100}
                                    alt="Highlight39"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                </details>
            </div>
        </div>
    );
}