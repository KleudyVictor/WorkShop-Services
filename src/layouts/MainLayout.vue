<template>
  <q-layout view="hHh lpR fFf">

    <q-header
    reveal
    :class="$q.dark.isActive ? 'header_dark' : 'header_normal'">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../../combo-removebg.png">
          </q-avatar>
          WorkShop-Services
        </q-toolbar-title>
        <!--<q-btn icon="help_outline" class="text-right" flat round to="/ayuda"/>-->
        <q-btn icon="help" flat round size="md" to="/ayuda"/>
        <q-btn
          class="q-mr-xs justify-end"
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="q-pa-md fit row wrap justify-center items-start content-start">
    <q-card class="my-card text-center">
      <q-card-section class="text-center text-h4 text-bold">
        <span class="text-pink">Work</span><span class="text-amber">Shop</span><span class="text-blue-7">Services</span>
      </q-card-section>
    </q-card>
  </div>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style lang="sass">

.header_normal
  background: linear-gradient(145deg, rgb(193,0,21) 25%, rgb(21, 57, 102) 70%),

.header_dark
  background: linear-gradient(145deg, rgb(61, 14, 42) 15%, rgb(14, 43, 78) 70%)

.body--light
  background-color: rgb(237,235,235)

.body_dark
  background-color: #010101f2

</style>
