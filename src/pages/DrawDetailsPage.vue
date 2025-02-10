<script lang="ts">
import { useDrawLoader } from '../loaders/draws'

export { useDrawLoader }
</script>

<script setup lang="ts">
const { data: draw } = useDrawLoader()
</script>

<template>
  <div>
    <RouterLink :to="{ name: 'edit', params: { uuid: draw.uuid } }">
      Edit
    </RouterLink>
    <hr>
    <hr>
    <hr>
    <hr>
    <RouterLink :to="{ name: 'home' }">
      Back
    </RouterLink>
    <hr>
    <hr>
    <hr>
    <hr>
    DETAILS:  {{ draw }}
  </div>
</template>
