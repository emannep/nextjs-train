import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Head from "next/head";

function MyPage() {
  return (
    <div>
      <a></a>
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

      <section>
        <div className="flex flex-col items-center bg-[#F8F9FA]">
          <header>
            <div className="py-12 text-2xl md:text-4xl">お知らせ</div>
          </header>

          <div className="flex flex-row flex-nowrap mx-12 gap-[20px]">
            <div className="flex flex-col flex-shrink w-[350px] h-fit">
              <article className="bg-white p-5">
                <header className="flex flex-row items-center h-[80px] gap-[20px]">
                  画像
                  <div className="text-[18px] leading-[1.5]">営業について</div>
                </header>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col">
                    ※本日の営業についてと、緊急時のお知らせはこちらをご覧ください。
                    <button className="p-4 w-fit text-[13px] px-4 py-2 rounded-md bg-orange-600 text-white cursor-pointer">
                      詳しくはこちら
                    </button>
                  </div>
                  <div className="flex flex-col">
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
                  </div>
                </div>
              </article>
              <article className="flex flex-col bg-white p-5">
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
                <div>
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
                </div>
              </article>
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
              <article className="flex flex-col bg-white p-5">
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
                <div className="flex flex-col bg-white p-5">
                  <div className="bg-blue-400 text-center h-[100px]">
                    facebook
                  </div>
                </div>
                <div className="flex flex-col bg-white p-5">
                  <div className="bg-blue-200 text-center h-[400px]">SNS</div>
                </div>
                <div className="flex flex-col bg-white p-5 gap-4">
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
                </div>
                <div className="flex flex-col bg-white p-5 gap-4">
                  <div className="bg-gray-400 text-center h-[100px]">
                    youtube_movie2
                  </div>
                  <div className="text-sm">
                    私たちは「Respect The Law 38
                    プロジェクト」に賛同しています。
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-row justify-center px-11 py-[105px] bg-[#F8F9FA]">
          <div className="flex flex-row">
            <article className="flex flex-col flex-1 align-left max-w-[500px] gap-4 p-4 text-wrap">
              <Image
                className="text-center"
                src="/icon.png"
                alt="家アイコン"
                width={50}
                height={50}
              />
              <header className="text-center text-3xl">有料老人ホーム</header>
              <div>快適なセカンドライフをご一緒に始めませんか。</div>
              <div>
                ｢地域社会とのかかわりを持ちつつも、いつまでも自分らしく、
                いきいきとした人生を送りたい｣
              </div>
              <div>
                ここは、そうお考えの方にピッタリの場所。
                より質の高い充実した時間をお過ごししていただくための ｢介護付
                有料老人ホーム｣です。
              </div>
            </article>
            <article className="flex flex-col flex-1 align-left max-w-[500px] gap-4 p-4">
              <Image
                className="text-center"
                src="/icon.png"
                alt="人アイコン"
                width={50}
                height={50}
              />
              <header className="text-center text-3xl">
                豊田市温浴施設じゅわじゅわ
              </header>
              <div>一般の方もご利用できる温浴施設です！</div>
              <div>
                じゅわじゅわは、20種類もの趣向を凝らした温浴メニューがあります。
                楽しみながら遊び感覚で健康づくりを進めてみませんか？
              </div>
              <div>
                割目池温泉ほっとかんの湯は、地下1,300mから湧き出しており、体の芯まで温まります。
              </div>
            </article>
            <article className="flex flex-col flex-1 align-left max-w-[500px] gap-4 p-4">
              <Image
                className="text-center"
                src="/icon.png"
                alt="葉アイコン"
                width={50}
                height={50}
              />
              <header className="text-center text-3xl">介護サービス</header>
              <div>
                もしもの時にも充分な体制で、安心の介護サービスをご提供します。
                地域包括支援センター・居宅介護支援事業所では、日常の介護や高齢者福祉サービス、
                介護機器に関する情報などのご相談にお応えいたします。
              </div>
              <div>
                デイサービスでは、介護士や看護師が親身になってお世話をいたします。
                また楽しいレクリエーション、音楽を使った認知症予防、機能回復訓練、
                温泉への入浴、季節の行事などを行っています。
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <article className="flex flex-row justify-center px-11 py-[105px] bg-[#F8F9FA]">
          <div className="flex flex-col px-12 gap-8">
            <div className="flex flex-row items-center text-[#6c757d]">
              <div>01</div>
              <div className="flex mx-2 w-12 h-[2px] bg-[#e74208]"></div>
              <div>MAIN BUILD.</div>
            </div>
            <header className="text-5xl">本館</header>
            <div className="text-xl leading-8">
              有料老人ホーム
              <br />
              豊田市温浴施設じゅわじゅわ
              <br />
              割目池温泉ほっとかんの湯
              <br />
              西部コミュニティセンター
              <br />
              地域包括支援センター
              <br />
              ふじしま内科
              <br />
              あおい調剤薬局
              <br />
              総合事務室
              <br />
            </div>
          </div>
          <Image
            className="px-4 bg-slate-400"
            src="/icon.png"
            alt="葉アイコン"
            width={635}
            height={635}
          />
        </article>

        <article className="flex flex-col text-center px-11 py-[105px] gap-6 bg-[#F8F9FA]">
          <header className="text-3xl">本館案内</header>
          <div className="text-xl">
            本館では、温浴施設、西部コミュニティセンター、地域包括支援センター、内科、
            <br />
            調剤薬局があり、一般の方も便利にご利用いただけるスペースとなっています。
            <br />
            また、介護付き有料老人ホーム居室70戸がございます。
          </div>
          <div className="grid grid-cols-3 mt-6">
            <Image
              className="w-full h-auto bg-slate-400"
              src="/icon.png"
              alt="有料老人ホーム"
              width={300}
              height={200}
            />
            <Image
              className="w-full h-auto bg-red-400"
              src="/icon.png"
              alt="豊田市温浴施設じゅわじゅわ
              割目池温泉ほっとかんの湯"
              width={300}
              height={200}
            />
            <Image
              className="w-full h-auto bg-blue-400"
              src="/icon.png"
              alt="地域包括支援センター"
              width={300}
              height={200}
            />
            <Image
              className="w-full h-auto bg-yellow-400"
              src="/icon.png"
              alt="西部コミセン 図書室"
              width={300}
              height={200}
            />
            <Image
              className="w-full h-auto bg-green-400"
              src="/icon.png"
              alt="ふじしま内科"
              width={300}
              height={200}
            />
            <Image
              className="w-full h-auto bg-purple-400"
              src="/icon.png"
              alt="あおい調剤薬局"
              width={300}
              height={200}
            />
          </div>
        </article>
      </section>

      <section>
        <article className="flex flex-row justify-center px-11 py-[105px] bg-[#F8F9FA]">
          <Image
            className="px-4 bg-slate-400"
            src="/icon.png"
            alt="葉アイコン"
            width={635}
            height={635}
          />
          <div className="flex flex-col px-12 gap-8">
            <div className="flex flex-row items-center text-[#6c757d]">
              <div>02</div>
              <div className="flex mx-2 w-12 h-[2px] bg-[#e74208]"></div>
              <div>EAST BUILD.</div>
            </div>
            <header className="text-5xl">東館</header>
            <div className="text-xl leading-8">
              有料老人ホーム
              <br />
              一般デイサービス
              <br />
              リハビリデイサービス
              <br />
              ほっとかんクラブ
              <br />
              居宅介護支援事業所
              <br />
              どんぐり保育室
              <br />
            </div>
          </div>
        </article>

        <article className="flex flex-col text-center px-11 py-[105px] gap-6 bg-[#F8F9FA]">
          <header className="text-3xl">東館案内</header>
          <div className="text-xl">
            2018年10月に豊田ほっとかん東館が誕生いたしました。
            <br />
            本館と同一敷地内に別棟として開設し、有料老人ホーム居室18室、リハビリデイサービス、
            <br />
            企業主導型保育所(どんぐり保育室)を新設いたしました。
            <br />
            皆様により一層充実したサービスをご提供いたします。{" "}
          </div>
          <div className="grid grid-cols-3 mt-6">
            <Image
              className="w-full h-auto bg-slate-400"
              src="/icon.png"
              alt="有料老人ホーム"
              width={300}
              height={200}
            />
            <Image
              className="w-full h-auto bg-red-400"
              src="/icon.png"
              alt="一般デイサービス"
              width={300}
              height={200}
            />
            <Image
              className="w-full h-auto bg-blue-400"
              src="/icon.png"
              alt="リハビリデイサービス"
              width={300}
              height={200}
            />
            <Image
              className="w-full h-auto bg-yellow-400"
              src="/icon.png"
              alt="東館正面"
              width={300}
              height={200}
            />
            <Image
              className="w-full h-auto bg-green-400"
              src="/icon.png"
              alt="居宅介護"
              width={300}
              height={200}
            />
            <Image
              className="w-full h-auto bg-purple-400"
              src="/icon.png"
              alt="どんぐり保育室"
              width={300}
              height={200}
            />
          </div>
        </article>
      </section>

      <section>
        <div className="flex flex-col text-center p-11 gap-6 bg-[#F8F9FA]">
          <header className="text-3xl">googleビュー</header>
          <div className="text-xl">googleインドアビューで施設内をご覧ください。</div>

          <article className="flex flex-col text-center p-11 gap-6 bg-[#F8F9FA]">
            <header className="text-3xl">本館</header>
            <div className="grid grid-cols-5 mx-6 gap-1">
              <Image
                className="w-full h-auto bg-slate-400"
                src="/icon.png"
                alt="正面玄関"
                width={80}
                height={50}
              />
              <Image
                className="w-full h-auto bg-red-400"
                src="/icon.png"
                alt="一般デイサービス"
                width={80}
                height={50}
              />
              <Image
                className="w-full h-auto bg-blue-400"
                src="/icon.png"
                alt="リハビリデイサービス"
                width={80}
                height={50}
              />
              <Image
                className="w-full h-auto bg-yellow-400"
                src="/icon.png"
                alt="東館正面"
                width={80}
                height={50}
              />
              <Image
                className="w-full h-auto bg-green-400"
                src="/icon.png"
                alt="居宅介護"
                width={80}
                height={50}
              />
            </div>
            <div className="bg-gray-400 text-center h-[600px]">
              google map
            </div>
          </article>

          <article className="flex flex-col text-center p-11 gap-6 bg-[#F8F9FA]">
            <header className="text-3xl">東館</header>
            <div className="grid grid-cols-5 mx-6 gap-1">
              <Image
                className="w-full h-auto bg-slate-400"
                src="/icon.png"
                alt="正面玄関"
                width={80}
                height={50}
              />
              <Image
                className="w-full h-auto bg-red-400"
                src="/icon.png"
                alt="一般デイサービス"
                width={80}
                height={50}
              />
              <Image
                className="w-full h-auto bg-blue-400"
                src="/icon.png"
                alt="リハビリデイサービス"
                width={80}
                height={50}
              />
              <Image
                className="w-full h-auto bg-yellow-400"
                src="/icon.png"
                alt="東館正面"
                width={80}
                height={50}
              />
              <Image
                className="w-full h-auto bg-green-400"
                src="/icon.png"
                alt="居宅介護"
                width={80}
                height={50}
              />
            </div>
            <div className="bg-gray-400 text-center h-[600px]">
              google map
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}

export default MyPage;
