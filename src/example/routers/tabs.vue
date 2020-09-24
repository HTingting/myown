<template>
    <div>
        <Tabs value="name1">
            <TabPane label="标签1" name="name1">
                标签内容1
            </TabPane>
            <TabPane label="标签22222222" name="name2">
                标签内容2
            </TabPane>
            <TabPane label="标签333" name="name3">
                标签内容3
            </TabPane>
            <TabPane label="标签4444" name="name4">
                标签内容4
            </TabPane>
            <TabPane label="标签5222" name="name5">
                标签内容5
            </TabPane>
            <TabPane label="标签6777" name="name6">
                标签内容6
            </TabPane>
            <TabPane label="标签7999" name="name7">
                标签内容7
            </TabPane>
            <TabPane label="标签1118" name="name8">
                标签内容8
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