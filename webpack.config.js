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
    devServer: {
        contentBase: outputPath
    }
}
