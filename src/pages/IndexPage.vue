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
              @click="removeRow"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
  <div class="text-center">
    <q-btn
      outline
      style="color: goldenrod"
      label="Proceder al Pago"
      to="/pago"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import { LocalStorage } from 'quasar';

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
    const email: Ref<string> = ref('');
    const rows: Ref<any[]> = ref([]);
    const loading: Ref<boolean> = ref(false);
    const filter: Ref<string> = ref('');
    const listaCorreos: Ref<any[]> = ref([]);

    const addRow = () => {
      if (email.value) {
        rows.value.push({
          correo: email.value,
          acciones: '',
        });
        listaCorreos.value.push(email.value);
        LocalStorage.set('emails', listaCorreos.value);
        console.log(listaCorreos.value);
        email.value = '';
      }
    };

    const removeRow = (index: number) => {
      rows.value.splice(index, 1);
    };

    return {
      columns,
      email,
      rows,
      loading,
      filter,
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
