<template>
    <Dragger v-if="data.length"
             @updateCols="updateCols"
             :tableCols="data"
             v-slot="item">
        <div class="drag-item">
            {{item.title}}
        </div>
    </Dragger>
</template>

<script>
    export default {
        name: "",
        data(){
            return {
                data:[
                    {title:'test1'},
                    {title:'test2'},
                    {title:'test3'}
                ],
            }
        },
        methods:{
            updateCols(){}
        }
    }
</script>

<style scoped>

</style>