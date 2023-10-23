<template>
  <div relative box-border ref="domRef" p-6>
    <svg
      :width="width"
      :height="height"
      class="block absolute w-full h-full top-0 left-0"
    >
      <path
        :fill="backgroundColor"
        :stroke="mergedColor[0]"
        :d="`
            M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
            L ${width - 20} 10 L ${width - 5} 25
            L ${width - 5} ${height - 5} L 20 ${height - 5}
            L 5 ${height - 20} L 5 20
        `"
      />

      <path
        fill="transparent"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="10, 5"
        :stroke="mergedColor[0]"
        :d="`M 16 9 L 61 9`"
      />

      <path
        fill="transparent"
        stroke="{mergedColor[1]}"
        :d="`M 5 20 L 5 10 L 12 3  L 60 3 L 68 10`"
      />

      <path
        fill="transparent"
        :stroke="mergedColor[1]"
        :d="`M ${width - 5} ${height - 30} L ${width - 5} ${height - 5} L ${
          width - 30
        } ${height - 5}`"
      />
    </svg>
    <div relative class="w-full h-full overflow-y-auto" flex="~ col nowrap">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeUpdate, nextTick } from 'vue';

import { useElementSize } from '@vueuse/core';
import type { PropType } from 'vue';

const props = defineProps({
  color: {
    type: Array as unknown as PropType<[string, string]>,
    default: () => [],
  },
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
});
const mergedColor = ['#6586ec', '#2cf7fe'];
const domRef = ref(null);
const { width, height } = useElementSize(
  domRef,
  { width: 0, height: 0 },
  { box: 'border-box' }
);
</script>
