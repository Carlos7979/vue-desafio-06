<script setup>
    import Header from './components/Header.vue'
    import Info from './components/Info.vue'
    import { onBeforeMount } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter, useRoute } from 'vue-router'

    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const handleClick = () => {
        const path = route.name === 'Form' ? '/table' : '/'
        router.push({ path })
    }
    onBeforeMount(() => {
        store.dispatch('setRows')
    })
</script>

<template>
    <div class="main">
        <Header></Header>
        <Info></Info>
        <button class="btn btn-secondary button" @click="handleClick">
            {{ $route.name === 'Form' ? 'Ver tabla' : 'Ir a formulario' }}
        </button>
        <RouterView />
    </div>
</template>

<style scoped>
    .button {
        margin: 10px auto;
        display: flex;
        justify-content: space-around;
    }
</style>
