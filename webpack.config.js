var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js', //!script для ігнорування файлу лоадером
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx',
    ],
    externals: { // ключ - ім'я модуля, значення - ім'я змінної, через яку цей модуль буде доступним у наших external script files
        jquery: 'jQuery', // потрібно для Foundation
    },
    plugins: [ //
        new webpack.ProvidePlugin({ // ключ - ім'я змінної, за якою слідкувати, значення - їм'я модуля, який завантажити і яким цю змінну замінити, якщо вона не оголошена раніше.
            '$': 'jquery',
            'jQuery' : 'jqury',
        }),
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },
    resolve: {
        root: __dirname,
        alias: {
          Main: 'app/components/Main.jsx',
          Nav:  'app/components/Nav.jsx',
          Weather:  'app/components/Weather.jsx',
          WeatherForm:  'app/components/WeatherForm.jsx',
          WeatherMessage:  'app/components/WeatherMessage.jsx',
          About:  'app/components/About.jsx',
          Examples:  'app/components/Examples.jsx',
          openWeatherMap: 'app/api/openWeatherMap.jsx',
          ErrorModal: 'app/components/ErrorModal.jsx',
          appStyles: 'app/styles/app.css',

        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                },
                test: /\.jsx?$/,
                exclue: /(node_modules|bower_components)/,
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
};
