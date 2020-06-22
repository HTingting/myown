<template>
    <div :class="wrapClasses" ref="pullWrap" :style="{height: pullHeight,transition:transition,transform:`translateY(${moveY}px)`}">
        <!--刷新头部-->
        <div :class="tipClasses" :style="{height: tipHeight + 'px',lineHeight: tipHeight + 'px'}" v-if="!refreshing">
            <slot name="pulling">{{pullTip}}</slot>
        </div>
        <div :class="tipClasses" :style="{height:tipHeight,lineHeight: tipHeight + 'px'}" v-else>
            <slot name="refreshing">{{refreshTip}}</slot>
        </div>
        <!--刷新内容-->
        <div :class="conClasses" ref="pull-cont"
                @touchstart="touchstart"
                @touchmove="touchmove"
                @touchend="touchend"
             >
            <slot></slot>
        </div>
    </div>
</template>

<script>
    const prefixCls = 'my-fresh';

    export default {
        name: "PullFresh",
        props:{
            refreshing:{
                type:Boolean,
                default: false
            },
            onRefresh:{
                type: Function,
                default: function(){
                }
            },
            tipHeight:{
                type:String,
                default:'80'
            },
            pullHeight:{
                type:String,
                default: "auto"
            },
            pullTip:{
                type:String,
                default:'下拉即可刷新',
            },
            refreshTip:{
                type:String,
                default: '正在刷新…'
            }
        },
        computed:{
            wrapClasses(){
                return  `${prefixCls}`;
            },
            tipClasses(){
                return `${prefixCls}-tip`;
            },
            conClasses(){
                return `${prefixCls}-cont`;
            },
            //获取可滑动容器高度
            getWrapHeight: function(){
                return parseFloat(getComputedStyle(document.querySelector(`.${prefixCls}`)).height);
            }
        },
        watch:{
            refreshing: function(nv,ov){
                if(!nv && ov){
                    this.clientY = 0;
                    this.moveY = 0;
                    this.transition = "all 0.2s";
                }else if(nv && !ov) {
                    this.moveY = this.tipHeight;
                    this.disabled = true;
                }
            }
        },
        data(){
            return {
                clientY:0,
                moveY:0,
                disabled:false,
                arrowDeg: 0,
                transition:'all 0.2s'
            }
        },
        methods:{
            touchstart(e){
                if(this.$refs.pullWrap.scrollTop > 0) {
                    this.disabled = true;
                }else{
                    this.transition = 'all 0s';
                    this.clientY = e.touches[0].clientY;
                }
            },

            touchmove(e){
                //获取滑动后手指的y坐标,移动后的y坐标-触摸时的y坐标
                let moveY = e.touches[0].clientY - this.clientY;
                if(!this.disabled && moveY > 0){
                    e.preventDefault();
                    this.moveY = moveY;
                    /*this.tipHeight = moveY;*/
                }

            },

            touchend(){
                //获取下拉元素的top值
                /* const wrapHeight = this.getWrapHeight;*/
                if(this.moveY >= this.tipHeight) {
                    this.moveY = this.tipHeight;
                    this.transition = "all 0.2s";
                    this.disabled = true;
                    this.onRefresh && this.onRefresh();
                }else{
                    this.moveY = 0;
                    this.disabled = false;
                }
            }
        }


    }
</script>

<style scoped>

</style>