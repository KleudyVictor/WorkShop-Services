<template>
  <div class="q-pa-md fit row wrap justify-center items-start content-start">
    <q-table
      class="my-table"
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >
      <template v-slot:top>
        <q-input outlined v-model="email" placeholder="Correo" type="email">
          <template v-slot:after>
            <q-btn
              icon="add"
              size="md"
              round
              color="green"
              :disable="loading"
              @click="addRow"
            />
          </template>
        </q-input>
        <text-h3 class="q-ml-md q-mt-sm text-positive">Disponible: {{cantidadDisponible}}</text-h3>

        <q-space />
      </template>

      <template v-slot:body-cell-acciones="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              icon="delete"
              dense
              color="negative"
              :disable="loading"
              @click="removeRow(props.rowIndex)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
  <div class="text-center">
    <q-btn
      class="q-ma-md"
      color="negative"
      label="Atras"
      to="/"
    />
    <q-btn
      class="q-ma-md"
      color="green"
      label="Proceder al Pago"
      to="/pago"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue';
import { LocalStorage, useQuasar } from 'quasar';
import axios from 'axios';

const columns = [
  {
    name: 'correo',
    label: 'Correo',
    align: 'left',
    field: 'correo',
    sortable: true,
  },
  { name: 'acciones', align: 'right', label: 'Acciones', field: 'acciones' },
];

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const email: Ref<string> = ref('');
    const rows: Ref<any[]> = ref([]);
    const loading: Ref<boolean> = ref(false);
    const filter: Ref<string> = ref('');
    const listaCorreos: Ref<any[]> = ref([]);
    const cantidadDisponible: Ref<number> = ref(0);

    onMounted(async () => {
      setInterval(async () => {
        const response = await axios.get(
          'https://tuenvio.followvip.tech/pedido/',
          {
            headers: {
              accept: 'application/json',
            },
          }
        );
        cantidadDisponible.value = response.data.cantidad_pedidos;
        LocalStorage.set('cantidadDisponible', cantidadDisponible.value);
      }, 10000);
      LocalStorage.clear();
    }
    );

    const addRow = () => {
      if (email.value && rows.value.length < 5) {
        rows.value.push({
          correo: email.value,
          acciones: '',
        });
        listaCorreos.value.push(email.value);
        LocalStorage.set('emails', listaCorreos.value);
        console.log(listaCorreos.value);
        email.value = '';
      } else {
        $q.notify({
          message: 'No se puede agregar mas de 5 correos',
          color: 'negative',
          position: 'top',
        });
      }
    };

    const removeRow = (index: number) => {
      console.log(index);
      rows.value.splice(index, 1);
    };

    return {
      columns,
      email,
      rows,
      loading,
      filter,
      cantidadDisponible,
      addRow,
      removeRow,
    };
  },
});
</script>

<style lang="sass">
.my-card
  width: 100%
  max-width: 800px
.my-table
  width: 100%
  max-width: 800px
</style>
