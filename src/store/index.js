import { createStore, createLogger } from 'vuex'
import axios from 'axios'

const { MODE, VITE_ROWS: url } = import.meta.env
const debug = MODE !== 'production'

const store = createStore({
    state: {
        rows: []
    },
    mutations: {
        setRow(state, row) {
            state.rows.push(row)
        },
        setRows(state, rows) {
            Array.prototype.push.apply(state.rows, rows)
        }
    },
    actions: {
        async submit({ commit }, payload) {

            const response = await axios.post(url, payload)
            if (response.status === 201) {
                commit('setRow', payload)
            }
        },
        async setRows({ commit }) {
            const response = await axios.get(url)
            if (response.status === 200) {
                const rows = []
                for (const data of response.data) {
                    const { id, ...row } = data
                    rows.push(row)
                }
                commit('setRows', rows)
            }
        }
    },
    getters: {
        getRows: state => state.rows
    },
    plugins: debug ? [createLogger()] : []
})

export default store
