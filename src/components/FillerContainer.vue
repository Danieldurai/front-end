<template>
    <div id="filler-container-styles">
        <div class="grid grid-nogutters grid-container">
            <FillerComponent class="lg:col-4 md:col-12" v-for="item,index in items" :key="index" :itemImage="item.image" :title="item.title" :paragraph="item.paragraph"></FillerComponent>
        </div>
    </div>
</template>

<script>
import FillerComponent from './FillerComponent.vue';
export default{
    name:"fillerContainer",
    data(){
        return{
            items : [{image : 'pi pi-truck', title : "Lorem Ipsum", paragraph : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},
            {image : 'pi pi-box', title : "Lorem Ipsum", paragraph : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},
            {image : "pi pi-inbox", title : "Lorem Ipsum", paragraph : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"}]
        }
    },
    components:{
        FillerComponent
    }
}
</script>