import PullFresh from './pullFresh/index.js';
import Tabs from './tabs/index.js';

const components = {
    PullFresh,
    Tabs: Tabs,
    TabPane: Tabs.Pane,
}

const myOwn = {
    ...components
}


const install = function (Vue){
    //判断是否安装
    if (install.installed) return;
    // 遍历注册全局组件
    Object.keys(myOwn).forEach(key => {
        Vue.component(key, myOwn[key])
    });
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


export default {
    install,
    PullFresh,
    Tabs
}
