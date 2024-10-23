import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'

function MyPage() {
  return (
    <div className={styles.text}>
      <h1>マイページ</h1>
      <h6>テキスト<br />
        2段目</h6>
      
      <table className={styles.ranktable}><thead>
        <tr><th>ランク</th></tr>
        <tr>
          <th scope="row">apex</th>
          <th scope="col">銅</th>
          <th scope="col">銀</th>
          <th scope="col">金</th>
          <th scope="col">プラチナ</th>
          <th scope="col">ダイヤ</th>
          <th scope="col">マスター</th></tr>
        </thead>
        <tbody>
          <tr><th scope="row">programing</th>
          <td>HTML</td>
          <td>CSS</td>
          <td>JavaScript</td>
          <td>React</td>
          <td>Next.js</td>
          <td>TypeScript</td></tr>
        </tbody>
      </table>
      
      <p>mosyaのサイトへGO</p>
      <a href="https://mosya.dev/" target="_blank" rel="noopener noreferrer">ここをクリック</a>
      <p>Next.jsのサイトはこちら</p>
      <a href="https://nextjs.org/docs/getting-started/installation" target="_blank" rel="noopener noreferrer">こっちをクリック</a>
      
      <h1>マサラタウンにさよならバイバイ
        <Image src="https://img.atwiki.jp/aniwotawiki/attach/7657/14291/新無印サトシ1.jpg"
      loading="lazy"
      alt="サンプル画像" width={1000} height={919} unoptimized /></h1>
    </div>
  )
}

export default MyPage