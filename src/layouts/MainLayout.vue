<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-pa-lg row">
      <q-toolbar>
        <q-btn dense flat round color="primary" icon="menu" @click="toggleLeftDrawer"/>
        <q-toolbar-title>
          <q-img style="max-width: 300px" fit="contain"
                 src="../assets/logo.png"></q-img>
        </q-toolbar-title>
        <q-tabs class="gt-sm text-primary">
          <q-route-tab v-for="page in pages" :label="page.label" :to="page.to"></q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <div class="q-pa-md">
        <q-img fit="contain"
               src="../assets/logo.png"></q-img>
      </div>
      <q-list>
        <template v-for="page in pages">
          <q-item :to="page.to" clickable>
            <q-item-section>{{ page.label }}</q-item-section>
          </q-item>
          <q-separator></q-separator>
        </template>
      </q-list>

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
    const pages = ref([
      { label: 'Add Experience', to: '/' },
      { label: 'View Experiences', to: '/profiles' },
      { label: 'Add Wellness', to: '/wellness' },
      { label: 'View Wellness', to: '/wellness/reports' },
      { label: 'Payment Options', to: '/payment_options' }
    ])
    return {
      leftDrawerOpen,
      pages,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
