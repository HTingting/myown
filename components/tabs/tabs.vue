<template>
    <div class="tabs">
        <!--标签页标题，这里要用v-for-->
        <div :class="[prefixCls + '-bar']">
            <!--右边固定的内容，比如京东的导航，右侧有固定的模块 【分类】-->
            <div :class="[prefixCls + '-nav-right']"><slot name="extra"></slot></div>
            <div :class="[prefixCls + '-nav-container']">
                <div :class="[prefixCls + '-nav-wrap']">
                    <!--左箭头-->
                    <span :class="[prefixCls + '-nav-prev']" @click="scrollPrev"></span>
                    <!--右箭头-->
                    <span :class="[prefixCls + '-nav-next']" @click="scrollNext"></span>
                    <!--导航nav-->
                    <div :class="[prefixCls + '-nav-scroll']">
                        <div :class="[prefixCls + '-nav']" ref="nav">
                            <!--条的样式-->
                            <div :class="barClasses" ref="line" :style="barStyle"></div>
                            <!--tab的样式-->
                            <div :class="tabCls(item)" :style="tabStyle" v-for="(item,index) in navList" @click="handleChange($event,index)">
                                {{item.label}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--pane 的内容-->
        <div :class="contentClasses" ref="panes">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { findComponentsDownward } from './../../src/utils/assist';
    const prefixCls = 'my-tabs';
    export default {
        name: "Tabs",
        props:{
            color: String,                  //颜色设置
            sticky: Boolean,                //是否开启粘性布局
            animated: Boolean,              //是否开启转场动画
            swipeable: Boolean,             //是否开启手势滑动
            scrollspy: Boolean,             //是否开启滚动导航：好炫酷的样子
            offsetTop: {                    //粘性定位布局下与顶部的最小距离
                type: [Number, String],
                default: 0,
            },
            background:String,              //标签栏背景色
            duration: Number | String,      //动画时间，单位秒
            type: String,                   //样式风格类型，可选值为card
            ellipsis: Boolean,              //是否省略过长的标题文字
            titleActiveColor: String,       //标题选中态颜色
            titleInactiveColor: String,     //标题默认态颜色
            value:{
                type: [String, Number],
            },
            swipeThreshold:{
                type: String | Number,
                default: 4,
            },
        },
        watch:{
            value(newVal){
                this.currentValue = newVal;
            },
            currentValue(){
                //当前tab变化时，更新pane显示状态
                this.updateStatus();
            }
        },
        computed:{
            barClasses(){
                return [
                    `${prefixCls}-ink-bar`,
                    {
                        [`${prefixCls}-ink-bar-animated`]: this.animated
                    }
                ];
            },
            //内容class
            contentClasses (){
                return [
                    `${prefixCls}-content`,
                    {
                        [`${prefixCls}-content-animated`]: this.animated
                    }
                ]
            },
            tabStyle(){
                let clientWidth = document.documentElement.offsetWidth;
                let style = {
                    width: `${ clientWidth/ this.swipeThreshold}px`,
                    flexShrink: '0'
                };
                return style;
            },
            barStyle () {
                let style = {
                    width: `${this.barWidth}px`
                };
                /**
                 * transform: translateX(45px) translateX(-50%);
                 transition-duration: 0.3s;
                 */
                style.transform = `translate3d(${this.barOffset}px, 0px, 0px)`;
                style.transitionDuration = '0.3s';

                return style;
            },

        },
        data(){
            return {
                //业务数据
                navList:[],
                currentValue: this.value,
                prefixCls:prefixCls,  //注意啊，常量不能直接在视图中使用啊。要重新在data里面赋值
                barWidth:0,
                barOffset:0,
                showMove:0,  //应该移动
            }
        },
        methods:{
            /**
            * 设置当前active的class
            */
            tabCls(item){
                return [
                    `${prefixCls}-tab`,
                    {
                        [`${prefixCls}-tab-disabled`]: item.disabled,
                        [`${prefixCls}-tab-active`]: item.name === this.currentValue,
                        [`${prefixCls}-tab-focused`]: item.name === this.focusedKey,
                        [`${prefixCls}-tab-${this.swipeThreshold}`] : this.swipeThreshold
                    }
                ];
            },

            /**
            * 获取tabs,
            * 通过 $options,获取在选项中自定义property时用到
            */
            getTabs(){
                /*return this.$children.filter(function (item) {
                    return item.$options.name === 'TabPane';
                })*/
                const AllTabPanes = findComponentsDownward(this, 'TabPane');
                const TabPanes = [];

                AllTabPanes.forEach(item =>{
                    //不太理解这一步
                    if(item.tab && this.name){
                        if(item.tab === this.name){
                            TabPanes.push(item);
                        }
                    }else{
                        TabPanes.push(item);
                    }
                });
                // 在 TabPane 使用 v-if 时，并不会按照预先的顺序渲染，这时可设置 index，并从小到大排序
                TabPanes.sort((a, b) => {
                    if (a.index && b.index) {
                        return a.index > b.index ? 1 : -1;
                    }
                });
                return TabPanes;
            },

            /**
             * 点击tab栏切换
             * 1.获取点击的tab信息
             * 2.获取tab的name
             * 3.重新updateStatus? 不是
             *   这一步应该是触发点击事件
             * 4.移动端，要设置样式点击的tab的nav居中，这里需要优化
             * 5.设置样式
             */
            handleChange(e,index){
                //console.log(e);
                var nav = this.navList[index];
                var name = nav.name;
                this.currentValue = name;
                //vue 再父子组件传值时，除了传统的父组件 ：属性去传值外，还可以使用 父组件v-model传值，子组件props[‘value’]接收
                this.$emit('input', name);
                this.$emit('on-click', name);

                //设置样式
                this.setNavCenter(e);
            },

            /**
             * 点击tab栏居中显示
             * 通过设置nav的scrollLeft来更新样式
             */
            setNavCenter(e){
                //设置样式
                let targetWidth = e.target.offsetWidth;
                let leftWidth = e.target.offsetLeft;
                let navWidth = this.$refs.nav.offsetWidth;
                let shouldLeftWidth = navWidth / 2 - targetWidth / 2;
                this.shouldMove = leftWidth - shouldLeftWidth;
                console.log(this.shouldMove);
                this.$refs.nav.scrollLeft = this.shouldMove;

                //发现不能这么设置line的样式 todo
                //console.log(this.$refs.line);
                /*this.$refs.line.style.transform = `translateX(${this.showMove}px) translateX(-50%)`;
                this.$refs.line.style.transitionDuration = '0.3s';*/
            },

            /**
             * 更新page的状态
             * 1.获取所有的pane
             * 2，遍历pane，若pane.name == currentValue,为true;否则为false
             */
            updateStatus(){
                var tabs = this.getTabs();
                var _this = this;

                tabs.forEach(tab => {
                    return tab.show = tab.name === _this.currentValue;
                })
            },

            /**
             * 更新navList
             * 1.获取pane列表
             * 2.遍历列表，往navList里面塞入name和label，如果没有默认的name值，就是默认设置为下标
             * 3.如果下标为0，并且currentValue也为0，需要设置默认的name.
             */
             updateNav() {
                this.navList = [];
                const _this = this;

                _this.getTabs().forEach(function(pane,index){
                    _this.navList.push({
                        label: pane.label,
                        name: pane.name || index
                    });
                    if(!pane.name) pane.name = index;
                    if(index === 0){
                        if(!_this.currentValue){
                            _this.currentValue = pane.name || index;
                        }
                    }
                });
                _this.updateStatus();
                this.updateBar();
             },

            /**
             * 设置样式
             * 1.获取
             */
            updateBar(){
                this.$nextTick(() => {
                    const index = this.getTabIndex(this.currentValue);
                    if (!this.$refs.nav) return;  // 页面销毁时，这里会报错，为了解决 #2100
                    const prevTabs = this.$refs.nav.querySelectorAll(`.${prefixCls}-tab`);
                    const tab = prevTabs[index];
                    console.log(tab);
                    this.barWidth = tab ? parseFloat(tab.offsetWidth) : 0;

                    if (index > 0) {
                        let offset = 0;
                        for (let i = 0; i < index; i++) {
                            offset += parseFloat(prevTabs[i].offsetWidth);
                        }
                        this.barOffset = offset;
                    } else {
                        this.barOffset = 0;
                    }
                    console.log(this.barOffset);
                });
            },

            /**
             * 根据name返回nav的下标
             */
            getTabIndex(name){
                return this.navList.findIndex(nav => nav.name === name);
            },

            /**
             * 向前滚动
             */
            scrollPrev(){

            },

            /**
             * 向后滚动
             */
            scrollNext(){

            },



        }
    }
</script>

<style scoped>

</style>