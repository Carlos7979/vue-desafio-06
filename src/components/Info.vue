
<template>
    <div class="info-data">
        <ul class="info">
            <li>Nombre:</li>
            <li>Profesor:</li>
            <li>Tutor:</li>
            <li>Curso:</li>
            <li>Comisión:</li>
        </ul>
        <ul class="data">
            <li><strong >Carlos Corredor</strong></li>
            <li><strong >Félix Blanco</strong></li>
            <li><strong >David Leda</strong></li>
            <li><strong >Vue JS</strong></li>
            <li><strong >40500</strong></li>
        </ul>
    </div>
</template>
<style scoped>
    .info-data {
        width: max-content;
        margin: 5px auto;
        display: flex;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: end;
        line-height: 1.5;
    }

    .data {
        padding-left: 0.5rem;
        line-height: 1.5;
    }
</style>
