<script setup>
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const rows = computed(() => {
        const rows = store.getters.getRows
        return rows
    })

    const handleRowStyle = (array, i) => {
		return i % 2 ? array[0] : array[1]
	}
    const { tableTitle, rowStyle } = defineProps({
        tableTitle: {
            type: String,
            default: 'Datos recolectados'
        },
        rowStyle: {
            type: Array,
            default: ['background: white', 'background: gray']
        }
    })
</script>
<template>
    <div class="table-container">
        <h3 class="table-title">{{ tableTitle }}</h3>
        <table>
            <thead>
                <tr>
                    <th>Nº</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Número</th>
                    <th>Password</th>
                    <th>Ciudad</th>
                    <th>Idiomas</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(column, i) of rows"
                    :key="i + '-column'"
                    :style="handleRowStyle(rowStyle, i)"
                >
                    <th scope="row">
                        {{ i + 1 }}
                    </th>
                    <td v-if="i" v-for="(row, i) of column" :key="i + '-row'">
                        {{ row }}
                    </td>
                    <td v-if="!i" v-for="(row, i) of column" :key="i + '-row'">
                        {{ row }}
                    </td>
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

    tr th {
        background: gold;
        margin: 0 auto;
    }

    .header-purple {
        background: slateblue;
        color: cornsilk;
        border: 1px solid black !important;
    }
</style>
