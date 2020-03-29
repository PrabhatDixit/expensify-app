//specify entrypoint -> final output file
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test'){
    

}else if (process.env.NODE_ENV === 'development'){
    require('dotenv').config({path:'.env.development'});
}

module.exports = (env) => {

    const isProduction = env === "production"
    const CSSExtract = new ExtractTextPlugin('styles.css')
    console.log('env', env)

    return {
        entry: ['babel-polyfill','./src/app.js'],
        output: {
            path:path.join(__dirname,"public","dist"),
            filename:'bundle.js'
        },
        module:{
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude:/node_modules/
            }, {
                test:/\.s?css$/, //support both css and scss
                //use: ['style-loader','css-loader', 'sass-loader']
                use: CSSExtract.extract({
                    use:[
                            {
                                loader:'css-loader',
                                options: {sourceMap:true}
                            },
                            {
                                loader:'sass-loader',
                                options: {sourceMap:true}
                            }
                        ]
                })
            }

        
        ]
        }, 
        plugins:[CSSExtract,
                 new webpack.DefinePlugin({
                     'process.env.FIREBASE_apiKey': JSON.stringify(process.env.FIREBASE_apiKey),
                     'process.env.FIREBASE_authDomain': JSON.stringify(process.env.FIREBASE_authDomain),
                     'process.env.FIREBASE_databaseURL': JSON.stringify(process.env.FIREBASE_databaseURL),
                     'process.env.FIREBASE_projectId': JSON.stringify(process.env.FIREBASE_projectId),
                     'process.env.FIREBASE_storageBucket': JSON.stringify(process.env.FIREBASE_storageBucket),
                     'process.env.FIREBASE_messagingSenderId': JSON.stringify(process.env.FIREBASE_messagingSenderId),

                 })
                ],

        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer:{
            contentBase:path.join(__dirname,"public"),
            historyApiFallback: true,
            publicPath: '/dist/'
        }

    }
}