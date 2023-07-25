<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const rows = computed(() => {
        const rows = store.getters.getRows
        return [header, ...rows]
    })
    const header = {
        name: 'Nombre',
        email: 'Correo',
        number: 'Número',
        password: 'Password',
        city: 'Ciudad',
        lang: 'Idiomas',
        color: 'Color'
    }
    const { tableTitle, rowStyle } = defineProps({
        tableTitle: {
            type: String,
            default: 'Datos recolectados'
        },
        rowStyle: {
            type: Array,
            default: ['background: white', 'background: gray', '; background: gold']
        }
    })
</script>
<template>
    <div class="table-container">
        <h3 class="table-title">{{ tableTitle }}</h3>
        <table>
            <tbody>
                <tr
                    v-for="(column, i) of rows"
                    :key="i + '-column'"
                    :style="i % 2 ? rowStyle[0] : rowStyle[1] + (i === 0 ? rowStyle[2] : '')"
                >
                    <th :class="i === 0 ? 'header-table' : ''" scope="row">
                        {{ i === 0 ? 'Nº' : i }}
                    </th>
                    <td v-if="i" v-for="(row, i) of column" :key="i + '-row'">
                        {{ row }}
                    </td>
                    <th
                        v-if="!i"
                        class="header-table"
                        v-for="(row, i) of column"
                        :key="i + '-row'"
                        scope="col"
                    >
                        {{ row }}
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
    .table-container {
        margin: 20px auto;
        width: fit-content;
    }

    .table-title {
        text-align: center;
    }

    th,
    td {
        border: 1px solid;
        padding: 0 10px;
        text-align: center;
    }

    .header-table {
        background: gold;
        margin: 0 auto;
    }

    .header-purple {
        background: slateblue;
        color: cornsilk;
        border: 1px solid black !important;
    }
</style>
