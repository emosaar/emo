(function () {
    let data = {
        menu: [
            {
                area: '北部',
                county: [
                    '台北', '新北', '基隆', '桃園', '新竹', '宜蘭'
                ]
            },
            {
                area: '中部',
                county: [
                    '台中', '苗栗', '彰化', '南投', '雲林'
                ]
            },
            {
                area: '南部',
                county: [
                    '台南', '嘉義', '高雄', '屏東', '澎湖'
                ]
            },
            {
                area: '東部',
                county: [
                    '台東', '花蓮'
                ]
            },
            {
                area: '外島',
                county: [
                    '金門', '連江'
                ]
            },
        ]
    }

    let vm = new Vue({
        el: 'main',
        data: data
    })
})();