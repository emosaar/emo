(function () {

    let data = {
        menu: [
            {
                h1: '食物選單',
                text: 'Jquery'
            },
            {
                h1: '部落格首頁',
                text: '版面'
            },
            {
                h1: '圖片選單',
                text: 'clip-path & picsum'
            },
            {
                h1: '稀飯版',
                text: 'Bootstrap'
            },
        ]
    }

    let vm = new Vue({
        el: 'main',
        data: data
    })

})();