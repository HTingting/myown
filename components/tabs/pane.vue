<template>
    <div class="pane" v-show="show" name="pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
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

    }
</script>

<style scoped>

</style>