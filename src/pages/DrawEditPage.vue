<script lang="ts">
import { getDraws, useDrawLoader } from '../loaders/draws'

export { useDrawLoader }
</script>

<script setup lang="ts">
import { useQueryCache } from '@pinia/colada'
import { useRouter } from 'vue-router'

const { data: draw } = useDrawLoader()
const queryCache = useQueryCache()
const router = useRouter()

function invalidateDraws() {
  // image this is post request to server
  const draws = getDraws()

  const drawUuid = draw.value.uuid

  const updatedDraws = draws.map((d) => {
    if (d.uuid === drawUuid) {
      return { ...d, name: new Date().toISOString() }
    }
    return d
  })

  sessionStorage.setItem('draws', JSON.stringify(updatedDraws))
  //

  queryCache.invalidateQueries({ key: ['draws'] })
  router.push({ name: 'details', params: { uuid: draw.value.uuid } })
}
</script>

<template>
  <div>
    <button @click="invalidateDraws">
      update name and invalidate draws and go back to details
    </button>
    <hr>
    <hr>
    <hr>
    <RouterLink :to="{ name: 'home' }">
      List
    </RouterLink>
    <hr>
    <hr>
    <hr>
    <RouterLink :to="{ name: 'details', params: { uuid: draw.uuid } }">
      draw details
    </RouterLink>
    <hr>
    <hr>
    <hr>
    {{ draw }}
  </div>
</template>
