<template>
    <div id="pricing-component-styles">
        <Card>
            <template #header>
                <h3>{{ plan }}</h3>
            </template>
            <template #title>
                <div class="price-per-month">
                    <h3 class="dolar-sign">$</h3>
                    <h1>{{ price }}</h1>
                    <h5>/month</h5>
                </div>
            </template>
           
            <template #content>
               <ul>
                    <li><span><i v-show="!access.first" class="pi pi-times"></i><img v-show="access.first"  src="../assets/img/check-mark.png" class="check-mark-image"></span> <span :class="!access.first ? 'strike-text' : 'inactive-class'">Lorem ipsum dolor sit.</span></li>
                    <li><span><i v-show="!access.second" class="pi pi-times"></i><img v-show="access.second" src="../assets/img/check-mark.png" class="check-mark-image"></span> <span :class="!access.second ? 'strike-text' : 'inactive-class'">Lorem ipsum dolor sit.</span></li>
                    <li><span><i v-show="!access.third" class="pi pi-times"></i><img v-show="access.third" src="../assets/img/check-mark.png" class="check-mark-image"></span> <span :class="!access.third ? 'strike-text' : 'inactive-class'">Lorem ipsum dolor sit.</span></li>
                    <li><span><i v-show="!access.fourth" class="pi pi-times"></i><img v-show="access.fourth" src="../assets/img/check-mark.png" class="check-mark-image"></span> <span :class="!access.fourth ? 'strike-text' : 'inactive-class'">Lorem ipsum dolor sit.</span></li>
                    <li><span><i v-show="!access.fifth" class="pi pi-times"></i><img v-show="access.fifth" src="../assets/img/check-mark.png" class="check-mark-image"></span> <span :class="!access.fifth ? 'strike-text' : 'inactive-class'">Lorem ipsum dolor sit.</span></li>
               </ul>
            </template>
            <template #footer>
                <Button label="Buy Now" />
            </template>
        </Card>

    </div>
</template>

<script>
import Card from 'primevue/card'
import Button from 'primevue/button'
export default{
    name: "pricingComponent",
    props:{
        plan: String,
        title: String,
        price: Number,
        access: Object,
        active: Boolean
    },
    components:{
        Card,
        Button
    }
}
</script>

