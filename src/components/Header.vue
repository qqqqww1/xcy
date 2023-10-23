<script setup lang="ts">
import { reactive } from 'vue';
import { useNow, useDateFormat } from '@vueuse/core';

const formattedTime = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');
</script>

<template>
  <div class="flex title_wrap items-center justify-center select-none">
    <div absolute class="w-full top-8 left-0 flex px-4">
      <div class="text-24px text-blue-500 font-bold pl-4">
        {{ formattedTime }}
      </div>
      <q-space />
      <div flex="~ nowrap" gap-x-2>
        <slot name="right" />
      </div>
    </div>

    <div class="title mt-[-12px]">
      <span class="title-text">变电站下属可调充电资源</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title_wrap {
  height: 80px;
  background-image: url('src/assets/img/top.png');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 4px;

  .guang {
    position: absolute;
    bottom: -26px;
    background-image: url('src/assets/img/guang.png');
    background-position: -100px center;
    background-repeat: no-repeat;
    width: fit-content;
    background-size: contain;
    width: 1200px;
    height: 56px;
  }

  .zuojuxing,
  .youjuxing {
    position: absolute;
    top: -2px;
    width: 140px;
    height: 6px;
    background-image: url('src/assets/img/headers/juxing1.png');
  }

  .zuojuxing {
    left: 11%;
  }

  .youjuxing {
    right: 11%;
    transform: rotate(180deg);
  }

  .timers {
    position: absolute;
    right: 0;
    top: 30px;
    font-size: 18px;
    display: flex;
    align-items: center;

    .setting_icon {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-left: 12px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.title {
  position: relative;
  text-align: center;
  background-size: cover;
  color: transparent;
  height: 60px;
  line-height: 46px;

  .title-text {
    font-size: min(3vw, 36px);
    font-weight: 900;
    letter-spacing: 0.5vw;
    width: 100%;
    background: linear-gradient(
      92deg,
      #0072ff 0%,
      #00eaff 48.8525390625%,
      #01aaff 100%
    );
    // 整体应用渐变
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
  }
}
</style>
