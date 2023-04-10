const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    /*
    Entrada onde o webpack vai pegar os dados para enpacotamento.
    Sempre vai ser o Arquivo onde está root.render.
    */
    entry: path.resolve(__dirname, 'src','index.js'),
    /*
        Onde o webpack vai guardar o bundle gerado
    */
    output:{
        path: path.resolve(__dirname,'build'),
        filename: 'bundle[contenthash].js'
    },
    plugins:[
        /*
            Gera o arquivo html de public, no caso o html root e
            ja escreve o bundle nele sem precisar fazer manual.
            Esse bundle é gerado um a cada build
        */
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html')
        }),
        /*
            Limpa os arquivos sem uso ,gerados no build.
            No caso os bundles antigos.
        */
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            /*
                Para todo arquivo .js ele vai transpilar no caso
                utilizando o babel-loader faz a função do build
                do babel automatico.
            */
            {
                test:/\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            /*
                para o webpack entender arquivos css.
            */
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test:/\.svg$/,
                use: 'svg-url-loader'
            }
        ]
    },
    devServer:{
        port:3001
    }

}
