import request from '../utils/request2'

// 具体地址
export function wordCloud() {
  return request({
    url: '/screen/wordcloud',
    // get请求
    method: 'get'
    // params:{
    //   a:1
    // }
    // post请求
    // method:'post',
    // data:{
    //   a:1
    // }
  })
}
export function mapScatter() {
  return request({
    url: '/screen/map/scatter',
    methods: 'get'
  })
}

export function screenData() {
  return request({
    url: '/screen/data',
    methods: 'get'
  })
}

export function mapData() {
  return request({
    url: '/screen/map',
    methods: 'get'
  })
}
