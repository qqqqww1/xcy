<template>
  <q-page
    class="w-full min-h-100vh"
    flex="~ col nowrap"
    style="background-color: rgb(10, 17, 27)"
  >
    <Background />
    <Header>
      <template #right>
        <OperateBar />
      </template>
    </Header>

    <div
      class="flex-grow gap-4 text-white px-4"
      grid="~ auto-rows-60px"
      style="grid-template-columns: 3fr 4fr 3fr"
    >
      <ScreenCard col="[1]" row="span-4">
        <div class="text-lg font-bold mb-2">充电站信息</div>
      </ScreenCard>
      <ScreenCard col="[1]" row="span-7">
        <div class="text-lg font-bold mb-2">变电站/线路总功率曲线</div>
      </ScreenCard>
      <ScreenCard col="[2]" row="[1/12]">
        <div class="text-lg font-bold mb-2">充电功率曲线及灵活性边界</div>
      </ScreenCard>

      <ScreenCard col="[3]" row="[1/6]">
        <div class="text-lg font-bold mb-2">变电站状态</div>
      </ScreenCard>
      <ScreenCard col="[3]" row="span-6">
        <div class="text-lg font-bold mb-2">线路状态</div>
      </ScreenCard>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import Background from 'src/components/Background.vue';
import Header from 'src/components/Header.vue';
import OperateBar from 'src/components/OperateBar.vue';
import ScreenCard from 'src/components/ScreenCard.vue';
</script>
