<script setup>
    import { reactive, watch } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    const formData = reactive({
        name: '',
        email: '',
        number: '',
        password: '',
        city: '',
        lang: [],
        color: ''
    })
    let errors = reactive([])
    const cities = ['', 'Caracas', 'Buenos Aires', 'Bogotá']
    const shadow = reactive({
        name: '',
        email: '',
        number: '',
        password: '',
        city: '',
        lang: '',
        color: ''
    })
    const handleSubmit = () => {
        if (validate()) {
            store.dispatch('submit', {
				...formData,
				lang: [...formData.lang]
			})
            resetForm()
        }
    }
    const validate = () => {
        errors = []
        for (const input in formData) {
            if ((input === 'lang' && formData[input].length === 0) || formData[input] === '') {
                shadow[input] = 'shadow'
                errors.push('Todos los campos son obligatorios')
                return false
            } else {
                shadow[input] = ''
            }
        }
        if (!emailValidate(formData.email)) {
            shadow['email'] = 'shadow'
            errors.push(`${formData.email} no es un email válido`)
            return false
        }
        errors = []
        return true
    }
    const emailValidate = email => {
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!re.test(String(email))) return false
        return true
    }
    const resetForm = () => {
		for (const key in formData) {
			if (key === 'lang') formData[key] = []
			else formData[key] = ''
		}
    }

	const handleInput = (e) => {
		const name = e.target.name
		shadow[name] = ''
		if (name === ' email') emailValidate(e.target.value)
	}

</script>

<template>
    <div class="form-container">
        <form action="" method="post" class="form">
            <div class="input-group-text">
                <label for="name">Nombre</label>
                <input
                    :class="`form-control ${shadow.name ? 'shadow' : ''}`"
                    v-model.trim="formData.name"
                    type="text"
                    name="name"
                    id="name"
					@input="handleInput"
                />
            </div>
            <div class="input-group-text">
                <label for="email">Correo</label>
                <input
                    :class="`form-control ${shadow.email ? 'shadow' : ''}`"
                    v-model="formData.email"
                    type="email"
                    name="email"
                    id="email"
					@input="handleInput"
                />
            </div>
            <div class="input-group-text">
                <label for="number">Número</label>
                <input
                    :class="`form-control ${shadow.number ? 'shadow' : ''}`"
                    v-model.prevent="formData.number"
                    type="number"
                    name="number"
                    id="number"
					@input="handleInput"
                />
            </div>
            <div class="input-group-text">
                <label for="password">Contraseña</label>
                <input
                    :class="`form-control ${shadow.password ? 'shadow' : ''}`"
                    v-model="formData.password"
                    type="password"
                    name="password"
                    id="password"
					@input="handleInput"
                />
            </div>
            <div class="input-group-text">
                <label for="city">Ciudad</label>
                <select
                    :class="`custom-select select ${shadow.city ? 'shadow' : ''}`"
                    v-model="formData.city"
                    id="city"
					@input="handleInput"
                >
                    <option v-for="(city, i) in cities" :key="`${i}-cities`" :value="city">
                        {{ city }}
                    </option>
                </select>
            </div>
            <div class="input-group-text">
                <label>Idiomas</label>
                <div :class="`form-control ${shadow.lang ? 'shadow' : ''}`">
                    <label for="es">Español</label>
                    <input type="checkbox" name="lang" id="es" value="es" v-model="formData.lang" @input="handleInput" />
                    <label for="en">Inglés</label>
                    <input type="checkbox" name="lang" id="en" value="en" v-model="formData.lang" @input="handleInput" />
                </div>
            </div>
            <div class="input-group-text">
                <label>Color</label>
                <div :class="`form-control ${shadow.color ? 'shadow' : ''}`">
                    <label for="blue">Azul</label>
                    <input type="radio" name="color" id="blue" value="azul" v-model="formData.color" @input="handleInput" />
                    <label for="green">Verde</label>
                    <input
                        type="radio"
                        name="color"
                        id="green"
                        value="verde"
                        v-model="formData.color"
						@input="handleInput"
                    />
                </div>
            </div>
            <input @click.prevent="handleSubmit" type="submit" value="Enviar" />
            <div
                v-show="errors.length > 0"
                class="alert alert-danger"
                v-for="(error, i) in errors"
                :key="`${i}-error`"
            >
                {{ error }}
            </div>
        </form>
    </div>
</template>

<style scoped>
    .form-container {
        display: flex;
        justify-content: center;
    }

    .form {
        display: flex;
        flex-direction: column;
    }

    .select {
        width: 100%;
    }

    .input-group-text label {
        width: 7rem;
        text-align: end;
        font-weight: 600;
        margin-right: 5px;
    }
    .shadow {
        box-shadow: 1px 1px 1px 1px red !important;
    }
</style>
