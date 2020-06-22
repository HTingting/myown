<template>
    <transition name="fade">
        <div v-if="!closed" :class="wrapClasses">
            <!--标题前面的icon图标-->
            <span :class="iconClasses" v-if="showIcon">
                <slot name="icon">
                    <Icon :type="iconType"></Icon>
                </slot>
            </span>
            <!--标题-->
            <span :class="messageClasses"><slot></slot></span>
            <!--描述-->
            <span :class="descClasses"><slot name="desc"></slot></span>
            <!--关闭按钮-->
            <a :class="closeClasses" v-if="closable" @click="close">
                <slot name="close">
                    <Icon type="ios-close"></Icon>
                </slot>
            </a>
        </div>
    </transition>
</template>

<script>
    /**
     * alert 组件应该包含属性：消息类型，可关闭，icon展示，是否置顶
     */
    import Icon from '../icon';
    import { oneOf } from './../../src/utils/assist';

    const prefixCls = 'my-alert';

    export default {
        name: 'Alert',
        components:{
            Icon
        },
        props: {
            type:{
                //自定义验证函数
                validator(value) {
                    return oneOf(value, ['success', 'info', 'warning', 'error']);
                },
                default: 'info'
            },
            closable:{
                type: Boolean,
                default: false,
            },
            showIcon:{
                type: Boolean,
                default: false,
            },
            banner:{
                type: Boolean,
                default: false
            }
        },
        computed:{
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-with-icon`]: this.showIcon,
                        [`${prefixCls}-width-desc`]: this.desc,
                        [`${prefixCls}-width-banner`]: this.banner
                    }
                ]
            },
            messageClasses() {
                return `${prefixCls}-message`;
            },
            descClasses(){
                return `${prefixCls}-desc`;
            },
            closeClasses(){
                return `${prefixCls}-close`;
            },
            iconClasses(){
                return `${prefixCls}-icon`;
            },
            iconType() {
                let type = '';

                switch(this.type) {
                    case 'success':
                        type = 'ios-checkmark-circle';
                        break;
                    case 'info':
                        type = 'ios-information-circle';
                        break;
                    case 'warning':
                        type = 'ios-alert';
                        break;
                    case 'error':
                        type = 'ios-close-circle';
                        break;
                }

                if(this.desc) type += '-outline';
                return type;
            }
        },
        data(){
            return {
                closed: false,
                desc: false
            }
        },
        methods:{
            close(e){
                this.closed = true;
                this.$emit('on-close',e);
            }
        },
        mounted(){
            this.desc = this.$slots.desc !== undefined;
        }
    }
</script>

<style scoped>

</style>