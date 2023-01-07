import * as THREE from 'three'
import { proxy } from 'valtio'

export const damp = THREE.MathUtils.damp
export const state = proxy({
  clicked: null,
  urls: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 11, 12, 1, 5, 7, 8, 2, 4, 9, 6].map((u) => `/${u}.jpg`)
})
