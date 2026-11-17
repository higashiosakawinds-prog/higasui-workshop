# 東大阪吹奏楽団 公開ワークショップ LP

## ファイル構成
- `index.html` … ページ本体（文章・申込リンクはここ）
- `style.css` … 見た目（色・フォントは一番上の `:root` だけ）
- `main.js` … 動き（触らなくてOK）
- `tokushoho.html` … 特定商取引法に基づく表記（【要記入】を埋める）
- `assets/` … 画像

## 書き換える場所
1. **申込ボタンのリンク**：`index.html` の上の方にある `LINKS` に URL を貼る（ここだけ）
   - `perform` … Stripe の決済リンク
   - `listen` … 聴講申込フォームの URL
   - 空のままだとボタンに「※準備中」と出て押せません
2. **特商法ページ**：`tokushoho.html` の【要記入】を埋める
3. **公開後**：`index.html` の `og:image` を `https://公開URL/assets/flyer.png` に変える（SNS共有用）

## Stripe 決済リンクの作り方
1. Stripe ダッシュボード → 決済リンク → 新規作成
2. 商品「公開ワークショップ 演奏参加」2,000円、数量は固定
3. 「カスタムフィールド」で 氏名・演奏楽器 を入力欄に追加
4. 作成された URL を `LINKS.perform` に貼る

## 公開（GitHub Pages）
リポジトリの Settings → Pages → Branch を `main` / `/ (root)` にして Save。
公開URL：`https://ユーザー名.github.io/リポジトリ名/`

## 直したいとき
GitHub でファイルを開き、鉛筆アイコン → 編集 → Commit changes。1〜2分で反映されます。
