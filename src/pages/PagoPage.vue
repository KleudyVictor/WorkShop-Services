<template>
  <div
    class="q-pa-md fit row wrap justify-center items-start content-start"
    v-if="cantidadDisponible > 0"
  >
    <q-card class="my-card text-center text-bold">
      <q-card-section>
        <q-img
          width="300px"
          height="300px"
          :src="qr[listaCorreos.length - 1]"
        />
        <div class="q-pa-md">
          <h6>Cantidad de Cuentas: {{ listaCorreos.length }}</h6>
          <h6>Monto Total: $ {{ listaCorreos.length * 15 }}</h6>
          <h6>Disponible: {{ cantidadDisponible }}</h6>
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
        @click="pedido"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import { LocalStorage, useQuasar } from 'quasar';
import axios from 'axios';

const qr = [
  '../../src/assets/qr/1.jpg',
  '../../src/assets/qr/2.jpg',
  '../../src/assets/qr/3.jpg',
  '../../src/assets/qr/4.jpg',
  '../../src/assets/qr/5.jpg',
];

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const cantidadDisponible = ref(LocalStorage.getItem('cantidad'));
    const listaCorreos = ref(LocalStorage.getItem('emails') || []);
    const codigo_trans = ref('');
    const pedido = async () => {
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
        });
      }
      else {
        $q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'check',
          message: 'Error al realizar el pedido',
        });
      }
    };

    return {
      cantidadDisponible,
      listaCorreos,
      codigo_trans,
      qr,
      pedido
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
