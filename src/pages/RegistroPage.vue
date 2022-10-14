<template>
  <div class="q-pa-md fit row wrap justify-center items-start content-start">
    <q-card class="q-ma-sm my-card">
      <div class="q-pa-md text-center">
        <h5>Registro de Cuentas</h5>
      </div>
      <q-separator />

      <div class="q-pa-md text-center text-green">
        <h6>Suerte en su compra de combos</h6>
      </div>
      <div
        class="q-mx-auto q-pa-md q-gutter-y-md column"
        style="max-width: 300px"
      >
        <q-input
          filled
          label="Correo"
          v-model="email"
          type="email"
          :rules="[(val) => (val && val.length > 0) || 'Campo obligatorio']"
        >
        </q-input>

        <q-input
          v-model="password"
          label="Contraseña"
          filled
          :type="isPwd ? 'password' : 'text'"
          :rules="[(val) => (val && val.length > 0) || 'Campo obligatorio']"
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
        <q-btn class="q-ma-md" color="negative" label="Atras" to="/" />
        <q-btn
          class="q-ma-md"
          color="primary"
          label="Registrar"
          @click="registrar"
        />
      </div>
      <div></div>
    </q-card>

    <q-card class="q-ma-sm my-card">
      <div class="q-pa-md text-center">
        <h5>Verificar Cuenta</h5>
      </div>

      <q-separator />

      <div class="q-pa-md text-center text-blue">
        <h6>
          Si tiene algun problema con su cuenta verifique su cuenta o cambie su
          contraseña
        </h6>
      </div>

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
            <q-btn round dense flat icon="search" @click="validarCuenta" />
          </template>
        </q-input>

        <q-chip
          class="q-pa-lg glossy"
          square
          color="positive"
          text-color="white"
          icon="verified"
          v-if="verificada"
        >
          <h6>CUENTA PREMIUM</h6>
        </q-chip>

        <q-chip
          class="q-pa-lg glossy"
          square
          color="negative"
          text-color="white"
          icon="highlight_off"
          v-if="noverficada"
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
            <q-btn
              round
              dense
              flat
              icon="send"
              @click="actualizarContraseña"
            />
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
        if (email.value !== '' && password.value !== '') {
          const response = await axios.post(
            'https://apk.workshopsofficial.com/user/',
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
        } else {
          $q.notify({
            message: 'Campos Vacios',
            color: 'negative',
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
    const email_verificacion = ref('');
    const password_change = ref('');
    const verificada = ref(false);
    const noverficada = ref(false);
    const validarCuenta = async () => {
      try {
        if (email_verificacion.value !== '') {
          const response = await axios.get(
            `https://apk.workshopsofficial.com/user/${email_verificacion.value}`,
            {
              headers: {
                accept: 'application/json',
              },
            }
          );
          if (response.status === 200) {
            if (response.data.is_premium === true) {
              verificada.value = true;
              noverficada.value = false;
            } else {
              noverficada.value = true;
              verificada.value = false;
            }
          }
        } else {
          $q.notify({
            message: 'Campos Vacios',
            color: 'negative',
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
    const actualizarContraseña = async () => {
      try {
        if (email_verificacion.value !== '' && password_change.value !== '') {
          const response = await axios.put(
            'https://apk.workshopsofficial.com/user/',
            // '{\n  "email": "client@gmail.com",\n  "password": "12345678"\n}',
            {
              email: email_verificacion.value,
              password: password_change.value,
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
              message: 'Contraseña Actualizada',
              color: 'positive',
              position: 'top',
            });
          }
        }
        else {
          $q.notify({
            message: 'Campos Vacios',
            color: 'negative',
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
      email_verificacion,
      password_change,
      verificada,
      noverficada,
      validarCuenta,
      actualizarContraseña,
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
