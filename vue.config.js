const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
    publicPath: "/",
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                routes: [
                    '/',
                    '/about',
                    '/techs',
                    '/projects',
                    '/post'
                ],
            })
        ]
    },
    chainWebpack: config => {
        config.module.rules.delete('eslint')
    }
}