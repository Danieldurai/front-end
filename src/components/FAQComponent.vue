<template>
    <div id="faq-styles">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div class="faq-container">
            <Accordion class="accordion-custom" :activeIndex="0">
                <AccordionTab>
                    <template #header>
                        <i class="pi pi-question-circle"></i>
                        <span>Non consectetur a erat nam at lectus urna duis?</span>
                    </template>
                    <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                </AccordionTab>
                <AccordionTab>
                    <template #header>
                        <i class="pi pi-question-circle"></i>
                        <span>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span>
                    </template>
                    <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                </AccordionTab>
                <AccordionTab>
                    <template #header>
                        <i class="pi pi-question-circle"></i>
                        <span>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</span>
                    </template>
                    <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                </AccordionTab>
                <AccordionTab>
                    <template #header>
                        <i class="pi pi-question-circle"></i>
                        <span>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</span>
                    </template>
                    <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                </AccordionTab>
                <AccordionTab>
                    <template #header>
                        <i class="pi pi-question-circle"></i>
                        <span>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</span>
                    </template>
                    <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                </AccordionTab>
            </Accordion>
        </div>
    </div>
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
export default{
    name:"faqComponent",
    components:{
        Accordion,
        AccordionTab
    }
    
}
</script>

