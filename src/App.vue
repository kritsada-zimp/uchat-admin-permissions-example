 
<template>
  <q-layout class="shadow-2 rounded-borders" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
    <q-header reveal :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
      <q-toolbar>
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
        <q-toolbar-title>User Permissions Example with Quasar</q-toolbar-title>
        <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-drawer v-model="drawerLeft" :width="200" :breakpoint="700" bordered>
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-drawer side="right" v-model="drawerRight" bordered :width="200" :breakpoint="500">
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page style="padding-top: 60px" class="q-pa-md">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
        </div>
        <router-view />

        <q-page-sticky position="top" expand class="bg-primary text-white">
          <q-toolbar>
            <q-btn flat round dense icon="map" />
            <q-toolbar-title>Title</q-toolbar-title>
          </q-toolbar>
        </q-page-sticky>
      </q-page>

      <q-page-scroller position="bottom">
        <q-btn fab icon="keyboard_arrow_up" color="red" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template> 
<script setup lang="ts">
import { ref } from "vue";
const drawerLeft = ref(false);
const drawerRight = ref(false);
</script>
<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
