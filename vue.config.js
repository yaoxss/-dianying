module.exports = {
    // 静态资源路径
    publicPath: '/miaomiao',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.97.33.178',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
}