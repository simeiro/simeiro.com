import Image from "next/image";

export default function Product(){
    return(
        <>
            <div className="flex items-center flex-wrap justify-center">
                <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">Highlight39 (個人開発)</h3>
                        <p className="text-slate-600">最新の人気ボカロ曲を送信してくれるDiscord bot</p>
                        <a href="https://github.com/simeiro/Highlight39Revised" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                        <a href="https://x.com/simeir0" className="text-blue-500 hover:text-blue-700">きじ</a>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <Image
                            src="/profile/Highlight39.jpg"
                            width={100}
                            height={100}
                            alt="Highlight39"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">定例総会Bot (個人開発)</h3>
                        <p className="text-slate-600">部活の定例総会を円滑に行うためのDiscord bot</p>
                        <a href="https://github.com/simeiro/Highlight39Revised" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                        <a href="https://x.com/simeir0" className="text-blue-500 hover:text-blue-700">きじ</a>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <Image
                            src="/profile/cac.png"
                            width={100}
                            height={100}
                            alt="定例総会bot"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">Chorus Medley (個人開発)</h3>
                        <p className="text-slate-600">YouTube再生リストのボカロ曲をサビメドレーとして再生するChrome拡張機能</p>
                        <a href="https://github.com/simeiro/chorusMedley" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                        <a href="https://x.com/simeir0" className="text-blue-500 hover:text-blue-700">きじ</a>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <Image
                            src="/profile/chorusMedley.png"
                            width={100}
                            height={100}
                            alt="Chorus Medley"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">blog.simeiro (個人開発)</h3>
                        <p className="text-slate-600">雑多な個人ブログ</p>
                        <p className="text-slate-600">現在開発中</p>
                        {/* <a href="https://github.com/simeiro/chorusMedley" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                        <a href="https://x.com/simeir0" className="text-blue-500 hover:text-blue-700">きじ</a> */}
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
                <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">Taber (ハッカソン)</h3>
                        <p className="text-slate-600">タブ整理ができるChrome拡張機能</p>
                        <p className="text-slate-600">最優秀賞受賞</p>
                        <a href="https://github.com/simeiro/Taber" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                        <a href="https://note.supporterz.jp/n/n7d91b0b6fdf8#8adc63ac-3dff-4290-a87c-05e575a376c0" className="text-blue-500 hover:text-blue-700">ハッカソン記事</a>/
                        <a href="https://docs.google.com/presentation/d/1hPI6YjmqsjBOtJLlR8Y9OiqYkuZaDHuhN-zMGpTsWfo/edit#slide=id.p" className="text-blue-500 hover:text-blue-700">発表資料</a>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <Image
                            src="/profile/taber.png"
                            width={100}
                            height={100}
                            alt="Taber"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">キョウガチャ (ハッカソン)</h3>
                        <p className="text-slate-600">京都の今日行く場所をランダムに決めてくれるAndroid, iOSアプリ</p>
                        <a href="https://github.com/simeiro/amanojaku" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                        <a href="https://www.canva.com/design/DAFsvBHtIOk/Xe5QbiARnON_RkC_PGOXjA/edit" className="text-blue-500 hover:text-blue-700">発表資料</a>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <Image
                            src="/profile/キョウガチャ.png"
                            width={100}
                            height={100}
                            alt="キョウガチャ"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">Takopa (ハッカソン)</h3>
                        <p className="text-slate-600">たこ焼き評価Androidアプリ</p>
                        <p className="text-slate-600">最優秀賞、DMM.com賞 受賞</p>
                        <a href="https://github.com/kc3hack/2024_I" className="text-blue-500 hover:text-blue-700">GitHub</a>/
                        <a href="https://kc3.me/news/2405/" className="text-blue-500 hover:text-blue-700">ハッカソン記事</a>/
                        <a href="https://docs.google.com/presentation/d/1gToIVq8YrHVcBQ7qoljZenX3hmChI1NRLITWgunACJA/edit#slide=id.g1f2b2243f2e_2_542" className="text-blue-500 hover:text-blue-700">発表資料</a>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <Image
                            src="/profile/takopa.png"
                            width={100}
                            height={100}
                            alt="takopa"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">sorcery-assemble(チーム開発)</h3>
                        <p className="text-slate-600">魔術が使えるようになるマイクラのプラグイン</p>
                        <p className="text-slate-600">現在開発停止中</p>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <video
                            src="/profile/sorcery-assemble.mp4" 
                            width="600" 
                            height="600" 
                            autoPlay
                            muted
                            loop
                        />
                    </div>
                </div>
                <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">スピロアート(チーム開発)</h3>
                        <p className="text-slate-600">幾何学模様を描くJavaアプリケーション</p>
                        <p className="text-slate-600">大学の授業にて開発</p>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <video
                            src="/profile/spiroart.mp4" 
                            width="600" 
                            height="600" 
                            autoPlay
                            muted
                            loop
                        />
                    </div>
                </div>
                <div className="w-96 h-96 bg-slate-50 border-4  flex flex-col m-4">
                    <div className="pt-4">
                        <h3 className="text-2xl text-slate-600">frequency-game(チーム開発)</h3>
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
            </div>
        </>
    );
}