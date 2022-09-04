<template>
  <div class="q-pa-md fit row wrap justify-center items-start content-start">
    <q-card class="my-card text-center text-bold">
      <q-card-section>
        <q-img width="300px" height="300px" :src="qr[listaCorreos.length-1]" />
        <div class="q-pa-md">
          <h6>Cantidad de Cuentas: {{listaCorreos.length}}</h6>
          <h6>Monto Total: $ {{listaCorreos.length * 15}}</h6>
        </div>
        <div class="q-pa-md q-mx-auto" style="max-width: 330px">
          <q-input
            standout
            v-model="codigo_trans"
            label="Codigo de Transaccion"
          />
        </div>
      </q-card-section>
    </q-card>
    <div class="q-pa-md">
      <q-btn
        outline
        style="color: goldenrod"
        label="Confirmar Pago"
        to="/pago"
      />
    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { LocalStorage } from 'quasar'
import axios from 'axios'

const qr = [
  '../assets/qr/1.jpg',
  '../assets/qr/2.jpg',
  '../assets/qr/3.jpg',
  '../assets/qr/4.jpg',
  '../assets/qr/5.jpg',
]

export default defineComponent({
    setup() {
      const listaCorreos = LocalStorage.getItem('emails') || []
      const codigo_trans = ref('')
      const pedido = async () => {
        console.log('')
      }

      return {
        listaCorreos,
        codigo_trans,
        qr
      }
    },
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
