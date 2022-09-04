<template>
  <div class="q-pa-md fit row wrap justify-center items-start content-start">
    <q-card class="my-card text-center text-bold">
      <q-card-section>
      <q-img  width="300px" height="300px"  src="../../qr-50.jpg" />
      <div class="q-pa-md q-mx-auto" style="max-width: 330px">
        <q-input standout v-model="codigo_trans" label="Codigo de Transaccion" />
      </div>
      </q-card-section>
    </q-card>
    <div class="q-pa-md">
      <q-btn outline style="color: goldenrod;" label="Confirmar Pago" to="/pago"/>
    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { LocalStorage } from 'quasar'

export default defineComponent({
    setup() {
      const listaCorreos = LocalStorage.getItem('listaCorreos') || []
      const codigo_trans = ref('')

      return {
        listaCorreos,
        codigo_trans
      }
    },
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
