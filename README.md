# 公開ワークショップ LP

## ファイル構成
- `index.html` … ページ本体（文章はここ）
- `style.css` … 見た目（色・フォントは一番上の `:root` だけ）
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

## 公開（Cloudflare Pages）
GitHub に新しいリポジトリを作ってこのフォルダを push → Cloudflare Pages で連携。
ビルド設定は不要（Build command 空欄・出力ディレクトリ `/`）。
