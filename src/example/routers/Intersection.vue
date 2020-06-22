<template>
    <div>
        <div id="a">a</div>
        <div id="b">b</div>
        <div id="c">c</div>
    </div>
</template>

<script>
    /**
     * IntersectionObserver(callback,option):浏览器原生提供的构造函数，接收两个参数：callback是可见性变化的回调函数。option是配置对象，可选；
     *      --返回值是一个观察者实例，实例 【observe】 方法可以置定观察哪个DOM节点
     *          开始观察--  io.observe(document.getElementById('example'));
     *          停止观察--  io.unobserve(element);
     *          关闭观察期- io.disconnect();
     *      --观察多个，需要多次调用observe();
     *      --callback触发两次，一次刚开始进入，另外一次是完全离开视口
     *
     *      --callback返回的结果
     *          time:可见性发生变化
     *          target：被观察的目标文件
     *          rootBounds：根元素的矩形区域的信息
     *          boundingClientRect：目标元素的矩形区域的信息
     *          intersectionRect：目标元素与视口的交叉区域的信息
     *          intersectionRatio: 目标元素的可见比例；完全可见=1；完全不可见《=0；
     */
    export default {
        name: "intersection",
        mounted(){
            const _this = this;
            _this.$nextTick(()=>{
                var io = new IntersectionObserver(
                    entries => {
                        entries.forEach(i => {
                            let target = i.target.innerHTML;
                            let time = i.time;
                            let startTime = _this.recordList.hasOwnProperty(target) ? _this.recordList[target].startTime : '';
                            let endTime = _this.recordList.hasOwnProperty(target) ? _this.recordList[target].endTime : '';
                            let duration = _this.durationList.hasOwnProperty(target) ? _this.durationList[target].duration : 0;

                            if(i.isIntersecting){
                                startTime = time;
                            }else{
                                endTime = time;
                                if(endTime > startTime){
                                    duration += endTime - startTime
                                }
                            }

                            _this.recordList[target] = {startTime:startTime,endTime:endTime,duration:duration};
                            _this.durationList[target] = {duration:duration};

                        });
                    }
                );

                // Start observing an element
                io.observe(document.querySelector('#a'));
                io.observe(document.querySelector('#b'));
                io.observe(document.querySelector('#c'));

                console.warn(io.takeRecords());
            })
        },
        data(){
            return {
                recordList:{},
                durationList:{},
            }
        }
    }
</script>

<style scoped>
    div {
        height: 500px;
        width: 30%;
        margin-bottom: 50px;
    }

    #a {
        background-color: red;
        width:50px;height:50px;
        margin-top:700px;
    }

    #b {
        background-color: black;
        width:50px;height:50px;
        margin-top:500px;
    }

    #c {
        background-color: blue;
        width:50px;height:50px;
        margin-top: 500px;
    }
</style>