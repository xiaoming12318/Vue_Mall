<script setup>
import {RouterLink,RouterView} from 'vue-router'

</script>

<template>

    <div>我是首页</div>
    <nav>
        <RouterLink to='/'>Home</RouterLink>
        <p/>
        <RouterLink to="category">category</RouterLink>
    </nav>
    <RouterView/>
</template>