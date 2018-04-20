import Mock from 'mockjs'
Mock.mock(/getNewsList/, {
    'list|5': [
        {
            url: 'https:www.baidu.com',
            title:'hello'
        }
    ]
})