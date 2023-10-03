<template>
    <div id="home-styles">
        <HeroSection></HeroSection>
        <FillerContainer></FillerContainer>
        <AboutComponent></AboutComponent>  
        <CardContainer></CardContainer>  
        <ParallaxComponent></ParallaxComponent>
        <MiddleContainer></MiddleContainer>
        <PricingContainer></PricingContainer>
        <CarouselComponent></CarouselComponent>   
        <FAQComponent></FAQComponent>
        <FooterComponent></FooterComponent>
    </div>

</template>

<script>

import HeroSection from "../components/HeroSection.vue";
import AboutComponent from '../components/AboutComponent.vue';
import CardContainer from '../components/CardContainer.vue';
import PricingContainer from '../components/PricingContainer.vue';
import MiddleContainer from '../components/MiddleContainer.vue';
import ParallaxComponent from '../components/ParallaxComponent.vue';
import FAQComponent from '../components/FAQComponent.vue';
import FillerContainer from '../components/FillerContainer.vue';
import CarouselComponent from '../components/CarouselComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';


export default {
  name: 'homePage',
  components: {
    CardContainer,
    PricingContainer,
    HeroSection,
    MiddleContainer,
    ParallaxComponent,
    FAQComponent,
    FillerContainer,
    AboutComponent,
    CarouselComponent,
    FooterComponent,

    
},

}
</script>