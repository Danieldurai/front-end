<template>
    <div id="card-container-style">
        <h1>OUR SERVICES</h1>
        <div class="grid grid-nogutters grid-container">
            <div v-for="datum,index in cardData" :key="index" class="sm:col-12 md:col-6 lg:col-4">
                <CardComponent  :imageLocation="datum.imagePath" :title="datum.title" class="card-wrapper"> </CardComponent>
            </div>
        </div>
    </div>
</template>

<script>
import CardComponent from "../components/CustomCard.vue"
export default{
    name:"cardContainer",
    components:{
        CardComponent
    },
    data(){
        return{
            cardData : [{imagePath : require('@/assets/img/storage-service.jpg'), title: "STORAGE"},
                        {imagePath : require('@/assets/img/logistics-service.jpg'), title: "LOGISTICS"},
                        {imagePath : require('@/assets/img/cargo-service.jpg'), title: "CARGO"},
                        {imagePath : require('@/assets/img/trucking-service.jpg'), title: "TRUCKING"},
                        {imagePath : require('@/assets/img/packaging-service.jpg'), title: "PACKAGING"},
                        {imagePath : require('@/assets/img/warehousing-service.jpg'), title: "WAREHOUSING"}]
        }
    }
}
</script>

<style scoped>


</style>