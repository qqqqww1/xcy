<template>
  <DefineTooltip v-slot="{ message }">
    <q-tooltip class="text-body1 bg-primary">
      {{ message }}
    </q-tooltip>
  </DefineTooltip>

  <q-btn flat round>
    <div class="i-mdi:account text-24px text-blue-400" />
    <Tooltip message="用户设置" />
  </q-btn>

  <q-btn flat round>
    <div class="i-mdi:bell text-24px text-blue-400" />
    <Tooltip message="消息" />
  </q-btn>

  <q-btn flat round>
    <div class="i-mdi:settings text-24px text-blue-400" />
    <Tooltip message="设置" />
  </q-btn>

  <q-btn flat round>
    <div class="i-mdi:logout text-24px text-blue-400" />
    <Tooltip message="退出" class="bg-red" />
  </q-btn>
</template>

<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core';

const [DefineTooltip, Tooltip] = createReusableTemplate<{
  message: string;
}>();
</script>
