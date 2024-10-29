import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'

function MyPage() {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 p-10 bg-black tracking-widest">
        <Image className={styles.icon1} src="/icon.png" alt="アイコン" width={50} height={50}>
        </Image>
        <a href="" className="text-yellow-200 text-sm">HOME</a>
        <a href="" className="text-white text-sm">ホットカン</a>
        <div className={styles.about}>ホットカンとは
          <div className={styles.about_menu}>
            <a href="" className="block hover:bg-red-500 hover:text-white">
              施設概要
            </a>
            <a href="" className="block hover:bg-red-500 hover:text-white">
              社長あいさつ
            </a>
            <a href="" className="block hover:bg-red-500 hover:text-white">
              会社概要
            </a>
            <a href="" className="block hover:bg-red-500 hover:text-white">
              決算公告
            </a>
          </div>
        </div>
        <div className={styles.intro}>施設紹介
          <div className={styles.intro_menu}>
          <a href="" className="block hover:bg-red-500 hover:text-white">
            有料老人ホーム
            </a>
            <a href="" className="block hover:bg-red-500 hover:text-white">
              デイサービス
            </a>
            <a href="" className="block hover:bg-red-500 hover:text-white">
              介護のご案内
            </a>
            <a href="" className="block hover:bg-red-500 hover:text-white">
              温浴施設
            </a>
            <a href="" className="block hover:bg-red-500 hover:text-white">
              その他の施設
            </a>
          </div>
        </div>
        <a href="" className="text-white text-sm">求人情報</a>
        <a href="" className="text-white text-sm">よくあるご質問</a>
        <a href="" className="text-white text-sm">アクセス</a>
        <a href="" className="text-white text-sm">Googleレビュー</a>
        <a className="bg-orange-600 text-white text-xs py-3 px-4 rounded no-underline"
        href="" target="_blank" rel="noopener">お問い合わせはこちらへ
        </a>
      </div>

      <div>
        <Image className="slide" src="/slide.png" alt="スライドショー" width={50} height={50}></Image>
      </div>

      <div className="text-center py-32 text-4xl">お知らせ
      </div>

      <div className="flex justify-between items-center p-20">
        <div className="inline-grid text-base">
          <div className="block">
            <div className='flex items-center'>
              <Image className={styles.icon2} src="/icon.png" alt="アイコン" width={50} height={50}>
              </Image>
              営業について
            </div>

          </div>
        </div>
        <div className="inline-grid text-base">お知らせ

        </div>
        <div className="inline-grid text-base">お知らせ

        </div>
      </div>
    </div>
  )
}

export default MyPage