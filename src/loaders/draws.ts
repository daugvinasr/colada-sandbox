import { NavigationResult } from 'unplugin-vue-router/data-loaders'
import { defineColadaLoader } from 'unplugin-vue-router/data-loaders/pinia-colada'

export interface Draw {
  uuid: string
  name: string
}

export function getDraws(): Draw[] {
  // eslint-disable-next-line no-console
  console.log('getting fresh draws')
  return JSON.parse(sessionStorage.getItem('draws') || '[]') as Draw[]
}

const draws = [
  { uuid: '1', name: 'Draw 1' },
  { uuid: '2', name: 'Draw 2' },
  { uuid: '3', name: 'Draw 3' },
]

sessionStorage.setItem('draws', JSON.stringify(draws))

export const useDrawsLoader = defineColadaLoader({
  key: () => ['draws'],
  query: async () => {
    return getDraws()
  },
  staleTime: Infinity,
})

export const useDrawLoader = defineColadaLoader({
  key: to => ['draws', String(to.params.uuid)],
  query: async (to) => {
    const draws = await useDrawsLoader()
    const draw = draws.find(draw => draw.uuid === String(to.params.uuid))
    if (!draw) {
      return new NavigationResult({ name: 'home' })
    }

    return draw
  },
  staleTime: Infinity,
})
