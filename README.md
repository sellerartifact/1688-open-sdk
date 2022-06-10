## 1688-open-sdk 
1688开放平台node sdk，因官方没有提供node版本sdk，因此提供非官方版，希望对大家有用，欢迎issue和pr。

<p align="center">
     <a href="https://travis-ci.org/wangjue666/1688-open-sdk"><img src="https://travis-ci.org/wangjue666/1688-open-sdk.svg?branch=master" /></a>
     <a href="https://codecov.io/gh/wangjue666/1688-open-sdk"><img src="https://codecov.io/gh/wangjue666/1688-open-sdk/branch/master/graph/badge.svg" /></a>
    <a href="https://npmcharts.com/compare/1688-open-sdk?minimal=true" rel="nofollow"><img src="https://img.shields.io/npm/dm/1688-open-sdk.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/1688-open-sdk" rel="nofollow"><img src="https://img.shields.io/npm/v/1688-open-sdk.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/1688-open-sdk" rel="nofollow"><img src="https://img.shields.io/npm/l/1688-open-sdk.svg?style=flat" style="max-width:100%;"></a>
</p>

[1688开放平台](https://open.1688.com/)


#### 安装
使用npm:
```
npm i 1688-open-sdk -S
```
或者yarn:
```
yarn add 1688-open-sdk
```

#### 引入文件
```
import ApiExecutor from "1688-open-sdk"

或者

const ApiExecutor = require("1688-open-sdk")
```



#### 配置
使用1688开放平台的appkey，appsecret进行初始化:
```
const apiExecutor = new ApiExecutor(process.env.APPKEY, process.env.APPSECRET)
```


#### API

// 使用refreshToken更新AccessToken

```
const {access_token} = await apiExecutor.refreshToken2AccessToken(refresh_token)
```

例如 跨境产品以图搜图： 
```
apiExecutor.execute(
    'com.alibaba.linkplus/alibaba.cross.similar.offer.search',
    {
        picUrl:'https://img.alicdn.com/imgextra/i1/O1CN01PwAoB21LuSuZE9Oqx_!!6000000001359-2-tps-1170-597.png',
        page: 1
    },
    access_token
)
```
注意调用api返回的都是promise，因此可使用async/await。