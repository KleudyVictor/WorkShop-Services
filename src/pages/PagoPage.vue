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
          <h6>Monto Total: $ {{ listaCorreos.length * 30 }}</h6>
        </div>
        <!-- <div class="q-pa-md q-mx-auto" style="max-width: 330px">
          <q-input
            filled
            v-model="codigo_trans"
            label="Codigo de Transaccion"
          />
        </div>

        <div class="q-pa-md q-mx-auto" style="max-width: 330px">
          <q-input filled v-model="userTelegram" label="Usuario de Telegram">
            <template v-slot:prepend>
              <q-icon name="telegram" />
            </template>
          </q-input>
        </div> -->

        <div
          class="q-pa-md fit row wrap justify-center items-start content-start"
        >
          <div class="q-pa-md">
            <q-btn
              @click="handleCopy"
              icon="content_copy"
              label="Copia Aqui"
              color="primary"
            />
          </div>
        </div>
        <div class="q-pa-md">
          <a href="https://t.me/workshopofficialbot"
            ><q-icon size="md" color="negative" name="smart_toy"
          /></a>
        </div>
      </q-card-section>
      <!-- <div class="q-pa-md text-center">
        <q-btn
          outline
          :loading="loading"
          style="color: goldenrod"
          label="Confirmar Pago"
          @click="pedido"
        />
      </div> -->
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue';
import { LocalStorage, copyToClipboard } from 'quasar';

export default defineComponent({
  setup() {
    const user: Ref<string> = ref('');
    const cantidadDisponible = ref(LocalStorage.getItem('cantidadDisponible'));
    const listaCorreos = ref(
      (LocalStorage.getItem('emails') as string[]) || []
    );
    const mensaje = ref('#orden *********\nCorreos: ');
    const formateadorCorreos = () => {
      listaCorreos.value.forEach((correo) => {
        mensaje.value += correo + ',';
      });
    };
    onMounted(() => {
      formateadorCorreos();
    });
    const handleCopy = () => {
      mensaje.value = mensaje.value.slice(0, -1);
      copyToClipboard(mensaje.value)
        .then(() => {
          // success!
        })
        .catch(() => {
          // fail
        });
    };

    return {
      user,
      cantidadDisponible,
      listaCorreos,
      handleCopy,
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
