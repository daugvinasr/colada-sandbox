<script lang="ts">
import { useDrawsLoader } from '../loaders/draws'

export { useDrawsLoader }
</script>

<script setup lang="ts">
const { data: draws } = useDrawsLoader()
</script>

<template>
  <div>
    <div v-for="draw in draws" :key="draw.uuid">
      <RouterLink :to="{ name: 'details', params: { uuid: draw.uuid } }">
        uuid: {{ draw.uuid }} name: {{ draw.name }}
      </RouterLink>
    </div>
  </div>
</template>
