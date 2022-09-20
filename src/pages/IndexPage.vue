<template>
  <div class="q-pa-md fit row wrap justify-around items-start content-start">
    
    <q-card class="my-card q-ma-md">
      <q-card-section>
        <q-img src="../assets/registro.png" />
        <div class="text-center">
          <q-btn color="primary" label="Registro de Cuentas" to="/registro" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card q-ma-md">
      <q-card-section>
        <q-img src="../assets/premium.png" />
        
        <div class="text-center">
          <q-btn color="pink" label="Cuentas Premium" to="/premium" />
        </div>
      </q-card-section>
    </q-card>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return{

    }
  },
})
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>