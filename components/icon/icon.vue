<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
    /**
     * icon组件应该包含属性：
     *  类型（名称）
     *      看使用的是什么icon库，iview是使用ionic的icon库。源码放在src/styles/common/iconfont/fonts里面；同样
     *      如果使用阿里云的iconfont的话，也是这么做
     *  大小，
     *  颜色，
     *  自定义class
     */

    const prefixCls = 'my-icon';

    export default {
        name: "Icon",
        props:{
            type: {
                type: String,
                default: '',
            },
            //可能多个类型
            size: [Number,String],
            color: String,
            custom: {
                type: String,
                default: ''
            }
        },
        computed:{
            classes (){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`] : this.type !== '',
                        [`${this.custom}`] : this.custom !== '',
                    }
                ];
            },
            styles() {
                let style = {};

                if(this.size){
                    style['font-size'] = `${this.size}px`;
                }

                if(this.color){
                    style['color'] = this.color;
                }

                return style;
            }
        },
        data(){
            return {

            }
        },
        methods:{
            handleClick (event) {
                this.$emit('click' , event);
            }
        },
    }
</script>

<style scoped>

</style>