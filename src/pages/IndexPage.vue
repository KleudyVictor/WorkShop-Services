<template>
  <div class="q-pa-md fit row wrap justify-center items-start content-start">
    <q-table
      class="my-table"
      title='Treats'
      :rows='rows'
      :columns='columns'
      row-key='id'
      :filter='filter'
      :loading='loading'
    >

      <template v-slot:top>

        <q-input outlined v-model="email" placeholder='Correo' type='email'>
        <template v-slot:after>
          <q-btn icon="add" size="md" round color="green" :disable='loading'  @click='addRow' />
        </template>
        </q-input>


        <q-space />
      </template>

      <template v-slot:body-cell-acciones="props">
          <q-td :props="props">
            <div class="q-gutter-sm">
              <q-btn icon="delete" dense color="negative" :disable='loading'  @click='removeRow' />
            </div>
          </q-td>
        </template>

    </q-table>
  </div>
  <div class="text-center">
    <q-btn outline style="color: goldenrod;" label="Proceder al Pago" to="/pago"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const columns = [
  { name: 'correo', label: 'Correo', align: 'left', field: 'correo', sortable: true },
  { name: 'acciones', align: 'right', label: 'Acciones',field: 'acciones',}
]
const originalRows = [
  {correo: 'primero'},
  {correo: 'segundo'},
  {correo: 'tercero'}
]
export default defineComponent({
  setup() {

    const loading = ref(false)
    const rowCount = ref()
    const rows = ref([])


    return{
      columns,
      rows,
      loading,
      originalRows,
      rowCount,
      email: ref(''),
      // emulate fetching data from server
      addRow () {
        loading.value = true
        setTimeout(() => {
          const
            index = Math.floor(Math.random() * (rows.value.length + 1)),
            row = originalRows[ Math.floor(Math.random() * originalRows.length) ]

          if (rows.value.length === 0) {
            rowCount.value = 0
          }

          row.id = ++rowCount.value
          const newRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
          rows.value = [ ...rows.value.slice(0, index), newRow, ...rows.value.slice(index) ]
          loading.value = false
        }, 500)
      },

      removeRow () {
        loading.value = true
        setTimeout(() => {
          const index = Math.floor(Math.random() * rows.value.length)
          rows.value = [ ...rows.value.slice(0, index), ...rows.value.slice(index + 1) ]
          loading.value = false
        }, 500)
      }
    }
  },
})
</script>

<style lang="sass">
.my-card
  width: 100%
  max-width: 800px
.my-table
  width: 100%
  max-width: 800px
</style>
