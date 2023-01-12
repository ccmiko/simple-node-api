# node.js-simple-mock-server

- とりあえずモックのAPIサーバが欲しいとき用の簡単なnode.js+express.js
- ローカルPC内で簡単 かつ 柔軟なカスタマイズができるモックAPIを用意したい場合を想定しています。

## ディレクトリ構成

```text
- app.js // アプリの立ち上げに関する定義
- src // srcフォルダ
  - constants // 定数フォルダ
    - apiPath.js // モックAPIの各種定義をまとめている。ここは適宜修正する。
  - controllers // コントローラフォルダ
    - mockApiController.js // モックAPIのコントローラ。基本は触らなくてもOK
  - mockResponses // モックのレスポンス一覧フォルダ
    - createMockResponseSchema.js // レスポンススキーマのベース作成
    - mockUtils.js / mock関係のutil。追加したい処理があったら書く。
    - 他のファイル // API1つ1つのモック値を定義する。ここは適宜修正する。
  - mockApiRouter.js // モックAPIのルーティング定義。基本は触らなくてもOK
```

## 起動方法

### ターミナルから立ち上げ

```shell
git clone git@github.com:ccmiko/simple-node-api.git
cd simple-node-api
yarn install
yarn start
```

### デバッグモードで立ち上げ

- ブレイクポイント打ってデバッグできたりするので、推奨はこっちです。

```shell
git clone git@github.com:ccmiko/simple-node-api.git
cd simple-node-api
yarn install
ここまでできたらvscodeでF5を押す
```

## 修正方法

- `src/constants/apiPath.js` を開き、既存の記載を元に追加したいモックAPI情報を追記
- `src/mockResponses/` 配下に `RESPONSE_MOCK_DATA_FILE_NAME` に定義したファイル名と同じファイルを作成
- モックのレスポンス値を既存を参考に作成
- `yarn start` でアプリを立ち上げる
  - ターミナルから立ち上げた場合・デバッグモードで立ち上げた場合どちらもホットリロードされるので、手で起動し直す必要はありません。
- リクエスト飛ばしてみる
- 通ったらOK
