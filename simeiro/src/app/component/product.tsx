import Image from "next/image";

export default function Product(){
    return(
        <>  
            <div className="">
                <details className="text-slate-600">
                    <summary className="text-2xl">Highlight39 / Discord bot</summary>
                    <div className="w-auto h-auto bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl">Highlight39</h3>
                        <p className="text-xl pb-4">個人開発</p>
                        <p className="">最新の人気ボカロ曲を送信してくれるDiscord bot</p>
                        <p>使用技術: Python(Discord.py), SQLite</p>
                        <a href="このリンク" className="text-blue-500 hover:text-blue-700">招待リンク</a>/
                        <a href="https://github.com/simeiro/Highlight39Revised" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                        <a href="https://x.com/simeir0" className="text-blue-500 hover:text-blue-700">きじ</a>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <Image
                            src="/product/Highlight39.png"
                            width={100}
                            height={100}
                            alt="Highlight39"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                </details>

                <details className="text-slate-600">
                    <summary className="text-2xl">定例総会Bot / Discord bot</summary>
                    <div className="w-auto h-auto bg-slate-50 border-4  flex flex-col m-4">
                        <div className="pt-4">
                            <h3 className="text-2xl text-slate-600">定例総会Bot</h3>
                            <p className="text-xl pb-4">個人開発</p>
                            <p>部活の定例総会を円滑に進めるためのDiscord botを制作しました。</p>
                            <p>約100人の出席状況を全て手入力していてめんどくさかったので、それを改善しようと思ったのが動機です。</p>
                            <p>具体的な機能としては出席率の自動集計、discord.pyのinteractionを用いた一般ユーザーが操作しやすい委任状の提出システムなどです。</p>
                            <p>多機能なbotなので、Cogと呼ばれるものを用いてコマンドごとにクラス分けし、可読性を向上させました。</p>
                            <p>使用技術: Python(Discord.py)</p>
                            <a href="https://github.com/simeiro/Highlight39Revised" className="text-blue-500 hover:text-blue-700">GitHub</a>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <Image
                                src="/product/cac.png"
                                width={100}
                                height={100}
                                alt="定例総会bot"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">Chorus Medley / Chrome拡張機能</summary>
                    <div className="w-auto h-auto bg-slate-50 border-4  flex flex-col m-4">
                        <div className="pt-4">
                            <h3 className="text-2xl text-slate-600">Chorus Medley</h3>
                            <p className="text-xl pb-4">個人開発</p>
                            <p>このChrome拡張機能はYouTubeプレイリスト上のボカロ曲をサビだけ再生することができます。</p>
                            <p>私自身、ボーカロイド曲が好きで昔はサビのメドレー動画を作成したりしていました。</p>
                            <p>これを自動化できないかと考えこの拡張機能を作成しました。</p>
                            <p>今まで作ったプロダクトの中で一番使っているお気に入りのものです。</p>
                            <p>開発を通してAPIの利用、非同期処理についての理解度が深まりました。</p>
                            <p>使用技術: HTML/CSS, JavaScript</p>
                            <a href="https://chromewebstore.google.com/detail/chorusmedley/cfbjnolbecdkggpliifcalefgjoebbld" className="text-blue-500 hover:text-blue-700">インストール先</a>/
                            <a href="https://github.com/simeiro/chorusMedley" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                            <a href="https://x.com/simeir0" className="text-blue-500 hover:text-blue-700">きじ</a>
                            
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <video
                                src="/product/ChorusMedley.mp4" 
                                width="1000" 
                                height="1000" 
                                autoPlay
                                muted
                                loop
                                controls
                            />
                        </div>
                        <p>使用させていただいてる動画</p>
                        <a href="https://youtu.be/qXkkhP0d_iM" className="text-blue-500 hover:text-blue-700">秋の未確認生物(long ver) / 音街ウナ by 子牛</a>
                        <a href="https://youtu.be/YyX9J1Azkx0" className="text-blue-500 hover:text-blue-700">#1 アンスロポフォビア (Anthropophobia) / リスミー ft. 初音ミク by リスミー</a>
                        <a href="https://youtu.be/79N1O0lF0GY" className="text-blue-500 hover:text-blue-700">【SNOW MIKU 公式曲】好き！雪！本気マジック feat. 初音ミク【Mitchie M】by Mitchie M</a>
                        <p>Licensed under Creative Commons: By Attribution 3.0 License</p>
                    </div>
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">blog.simeiro / 個人ブログ</summary>
                    <div className="w-auto h-auto bg-slate-50 border-4  flex flex-col m-4">
                        <div className="pt-4">
                            <h3 className="text-2xl text-slate-600">blog.simeiro</h3>
                            <p className="text-xl pb-4">個人開発</p>
                            <p>日々の出来事、聴いているボカロ、技術記事などを書く個人ブログです</p>
                            <p>使用技術: Next.js</p>
                            <a href="https://github.com/simeiro/blog.simeiro" className="text-blue-500 hover:text-blue-700">GitHub</a>
                            
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <Image
                                src="/profile/simeiro.jpg"
                                width={100}
                                height={100}
                                alt="Chorus Medley"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">Taber / Chrome拡張機能</summary>
                    <div className="w-auto h-auto bg-slate-50 border-4  flex flex-col m-4">
                        <div className="pt-4">
                            <h3 className="text-2xl text-slate-600">Taber</h3>
                            <p className="text-xl pb-4">技育CAMPハッカソンvol.10（最優秀賞）</p>
                            <p>タブを便利に使えるChrome拡張機能です。</p>
                            <p>私自身がタブを作りすぎてしまうことがありました。</p>
                            <p>それを改善したいとチームメンバーに発言したところ、「それいいね」と言われ開発をしました。</p>
                            <p>具体的に実装したことは、タブ数の制限機能、ドメインごとのグループ化、重複タブの削除などです。</p>
                            <p>技術力は正直他のチームに劣っていました。</p>
                            <p>しかし、アイデアの良さ、メンバーが全員1年生であったことを評価してもらい最優秀賞をいただくことができました。</p>
                            <p>チームメンバーは4人でしたが、それぞれが1つずつ機能を担当するような形だったので、貢献度は1/4といったところです。</p>
                            <p>自分がアイデア出しを主に行っていてそこが評価されたのはとても嬉しかったです。</p>
                            <p>使用技術: HTML/CSS, JavaScript, jQuery</p>
                            
                            <a href="https://github.com/simeiro/Taber" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                            <a href="https://note.supporterz.jp/n/n7d91b0b6fdf8#8adc63ac-3dff-4290-a87c-05e575a376c0" className="text-blue-500 hover:text-blue-700">ハッカソン記事</a>/
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <object data="/product/Taber.pdf" type="application/pdf" width="100%" height="1000">
                                <p>PDFが表示されない場合こちらにアクセスしてください: <a href="https://docs.google.com/presentation/d/1hPI6YjmqsjBOtJLlR8Y9OiqYkuZaDHuhN-zMGpTsWfo/edit#slide=id.p" className="text-blue-500 hover:text-blue-700">発表資料</a></p>
                            </object>

                        </div>
                    </div>
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">キョウガチャ / Android, iOSアプリ</summary>
                    <div className="w-auto h-auto bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">キョウガチャ</h3>
                        <p className="text-xl pb-4">関西ビギナーズハッカソンVOL2</p>
                        <p className="text-slate-600">京都の今日行く場所をランダムに決めてくれるAndroid, iOSアプリ</p>
                        <p>このハッカソンでは意見を言う難しさを実感しました。</p>
                        <p>メンバーは初対面同士でした。</p>
                        <p>自分の意見を言うと否定されるのではとか、自分はこの意見がいいと思ってないけどどうやって否定しよう。</p>
                        <p>など、コミュニケーションで悩むことが多かったです。</p>
                        <p>ただ、そういう自分の問題点がわかったことはとても有意義でした。</p>
                        <p>また、寝る間を惜しんで開発するというあまりない経験もすることができました。</p>
                        <p>これも、自分の体力、集中力を把握できた良い機会でした。</p>
                        <p>最終的に形になって動いてくれたのでそれがとても嬉しかったです。</p>
                        <p>開発は6割くらい担当しました。</p>
                        <p>使用技術: Flutter</p>
                        <a href="https://github.com/simeiro/amanojaku" className="text-blue-500 hover:text-blue-700">GitHub</a>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <object data="/product/キョウガチャ.pdf" type="application/pdf" width="100%" height="1000">
                            <p>PDFが表示されない場合こちらにアクセスしてください: <a href="https://www.canva.com/design/DAFsvBHtIOk/Xe5QbiARnON_RkC_PGOXjA/edit" className="text-blue-500 hover:text-blue-700">発表資料</a></p>
                        </object>
                    </div>
                </div>
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">Takopa / Androidアプリ</summary>
                    <div className="w-auto h-auto bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">Takopa</h3>
                        <p className="text-xl pb-4">KC3HACK2024（最優秀賞・DMM.com賞）</p>
                        <p>画像認識を用い、たこ焼きの焼色を点数化しランキングに投稿できるAndroidアプリです。</p>
                        <p>このチームではとにかくアイデアを重要にして取り組みました。</p>
                        <p>お題は「関西をええ感じにする」でした。</p>
                        <p>しかし、なかなか良いアイデアが思い浮かびませんでした。</p>
                        <p>遂には開発期間に入ってしまったのですが、それでも私はもっと良いアイデアがあると言いギリギリまでアイデア出しを行いました。</p>
                        <p>その結果、クオリティは決して高いものとは言えなかったですが、</p>
                        <p>技育CAMPハッカソンvol.10最優秀賞のときと同じくアイデアについて評価してもらい最優秀賞をいただくことができました。</p>
                        <p>2回の最優秀賞を通してアイデア力に自信を持つことができました。</p>
                        <p>開発は2割程度（Firebaseの部分）と画像認識の下調べを担当しました。</p>
                        <p>使用技術: AndroidStudio, TensorFlowLite, Firebase</p>
                        <a href="https://github.com/kc3hack/2024_I" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                        <a href="https://kc3.me/news/2405/" className="text-blue-500 hover:text-blue-700">ハッカソン記事</a>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <object data="/product/Takopa.pdf" type="application/pdf" width="100%" height="1000">
                            <p>PDFが表示されない場合こちらにアクセスしてください: <a href="https://docs.google.com/presentation/d/1gToIVq8YrHVcBQ7qoljZenX3hmChI1NRLITWgunACJA/edit#slide=id.g1f2b2243f2e_3_44" className="text-blue-500 hover:text-blue-700">発表資料</a></p>
                        </object>
                    </div>
                </div>
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">sorcery-assemble / Minecraftプラグイン</summary>
                    <div className="w-auto h-auto bg-slate-50 border-4  flex flex-col m-4">
                        <div className="pt-4">
                            <h3 className="text-2xl text-slate-600">sorcery-assemble</h3>
                            <p className="text-xl pb-4">C.A.C.新歓祭2024</p>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <video
                                src="/profile/sorcery-assemble.mp4" 
                                width="1000" 
                                height="1000" 
                                autoPlay
                                muted
                                loop
                            />
                        </div>
                    </div>
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">スピロアート/ Javaアプリケーション</summary>
                    <div className="w-auto h-auto bg-slate-50 border-4  flex flex-col m-4">
                        <div className="pt-4">
                            <h3 className="text-2xl text-slate-600">スピロアート</h3>
                            <p className="text-xl pb-4">授業でのチーム開発</p>
                            <p>このチーム開発ではウォーターフォールモデルに沿って開発を進めており、私はプロジェクトマネージャーを担当しました。</p>
                            <p>その過程でチーム開発の難しさを痛感しました。</p>
                            <p>プロジェクトマネージャーとしてどうしていけばいいか、</p>
                            <p>進捗管理、メンバーの技術習熟度による仕事の割り振り、コミュニケーション、様々なところで失敗しました。</p>
                            <p>その反省も踏まえて、もっとチーム開発を経験してエンジニア職に就けるような実力をつけたいです。</p>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <video
                                src="/profile/spiroart.mp4" 
                                width="1000" 
                                height="1000" 
                                autoPlay
                                muted
                                loop
                            />
                        </div>
                    </div>
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">ある音を聞いてその周波数を答えるクソゲー / ゲーム</summary>
                    <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                        <div className="pt-4">
                            <h3 className="text-2xl text-slate-600">ある音を聞いてその周波数を答えるクソゲー</h3>
                            <p className="text-slate-600">聴こえた周波数を当てるゲーム</p>
                            <p className="text-slate-600">学祭にて展示</p>
                            <a href="https://github.com/simeiro/frequency-game" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                            <a href="https://unityroom.com/games/hzgame" className="text-blue-500 hover:text-blue-700">unityroom</a>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <Image
                                src="/profile/frequency-game.png"
                                width={100}
                                height={100}
                                alt="takopa"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">Taber / Chrome拡張機能</summary>
                    
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">Taber / Chrome拡張機能</summary>
                    
                </details>
                <details className="text-slate-600">
                    <summary className="text-2xl">Taber / Chrome拡張機能</summary>
                    
                </details>
            </div>


            <div className="flex items-center flex-wrap justify-center">
                
                
                
                
            </div>
        </>
    );
}