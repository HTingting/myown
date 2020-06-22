<template>
    <div class="pullPage">
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
    </div>
</template>

<script>
    export default {
        name: 'Example',
        data() {
            return {
                isRefreshing: false
            }
        },
        methods: {
            onRefresh() {
                const _this = this;
                _this.isRefreshing = true;
                setTimeout(() => {
                    _this.isRefreshing = false;
                }, 5000)
            }
        }
    }
</script>

<style scoped>
    .pullPage{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        background: #fff;
    }
    ul {
        margin-top: 0;
    }
    button {
        border: 0;
        background-color: #ff4f4f;
        color: white;
        padding: 5px 10px;
        display: block;
        margin: 20px auto;
    }
    .list {
        width: 100%;
        background-color: white;
        overflow: hidden;
    }
    .doge {
        width: 140px;
        height: 72px;
        margin-top: 8px;
        border-radius: 4px;
    }
</style>