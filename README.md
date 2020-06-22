# myown

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### 使用例子
```
1.默认使用

<PullFresh :refreshing="isRefreshing" :on-refresh="onRefresh" pull-height="400px">  
    <div class="list">
        <ul>
            <li v-for="n in 20">goodsId -- {{n}}</li>
        </ul>
    </div>
</PullFresh>

2.自定义下拉加载，加载完成gif图
<PullFresh :refreshing="isRefreshing" :on-refresh="onRefresh" pull-height="400px">
        <template slot="pulling">
            <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
        </template>
        <template slot="refreshing">
            <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
        </template>
        <div class="list">
            <ul>
                <li v-for="n in 20">goodsId -- {{n}}</li>
            </ul>
        </div>
</PullFresh>
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
