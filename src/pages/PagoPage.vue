<template>
  <div
    class="q-pa-md fit row wrap justify-center items-start content-start"
    v-if="cantidadDisponible > 0"
  >
    <q-card class="my-card text-center text-bold">
      <q-card-section>
        <q-img
          v-if="listaCorreos.length === 1"
          width="300px"
          height="300px"
          src="../assets/1.jpg"
        />
        <q-img
          v-if="listaCorreos.length === 2"
          width="300px"
          height="300px"
          src="../assets/2.jpg"
        />
        <q-img
          v-if="listaCorreos.length === 3"
          width="300px"
          height="300px"
          src="../assets/3.jpg"
        />
        <q-img
          v-if="listaCorreos.length === 4"
          width="300px"
          height="300px"
          src="../assets/4.jpg"
        />
        <q-img
          v-if="listaCorreos.length === 5"
          width="300px"
          height="300px"
          src="../assets/5.jpg"
        />

        <div class="q-pa-md">
          <p class="text-positive">Disponible: {{ cantidadDisponible }}</p>
          <p>Cantidad de Cuentas: {{ listaCorreos.length }}</p>
          <q-separator />
          <h6>Monto Total: $ {{ listaCorreos.length * 15 }}</h6>
        </div>
        <div class="q-pa-md q-mx-auto" style="max-width: 330px">
          <q-input
            standout
            v-model="codigo_trans"
            label="Codigo de Transaccion"
          />
        </div>
      </q-card-section>
      <div class="q-pa-md text-center">
        <q-btn
          outline
          :loading="loading"
          style="color: goldenrod"
          label="Confirmar Pago"
          @click="pedido"
        />
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { LocalStorage, useQuasar } from 'quasar';
import axios from 'axios';

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const cantidadDisponible = ref(LocalStorage.getItem('cantidadDisponible'));
    const listaCorreos = ref(LocalStorage.getItem('emails') || []);
    const codigo_trans = ref('');
    const loading = ref(false);
    const pedido = async () => {
      try {
        loading.value = true
        const response = await axios.post(
          'https://tuenvio.followvip.tech/pedido/',
          {
            id_pago: codigo_trans.value,
            lista_correos: listaCorreos.value,
          },
          {
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 200) {
          LocalStorage.clear();
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'check',
            message: 'Pedido realizado con exito',
          });}
      } catch (error) {
        $q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'check',
          message: String(error),
        });
      }
      loading.value = false
    };

    return {
      cantidadDisponible,
      listaCorreos,
      codigo_trans,
      loading,
      pedido,
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
