module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1eb09338-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./components/pullFresh/pullFresh.vue?vue&type=template&id=199ad430&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"pullWrap",class:_vm.wrapClasses,style:({height: _vm.pullHeight,transition:_vm.transition,transform:("translateY(" + _vm.moveY + "px)")})},[(!_vm.refreshing)?_c('div',{class:_vm.tipClasses,style:({height: _vm.tipHeight + 'px',lineHeight: _vm.tipHeight + 'px'})},[_vm._t("pulling",[_vm._v(_vm._s(_vm.pullTip))])],2):_c('div',{class:_vm.tipClasses,style:({height:_vm.tipHeight,lineHeight: _vm.tipHeight + 'px'})},[_vm._t("refreshing",[_vm._v(_vm._s(_vm.refreshTip))])],2),_c('div',{ref:"pull-cont",class:_vm.conClasses,on:{"touchstart":_vm.touchstart,"touchmove":_vm.touchmove,"touchend":_vm.touchend}},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pullFresh/pullFresh.vue?vue&type=template&id=199ad430&scoped=true&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./components/pullFresh/pullFresh.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const prefixCls = 'my-fresh';

/* harmony default export */ var pullFreshvue_type_script_lang_js_ = ({
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


});

// CONCATENATED MODULE: ./components/pullFresh/pullFresh.vue?vue&type=script&lang=js&
 /* harmony default export */ var pullFresh_pullFreshvue_type_script_lang_js_ = (pullFreshvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./components/pullFresh/pullFresh.vue





/* normalize component */

var component = normalizeComponent(
  pullFresh_pullFreshvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "199ad430",
  null
  
)

/* harmony default export */ var pullFresh = (component.exports);
// CONCATENATED MODULE: ./components/pullFresh/index.js


pullFresh.install = function (Vue) {
    Vue.component(pullFresh.name, pullFresh)
}
/* harmony default export */ var components_pullFresh = (pullFresh);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1eb09338-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./components/tabs/tabs.vue?vue&type=template&id=fce96282&scoped=true&
var tabsvue_type_template_id_fce96282_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabs"},[_c('div',{class:[_vm.prefixCls + '-bar']},[_c('div',{class:[_vm.prefixCls + '-nav-right']}),_c('div',{class:[_vm.prefixCls + '-nav-container']},[_c('div',{class:[_vm.prefixCls + '-nav-wrap']},[_c('span'),_c('span'),_c('div',{class:[_vm.prefixCls + '-nav-scroll']},[_c('div',{class:[_vm.prefixCls + '-nav']},[_c('div',{class:_vm.barClasses}),_vm._l((_vm.navList),function(item,index){return _c('div',{class:_vm.tabCls(item),on:{"click":function($event){return _vm.handleChange(index)}}},[_vm._v("\n                            "+_vm._s(item.label)+"\n                        ")])})],2)])])])]),_c('div',{class:_vm.contentClasses},[_vm._t("default")],2)])}
var tabsvue_type_template_id_fce96282_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/tabs/tabs.vue?vue&type=template&id=fce96282&scoped=true&

// CONCATENATED MODULE: ./src/utils/assist.js
//判断参数是否是其中之一
function oneOf (value, validList){
    for(let i = 0; i< validList.length; i++){
        if(value === validList[i]){
            return true;
        }
    }
    return false;
}

// Find components downward
function findComponentsDownward(context, componentsName){
    return context.$children.reduce((components, child) => {
        if(child.$options.name === componentsName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentsName);
        return components.concat(foundChilds);
    },[])
}

//Find components upward
function findComponentsUpward(context, componentName) {
    let parents = [];
    const parent = context.$parent;
    if(parent){
        if(parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUpward(parent, componentName));
    }else{
        return [];
    }
}
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./components/tabs/tabs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const tabsvue_type_script_lang_js_prefixCls = 'my-tabs';
/* harmony default export */ var tabsvue_type_script_lang_js_ = ({
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
                `${tabsvue_type_script_lang_js_prefixCls}-bar`
            ]
        },
        //内容class
        contentClasses (){
            return [
                `${tabsvue_type_script_lang_js_prefixCls}-content`,
                {
                    [`${tabsvue_type_script_lang_js_prefixCls}-content-animated`]: this.animated
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
});

// CONCATENATED MODULE: ./components/tabs/tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_tabsvue_type_script_lang_js_ = (tabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/tabs/tabs.vue





/* normalize component */

var tabs_component = normalizeComponent(
  tabs_tabsvue_type_script_lang_js_,
  tabsvue_type_template_id_fce96282_scoped_true_render,
  tabsvue_type_template_id_fce96282_scoped_true_staticRenderFns,
  false,
  null,
  "fce96282",
  null
  
)

/* harmony default export */ var tabs = (tabs_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1eb09338-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./components/tabs/pane.vue?vue&type=template&id=07447980&scoped=true&
var panevue_type_template_id_07447980_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"pane",attrs:{"name":"pane"}},[_vm._t("default")],2)}
var panevue_type_template_id_07447980_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/tabs/pane.vue?vue&type=template&id=07447980&scoped=true&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./components/tabs/pane.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var panevue_type_script_lang_js_ = ({
    name: "TabPane",
    props:{
        name:{
            type: String
        },
        label:{
            type: String,
            default:''
        }
    },
    watch:{
        label() {
            this.updateNav();
        }
    },
    data(){
        return {
            show: false
        }
    },
    mounted(){
        this.updateNav();
    },
    methods:{
        updateNav () {
            this.$parent.updateNav();
        }
    }

});

// CONCATENATED MODULE: ./components/tabs/pane.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_panevue_type_script_lang_js_ = (panevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/tabs/pane.vue





/* normalize component */

var pane_component = normalizeComponent(
  tabs_panevue_type_script_lang_js_,
  panevue_type_template_id_07447980_scoped_true_render,
  panevue_type_template_id_07447980_scoped_true_staticRenderFns,
  false,
  null,
  "07447980",
  null
  
)

/* harmony default export */ var pane = (pane_component.exports);
// CONCATENATED MODULE: ./components/tabs/index.js



tabs.Pane = pane;
/* harmony default export */ var components_tabs = (tabs);
// CONCATENATED MODULE: ./components/index.js



const components = {
    PullFresh: components_pullFresh,
    Tabs: components_tabs,
    TabPane: components_tabs.Pane,
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


/* harmony default export */ var components_0 = ({
    install,
    PullFresh: components_pullFresh,
    Tabs: components_tabs
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components_0);



/***/ })

/******/ });
//# sourceMappingURL=myown.common.js.map