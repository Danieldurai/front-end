<template>
    <div id="pricing-container-style">
        <h1>PRICING</h1>
        <div class="grid grid-nogutters grid-container">
            <div v-for="data,index in pricingData" :key="index" class="lg:col-4 col-12 ">
                <PricingComponent :plan="data.plan" :price="data.price" :access="data.access" :active="data.active"></PricingComponent>
            </div>
        </div>
    </div>
</template>

<script>
    import PricingComponent from './PricingComponent.vue';
    export default{
        name : "pricingContainer",
        data(){
            return{
                pricingData : [{plan : "Free Plan", price : 0, access:{ first : true, second : true, third: true, fourth: false, fifth: false},active: false},
                                {plan : "Business Plan", price : 29, access:{ first : true, second : true, third: true, fourth: true, fifth: true},active:true},
                                {plan : "Developer Plan", price : 46, access:{ first : true, second : true, third: true, fourth: true, fifth: true}, active: false}
                            ]
            }
        },
        components:{
            PricingComponent
        }
    }
</script>

