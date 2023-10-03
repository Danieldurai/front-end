<template>
    <div id="sidebar-styles">
        <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="mr-2" />
        <Sidebar :model="items" :visible.sync="visibleLeft" hide :baseZIndex="1000">        
            <template #header>
                <h3>Left Sidebar</h3>
            </template>
            
            <Menu :model="items" ></Menu>
            <Menu :model="items" ></Menu>
            <Menu :model="items" ></Menu>
            <PanelMenu  :model="items2"></PanelMenu>
            <Menu :model="items4"></Menu>
            <Menu :model="items3"></Menu>
            
        </Sidebar>
    </div>
</template>

<script>

import PanelMenu from 'primevue/panelmenu';
import Sidebar from 'primevue/sidebar'
import Menu from 'primevue/menu';
import Button from 'primevue/button/Button';
export default{
    name:"sideBar",
    data(){
        return{
            visibleLeft: false,
            
            items: [
                {
                     
                    label: 'Pages',
                    icon: 'pi pi-twitter',
                    items: [{
                        label: 'Home',
                        icon: 'pi pi-home',
                        command: () => this.$router.push({path:'/'})
                       
                    },
                    {
                        
                        label: 'About',
                        icon: 'pi pi-info-circle',
                        command: () =>  this.$router.push({name: 'about'})
                    },
                   
                ]},
                
            ],

            

            items2 : [
                {
                    
                    label: 'Contact',
                    icon: 'pi pi-users',
                    items: [{
                        
                        label: 'Home',
                        icon: 'pi pi-refresh',
                       
                    },
                    {
                        label: 'About',
                        icon: 'pi pi-times',
                       
                    },
                     {
                        label: 'Special',
                        icon: 'pi pi-star-fill',
                        items:[{
                            label:"Home",
                            icon:"pi pi-home",
                            command: () => this.$router.push({path:'/'})     
                        },
                        {
                            label:"About",
                            icon:"pi pi-info-circle",
                            command: () => this.$router.push({path:'/about'})
                        }
                    ]
                       
                    }
                   
                ]       
                },
                {
                    label: 'Navigate',
                    icon: 'pi pi-globe',
                    items: [{
                        label: 'Home',
                        icon: 'pi pi-refresh',
                       
                    },
                    {
                        label: 'About',
                        icon: 'pi pi-times',
                       
                    },
                   
                ]       
                }
            ],
            items3: [
                {
                    label: 'Socials',
                    
                    items: [{
                        label: 'Twitter',
                        icon: 'pi pi-twitter',
                       
                    },
                    {
                        label: 'Facebook',
                        icon: 'pi pi-facebook',
                       
                    },
                   
                ]},
                
            ],
            items4:[
                {
                    items:[{
                        label: 'Twitter',
                        icon: 'pi pi-twitter',
                       
                    }]
                }
            ]
        }
    },

    components:{
        Menu,
        Button,
        PanelMenu,
        Sidebar        
    }
 
 
}    

</script>

