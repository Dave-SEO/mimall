module.exports = {
    devServer:{
        host: 'localhost',
        prot: 8080,
        proxy:{
            '/proxy':{
                'target': 'http://localhost:8081',
                'changeOrigin': false, // 是否将主机头改为目标的url地址
                'pathRewrite': { // 转发地址
                    '/proxy': 'proxy.json'
                }
            },
            '/authors': {
                'target': 'http://localhost:8081',
                'pathRewrite': {
                    '/authors': 'authors.json'
                }
            }
        }
    }
}