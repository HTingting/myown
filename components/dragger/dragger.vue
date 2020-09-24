<template>
    <div ref="dragger">
        <ul id="container" v-if="dataList">
            <li class="ele" draggable="true" v-for="(item) in dataList">
                <!--<slot v-bind="item" name="dragger-content"></slot>-->
                <slot v-bind="item"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Dragger",
        data(){
            return {
                dataList:[],
                copyDataList: [],
            }
        },
        created(){
            //注意不能直接赋值，否则数据渲染列表会有问题
            this.dataList = JSON.parse(JSON.stringify(this.tableCols));
            this.copyDataList = JSON.parse(JSON.stringify(this.tableCols));
        },
        props:['tableCols'],
        computed:{
        },
        mounted(){
            var node = document.querySelector("#container");
            var draging = null;
            var that = this;
            //使用事件委托，将li的事件委托给ul
            node.ondragstart = function(event) {
                //event.preventDefault();
                //firefox设置了setData后元素才能拖动！！！！
                event.dataTransfer.setData("te", event.target.innerText); //不能使用text，firefox会打开新tab
                draging = event.target;
            }
            node.ondragover = function(event) {
                event.preventDefault();
                var target = event.target;
                //因为dragover会发生在ul上，所以要判断是不是li
                if (target.nodeName === "LI") {
                    if (target !== draging) {
                        var targetRect = target.getBoundingClientRect();
                        var dragingRect = draging.getBoundingClientRect();
                        if (target) {
                            if (target.animated) {
                                return;
                            }
                        }

                        let dragingIndex = that._index(draging);
                        let targetIndex = that._index(target);
                        if (dragingIndex < targetIndex) {
                            target.parentNode.insertBefore(draging, target.nextSibling);
                            //console.log('检测下标-----dragging index 笑的------',targetIndex,dragingIndex);

                        } else {
                            target.parentNode.insertBefore(draging, target);
                            //console.log('检测下标++++dragging index 大的++++++',targetIndex,dragingIndex);
                        }
                        that._insertByIndex(that.copyDataList,targetIndex,dragingIndex);

                        that._animate(dragingRect, draging);
                        that._animate(targetRect, target);
                        that.$emit('updateColsData',that.copyDataList);
                    }
                }
            }
        },
        methods:{
            _insertByIndex(arr,insertTargetIndex,index){
                let temp = arr[index];
                //先删除
                arr.splice(index,1);
                //然后添加
                arr.splice(insertTargetIndex, 0, temp);
                return arr;
            },

            _index(el) {
                var index = 0;

                if (!el || !el.parentNode) {
                    return -1;
                }

                while (el && (el = el.previousElementSibling)) {
                    //console.log(el);
                    index++;
                }

                return index;
            },

            _animate(prevRect, target) {
                const that = this;
                var ms = 300;

                if (ms) {
                    var currentRect = target.getBoundingClientRect();

                    if (prevRect.nodeType === 1) {
                        prevRect = prevRect.getBoundingClientRect();
                    }

                    that._css(target, 'transition', 'none');
                    that._css(target, 'transform', 'translate3d(' +
                        (prevRect.left - currentRect.left) + 'px,' +
                        (prevRect.top - currentRect.top) + 'px,0)'
                    );

                    // console.log('样式变化1——',target);

                    target.offsetWidth; // 触发重绘
                    //放在timeout里面也可以
                    // setTimeout(function() {
                    //     _css(target, 'transition', 'all ' + ms + 'ms');
                    //     _css(target, 'transform', 'translate3d(0,0,0)');
                    // }, 0);
                    that._css(target, 'transition', 'all ' + ms + 'ms');
                    that._css(target, 'transform', 'translate3d(0,0,0)');

                    //console.log('样式变化2——',target);

                    clearTimeout(target.animated);
                    target.animated = setTimeout(function() {
                        that._css(target, 'transition', '');
                        that._css(target, 'transform', '');
                        target.animated = false;
                    }, ms);
                }
            },

            _css(el, prop, val) {
                var style = el && el.style;

                if (style) {
                    if (val === void 0) {
                        if (document.defaultView && document.defaultView.getComputedStyle) {
                            val = document.defaultView.getComputedStyle(el, '');
                        } else if (el.currentStyle) {
                            val = el.currentStyle;
                        }

                        return prop === void 0 ? val : val[prop];
                    } else {
                        if (!(prop in style)) {
                            prop = '-webkit-' + prop;
                        }

                        style[prop] = val + (typeof val === 'string' ? '' : 'px');
                    }
                }
            },
        }



    }
</script>

<style scoped>
    ul {
        list-style: none;
    }

    .ele {
        cursor: move;
        position : relative;
        box-sizing: border-box;
    }
    .ele * {
        pointer-events: none;
    }
    /deep/.ant-checkbox-input{
        pointer-events: initial !important;
    }
    .footer{
        text-align: center;
        margin-top:10px;
    }
    .ele:hover{
        border: 1px dashed dodgerblue;
    }
    /*.ele:hover .action-bar{
        display:block;
    }*/
    .action-bar{
        display: none;
        position: absolute;
        top: 0;
        right: 0;
    }
    .action-bar span{
        display: inline-block;
        width: 40px;height: 20px;line-height: 20px;
        text-align: center;
        margin:5px;
    }
</style>