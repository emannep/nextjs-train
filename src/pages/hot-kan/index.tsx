import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Head from "next/head";

function MyPage() {
  return (
    <div>
      <Head>
        <title>hotkan 仮想施設</title>
        <meta name="description" content="" />
        <link rel="canonical" href="http://localhost:3000/hot-kan" />
      </Head>

      <header>
        <div className="flex flex-row justify-center gap-2 px-2 py-4 bg-[#9F7A46] tracking-widest">
          <Image
            className={styles.icon1}
            src="/icon.png"
            alt="アイコン"
            width={79}
            height={108}
          />
          <nav>
            <ul className="flex items-center gap-2 px-2 py-4 tracking-widest">
              <li>
                <a
                  href="http://localhost:3000/hot-kan"
                  className="py-6 text-yellow-200 text-sm text-center"
                >
                  HOME
                </a>
              </li>
              <li>
                <div className={styles.about}>
                  ホットカンとは
                  <div className={styles.about_menu}>
                    <div
                      className="w-0 h-0 absolute translate-x-full -translate-y-4
                        border-x-8 border-x-transparent
                        border-b-8 border-b-white"
                    />
                    <a
                      href=""
                      className="block hover:bg-red-500 hover:text-white"
                    >
                      施設概要
                    </a>
                    <a
                      href=""
                      className="block hover:bg-red-500 hover:text-white"
                    >
                      社長あいさつ
                    </a>
                    <a
                      href=""
                      className="block hover:bg-red-500 hover:text-white"
                    >
                      会社概要
                    </a>
                    <a
                      href=""
                      className="block hover:bg-red-500 hover:text-white"
                    >
                      決算公告
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.about_ins}>
                  施設紹介
                  <div className={styles.about_ins_menu}>
                    <div
                      className="w-0 h-0 absolute translate-x-1/5 -translate-y-4
                      border-x-8 border-x-transparent
                      border-b-8 border-b-white"
                    />
                    <a
                      href=""
                      className="block hover:bg-red-500 hover:text-white"
                    >
                      有料老人ホーム
                    </a>
                    <a
                      href=""
                      className="block hover:bg-red-500 hover:text-white"
                    >
                      デイサービス
                    </a>
                    <a
                      href=""
                      className="block hover:bg-red-500 hover:text-white"
                    >
                      介護のご案内
                    </a>
                    <a
                      href=""
                      className="block hover:bg-red-500 hover:text-white"
                    >
                      温浴施設
                    </a>
                    <a
                      href=""
                      className="block relative hover:bg-red-500 hover:text-white pb-2"
                    >
                      その他の施設
                      <div className={styles.about_ins_other_menu}>
                        <div
                          className="w-0 h-0 absolute -translate-x-1 -translate-y-4
                        border-x-8 border-x-transparent
                        border-b-8 border-b-white"
                        />
                        <a
                          href=""
                          className="block hover:bg-red-500 hover:text-white"
                        >
                          西部コミュニティセンター
                        </a>
                        <a
                          href=""
                          className="block hover:bg-red-500 hover:text-white"
                        >
                          保育室
                        </a>
                        <a
                          href=""
                          className="block hover:bg-red-500 hover:text-white"
                        >
                          ふじしま内科
                        </a>
                        <a
                          href=""
                          className="block hover:bg-red-500 hover:text-white"
                        >
                          あおい調剤薬局
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href=""
                  className="py-6 text-white text-sm place-content-center"
                >
                  求人情報
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="py-6 text-white text-sm place-content-center"
                >
                  よくあるご質問
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="py-6 text-white text-sm place-content-center"
                >
                  アクセス
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="py-6 text-white text-sm place-content-center"
                >
                  Googleレビュー
                </a>
              </li>
              <li>
                <a
                  className="bg-orange-600 hover:bg-orange-400 text-white text-[13px] px-4 py-2 rounded"
                  href=""
                  target="_blank"
                  rel="noopener"
                >
                  お問合わせはこちらへ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div>
        <Image
          className="slide w-[100%] h-[400px] bg-green-300"
          src="/slide.png"
          alt="スライドショー"
          width={1000}
          height={400}
        />
      </div>

      <main>
        <div className="flex flex-col items-center bg-[#F8F9FA]">
          <header>
            <div className="py-12 text-2xl md:text-4xl">お知らせ</div>
          </header>

          <div className="flex flex-row flex-nowrap mx-12 w-[1000px] gap-[20px]">
            <div className="flex flex-col flex-shrink w-[350px] h-fit">
              <section className="bg-white p-5">
                <header className="flex flex-row items-center h-[80px] gap-[20px]">
                  画像
                  <div className="text-[18px] leading-[1.5]">営業について</div>
                </header>
                <div className="flex flex-col gap-[10px]">
                  <article className="flex flex-col">
                    ※本日の営業についてと、緊急時のお知らせはこちらをご覧ください。
                    <button className="p-4 w-fit text-[13px] px-4 py-2 rounded-md bg-orange-600 text-white cursor-pointer">
                      詳しくはこちら
                    </button>
                  </article>
                  <article className="flex flex-col">
                    有料老人ホームの空き状況
                    <div className="text-[#721c24] bg-[#f8d7da] border-[#f5c6cb] mb-2.5">
                      本館：満室
                    </div>
                    <button className="p-4 w-fit text-[13px] px-4 py-2 rounded-md bg-orange-600 text-white cursor-pointer mb-2.5">
                      詳しくはこちら
                    </button>
                    <div className="text-[#0c5460] bg-[#d1ecf1] border-[#bee5eb]">
                      東館：満室
                    </div>
                  </article>
                </div>
              </section>
              <section className="flex flex-col bg-white p-5">
                <header className="flex flex-row items-center h-[80px] gap-[16px] mb-4">
                  <Image
                    className={styles.car_icon}
                    src="/icon.png"
                    alt="車アイコン"
                    width={60}
                    height={60}
                  ></Image>
                  <div className="flex flex-col items-left">
                    <div className="text-[18px] leading-[1.5]">
                      逢妻地区送迎車両
                    </div>
                    <div className="text-[15px] leading-[1.5] text-[#A6A6A6]">
                      送迎車両の運行について
                    </div>
                  </div>
                </header>
                <article>
                  <div className="mb-4">
                    豊田市逢妻地区におきましてほっとかん空き車両を活用し、豊田ほっとかんが地域貢献の一環
                    として送迎車両の運行をしております。
                  </div>
                  <a
                    className="bg-orange-600 hover:bg-orange-400 text-white text-[12px]
                  w-fit px-4 py-2 rounded"
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    詳しくはこちら
                  </a>
                </article>
              </section>
              <p className="h-11"></p>
              <article className="flex flex-col items-left bg-white p-5 gap-3 ">
                <header className="text-[20px] font-bold">
                  介護サービス情報公表
                </header>
                <a
                  className="inline-block bg-[#17A2B8] text-white text-[12px]
                  w-fit text-center px-4 py-2 rounded"
                  href=""
                  target="_blank"
                  rel="noopener"
                >
                  有料老人ホーム
                </a>
                <a
                  className="bg-[#FFC107] hover:bg-orange-400 text-[12px] w-fit px-4 py-2
                rounded"
                  href=""
                  target="_blank"
                  rel="noopener"
                >
                  デイサービス
                </a>
                <a
                  className="bg-[#28A745] hover:bg-orange-400 text-white text-[12px] w-fit px-4 py-2
                rounded"
                  href=""
                  target="_blank"
                  rel="noopener"
                >
                  リハビリデイサービス
                </a>
              </article>
            </div>

            <div className="flex flex-col flex-shrink w-[350px] h-fit bg-white">
              <article className="flex flex-col bg-white p-5">
                <header className="flex flex-row items-center h-[80px] gap-4">
                  <Image
                    className={styles.face_icon}
                    src="/icon.png"
                    alt="顔アイコン"
                    width={60}
                    height={60}
                  ></Image>
                  <div className="flex flex-col items-left">
                    <div className="text-[18px] leading-[1.5]">求人情報</div>
                  </div>
                </header>
                <a
                  className="bg-orange-600 hover:bg-orange-400 text-white text-[12px] w-fit px-4 py-2
                rounded"
                  href=""
                  target="_blank"
                  rel="noopener"
                >
                  随時求人情報はこちらへ
                </a>
              </article>
              <article className="flex flex-col bg-white p-5">
                <header className="flex flex-row items-center h-[80px] gap-4">
                  <Image
                    className={styles.face_icon2}
                    src="/icon.png"
                    alt="アイコン2"
                    width={60}
                    height={80}
                  ></Image>
                  <div className="flex flex-col items-left">
                    <div className="text-[18px] leading-[1.5]">
                      よくあるご質問
                    </div>
                  </div>
                </header>
                <a
                  className="bg-orange-600 hover:bg-orange-400 text-white text-[12px]
                  w-fit px-4 py-2 rounded"
                  href=""
                  target="_blank"
                  rel="noopener"
                >
                  よくあるご質問はこちらへ
                </a>
              </article>
              <article className="flex flex-col bg-white gap-4 p-5">
                <header className="text-lg">賃貸予約システムについて</header>
                <div
                  className="bg-red-600 text-white text-[10px]
                  w-fit px-1 py-[2px] rounded ml-1"
                >
                  2021.4月new
                </div>
                <div>豊田市公共施設予約システムを導入いたしました。</div>
                <a
                  className="bg-orange-600 text-white text-[12px] w-fit px-4 py-2 rounded"
                  href=""
                  target="_blank"
                  rel="noopener"
                >
                  賃貸予約システムはこちらへ
                </a>
                <a
                  className="bg-orange-600 text-white text-[12px] w-fit px-4 py-2 rounded"
                  href=""
                  target="_blank"
                  rel="noopener"
                >
                  詳しい利用案内はこちらへ
                </a>
              </article>
              <article className="flex flex-col bg-white gap-4 p-5">
                <div className="text-[18px]">テレビ愛知CM</div>
                <div className="bg-gray-400 text-center w-[200px] h-[100px]">
                  youtube_movie
                </div>
              </article>
            </div>

            <div className="flex flex-col flex-shrink w-[350px] h-fit bg-white">
              <section className="flex flex-col bg-white p-5">
                <header className="flex flex-row items-center gap-4">
                  <Image
                    className={styles.face_icon2}
                    src="/icon.png"
                    alt="アイコン2"
                    width={60}
                    height={80}
                  ></Image>
                  <div className="text-[18px]">ほっとかんSNS Facebook</div>
                </header>
                <article className="flex flex-col bg-white p-5">
                  <div className="bg-blue-400 text-center h-[100px]">
                    facebook
                  </div>
                </article>
                <article className="flex flex-col bg-white p-5">
                  <div className="bg-blue-200 text-center h-[400px]">SNS</div>
                </article>
                <article className="flex flex-col bg-white p-5 gap-4">
                  <div className="text-sm">
                    どんぐり保育室のインスタグラムを始めました。ご覧ください。
                  </div>
                  <div className="bg-purple-400 text-center h-[200px]">
                    instagram
                  </div>
                  <a
                    className="bg-orange-600 text-white text-[12px] w-fit px-4 py-2 rounded"
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    インスタグラムはこちらへ
                  </a>
                </article>
                <article className="flex flex-col bg-white p-5 gap-4">
                  <div className="bg-gray-400 text-center h-[100px]">
                    youtube_movie2
                  </div>
                  <div className="text-sm">
                    私たちは「Respect The Law 38
                    プロジェクト」に賛同しています。
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyPage;
