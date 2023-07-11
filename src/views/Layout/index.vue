<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import {RouterView} from 'vue-router'

</script>

<template>
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
   
</template>