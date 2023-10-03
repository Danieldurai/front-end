<template>
    <div id="hero-styles">
        <div class="grid grid-nogutters grid-container">
            <div class="lg:col-6 md:col-12">
                <h1 class="hero-title">Your Lightning Fast Delivery Partner</h1>
                <p class="hero-description">Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit</p>
                <div class="col-12">
                    <InputText  type="text" class="p-inputtext-lg lg:col-7 md:col-12 col-12"  placeholder="Large"></InputText>
                    <Button label="Buy Now" class="p-button-lg lg:col-4 col-6 "/>
                </div>
                <div class="hero-counts grid grid-nogutters">
                    <div class="lg:col-3 col-6 ">
                        <h1>232</h1>
                        <h5>Clients</h5>
                    </div>
                    <div class="lg:col-3 col-6">
                        <h1>521</h1>
                        <h5>Projects</h5>
                    </div>
                    <div class="lg:col-3 col-6">
                        <h1>1453</h1>
                        <h5>Support</h5>
                    </div>
                    <div class="lg:col-3 col-6">
                        <h1>32</h1>
                        <h5>Workers</h5>
                    </div>
                </div>
            </div>
            <div class=" md:col-12 lg:col-5">
                <img src="../assets/img/hero-img.svg">
            </div>
        </div>
    </div>    
</template>

<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button/Button';
export default{
    name:"heroSection",
    components: {
        InputText,
        Button
    }
}
</script>


