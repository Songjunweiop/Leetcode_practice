const getUrlParam = (sUrl, sKey) => {
  if (sKey) {
    var url = sUrl.split('?')[1].split("&")
    var values = []
    var lastKey = ''
    var firstValue = ''
    console.log(url)
    console.log('-------------------------------')
    const aaa = url.reduce((resault, curitem) => {
      const [key, value] = curitem.split("=")

      console.log(curitem.split("="))
      if (lastKey === key) {
        if (values.length === 0) {
          values.push(firstValue)
        }
        values.push(value)
        resault[key] = values
      } else {
        values = []
        resault[key] = value
        firstValue = value
      }
      lastKey = key
      console.log('-------------------------------')
      return resault
    }, {})
    // console.log(aaa)
    console.log(aaa[sKey] ? aaa[sKey] : [])
    return aaa[sKey] ? aaa[sKey] : ''
  }else{
    return '{}'
  }
}

// const banny = (queryString, queryKey) => {
//   queryString = queryString || window.location.search
//   const queries = queryString.substring(1).split('&').reduce((result, query) => {
//     const [key, value] = query.split('=')
//     result[key] = value
//     return result
//   }, {})
//   console.log(queryKey ? queries[queryKey] : queries) 
// }

getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4&test=5', 'key')
// banny('?key=1&key=2&key=3&test=4#hehe', "key")