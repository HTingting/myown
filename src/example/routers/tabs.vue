<template>
    <div>
        <Tabs value="name1">
            <TabPane label="标签1" name="name1">
                标签内容1
            </TabPane>
            <TabPane label="标签2" name="name2">
                标签内容2
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    import Tabs from './../../../components/index.js';
    import Vue from 'vue';
    Vue.use(Tabs);

    export default {
        name: "tabs"
    }
</script>

<style scoped>

</style>