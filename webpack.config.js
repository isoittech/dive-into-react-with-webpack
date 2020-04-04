const path = require('path')

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
            {
                // どういったルールで登録するのか。正規表現で書く
                test: /\.css$/,
                // 何を登録し適用させるのか
                // 下記に書くものは順序に注意が必要である。
                // 並び順とは逆順に評価・実行される。
                // つまり下記は、css-loader、style-loaderの順序で実行される。
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
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
            }
        ]
    },
    devServer: {
        contentBase: outputPath
    }
}
