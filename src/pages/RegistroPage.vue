<template>
  <div class="q-pa-md fit row wrap justify-center items-start content-start">
    <q-card class="q-ma-sm my-card">
      <div class="q-pa-md text-center">
        <h5>Registro de Cuentas</h5>
      </div>
      <q-separator />

      <div class="q-pa-md text-center text-green">
        <p>Suerte en su compra de combos</p>
      </div>
      <q-form @submit="onSubmit">
        <div
          class="q-mx-auto q-pa-md q-gutter-y-md column"
          style="max-width: 300px"
        >
          <q-input filled label="Correo" v-model="email" type="email" :rules="[ val => val && val.length > 0 || 'Campo obligatorio']">
          </q-input>

          <q-input
            v-model="password"
            label="Contraseña"
            filled
            :type="isPwd ? 'password' : 'text'"
            :rules="[ val => val && val.length > 0 || 'Campo obligatorio']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>

        <div class="text-center q-pa-md">
          <q-btn
            class="q-ma-md"
            color="negative"
            type="submit"
            label="Atras"
            to="/"
          />
          <q-btn
            class="q-ma-md"
            color="primary"
            type="submit"
            label="Registrar"
            @click="registrar"
          />
        </div>
      </q-form>
      <div></div>
    </q-card>

    <q-card class="q-ma-sm my-card">
      <div class="q-pa-md text-center">
        <h5>Verificar Cuenta</h5>
      </div>

      <q-separator />

      <div
        class="q-mx-auto q-pa-md q-gutter-y-md column"
        style="max-width: 300px"
      >
        <q-input
          filled
          label="Correo a Verificar"
          v-model="email_verificacion"
          type="email"
          :rules="[(val) => (val && val.length > 0) || 'Campo obligatorio']"
        >
          <template v-slot:after>
            <q-btn round dense flat icon="search" />
          </template>
        </q-input>

        <q-chip
          class="q-pa-lg glossy"
          square
          color="positive"
          text-color="white"
          icon="verified"
        >
          <h6>CUENTA PREMIUM</h6>
        </q-chip>

        <q-chip
          class="q-pa-lg glossy"
          square
          color="negative"
          text-color="white"
          icon="highlight_off"
        >
          <h6>CUENTA SIN PAGAR</h6>
        </q-chip>

        <q-input
          v-model="password_change"
          label="Nueva Contraseña"
          filled
          :type="isPwd ? 'password' : 'text'"
          :rules="[(val) => (val && val.length > 0) || 'Campo obligatorio']"
        >
          <template v-slot:after>
            <q-btn round dense flat icon="send" />
          </template>
        </q-input>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const email = ref('');
    const password = ref('');
    const isPwd = ref(true);
    const registrar = async () => {
      try {
        const response = await axios.post(
          'https://tuenvio.followvip.tech/user/',
          // '{\n  "email": "client@gmail.com",\n  "password": "12345678"\n}',
          {
            email: email.value,
            password: password.value,
          },
          {
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 200) {
          $q.notify({
            message: 'Cuenta Registrada',
            color: 'positive',
            position: 'top',
          });
        }
      } catch (error: any) {
        $q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'check',
          message: String(error.response.data.detail),
        });
      }
    };
    return {
      email,
      password,
      isPwd,
      registrar,
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
