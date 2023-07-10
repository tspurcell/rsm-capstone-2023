<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-pa-lg row">
      <q-toolbar class="flex justify-between col-8">
        <q-btn dense flat round color="primary" icon="menu" @click="toggleLeftDrawer"/>
        <q-toolbar-title>
          <q-img style="max-width: 300px" fit="contain"
                 src="../assets/logo.png"></q-img>
          <q-btn flat padding="15px 45px" color="primary" label="Featured Jobs"></q-btn>
          <q-btn flat padding="15px 45px" color="primary" label="Diversity & Inclusion"></q-btn>
          <q-btn flat padding="15px 45px" color="primary" label="Employee Stories"></q-btn>
          <q-btn flat padding="15px 45px" color="primary" label="Benefits"></q-btn>
          <q-btn flat padding="15px 45px" color="primary" label="Search Jobs"></q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <div class="q-pa-md">
        <q-img fit="contain"
               src="../assets/logo.png"></q-img>
      </div>
      <q-btn flat padding="15px 45px" color="primary" label="Featured Jobs"></q-btn>
      <q-btn flat padding="15px 45px" color="primary" label="Diversity & Inclusion"></q-btn>
      <q-btn flat padding="15px 45px" color="primary" label="Employee Stories"></q-btn>
      <q-btn flat padding="15px 45px" color="primary" label="Benefits"></q-btn>
      <q-btn flat padding="15px 45px" color="primary" label="Search Jobs"></q-btn>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
