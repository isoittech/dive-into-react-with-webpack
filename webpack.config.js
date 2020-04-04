const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
    // webpackのエントリポイント
    entry: './src/index.js',

    // 出力方式（場所・内容）を決める
    output: {
        // どこに出すのか
        path: outputPath,
        // 名前を何にするのか
        filename: 'main.js'
    },
    module: {
        rules: [
            // 下記理由によりコメントアウトし、scss側と合体する。
            // ・css用の設定とscss用の設定の違いはsass-loaderを適用するかどうかである。
            // ・scssはcssと互換性があり、cssファイルに対してsass-loaderを適用できる。
            // {
            //     test: /\.css$/,
            //     use: [
            //         // 'style-loader', // styleタグに出力するためのもので、mini-css-extractプラグインを使って別ファイルCSSを読み込む場合は不要となるため、不使用。
            //         MiniCssExtractPlugin.loader,
            //         'css-loader'
            //     ]
            // },
            {
                // どういったルールで登録するのか。正規表現で書く
                // test: /\.scss$/,
                test: /\.(sc|c)ss$/, // cssも適用できるようにする。
                // 何を登録し適用させるのか
                // 下記に書くものは順序に注意が必要である。
                // 並び順とは逆順に評価・実行される。
                // つまり下記は、sass-loader、css-loader、mini-css-extractプラグインloaderの順序で実行される。
                use: [
                    // 'style-loader', // styleタグに出力するためのもので、mini-css-extractプラグインを使って別ファイルCSSを読み込む場合は不要となるため、不使用。
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                // BASE64URLエンコードする条件と対象
                test: /\.(jpe?g|png|gif|svg|ico)$/i, // 'i'は大文字小文字無視
                loader: 'url-loader',
                options: {
                    // 2KBを超えるサイズの画像がname.extで置き換えられる。
                    // 分離されたname.extは、並行してDLされるようになり、早くなる。
                    limit: 2048, // 単位=Bytes
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            }
        ]
    },
    devServer: {
        contentBase: outputPath
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 雛形ファイル名
            template: './src/index.html',
            // 雛形HTMLをベースにして最終的に出力するファイル
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            // HTMLとは別最終的に出力するファイル
            // ※importしたスタイルシートをこれにバンドルして放り込む
            // ※[name]はデフォで'main'となる。
            // ※[hash]はバンドル時にユニークな番号を生成して、ユニークなファイル名を付ける。
            //   ※Proxyサーバのキャッシュを回避するためにユニークにする、というテク。
            filename: '[name].[hash].css'
        })
    ]
}
