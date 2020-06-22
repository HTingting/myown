<template>
    <div class="tabs">
        <!--标签页标题，这里要用v-for-->
        <div :class="[prefixCls + '-bar']">
            <div :class="tabCls(item)"
                v-for="(item,index) in navList"
                @click="handleChange(index)">
                {{item.label}}
            </div>
        </div>
        <!--pane 的内容-->
        <div :class="contentClasses">
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
            duration: Number | String,     //动画时间，单位秒
            type: String,                   //样式风格类型，可选值为card
            ellipsis: Boolean,              //是否省略过长的标题文字
            titleActiveColor: String,       //标题选中态颜色
            titleInactiveColor: String,     //标题默认态颜色
            value:{
                type: String | Number,
            }
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
                    `${prefixCls}-bar`
                ]
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

        },
        data(){
            return {
                //业务数据
                navList:[],
                currentValue: this.value,
            }
        },
        methods:{
            /**
            * 设置当前active的class
            */
            tabCls(item){
                return [
                    'tabs-tab',
                    {
                        //给当前选中的tab加一个class
                        'tabs-tab-active': item.name === this.currentValue
                    }
                ]
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
                //console.log('最后得到的tabpanes',TabPanes);
                return TabPanes;
            },

            /**
             * 点击tab栏切换
             * 1.获取点击的tab信息
             * 2.获取tab的name
             * 3.重新updateStatus? 不是
             *   这一步应该是触发点击事件
             *
             */
            handleChange(index){
                var nav = this.navList[index];
                var name = nav.name;
                this.currentValue = name;
                //vue 再父子组件传值时，除了传统的父组件 ：属性去传值外，还可以使用 父组件v-model传值，子组件props[‘value’]接收
                this.$emit('input', name);
                this.$emit('on-click', name);
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
             }

        }
    }
</script>

<style scoped>

</style>