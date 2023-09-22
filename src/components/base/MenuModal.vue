<template>
  <div class="flex xl:hidden">
    <div
      class="fixed top-0 left-0 flex flex-col items-center justify-between w-screen h-screen bg-green-light"
    >
      <div class="flex justify-between w-full py-[32px] px-[42px]">
        <a
          href="#"
          class="text-[32px] 2xl:text-[40px] font-normal text-green-dark elephant-text"
          >Rivo</a
        >
        <button class="block" @click="$emit('close-menu', $event)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="flex flex-col gap-2 text-center">
        <a
          v-for="link in links"
          :key="link.id"
          href=""
          class="uppercase text-green-dark font-medium leading-normal text-[18px] 2xl:text-[22px] poppins"
          >{{ link.name }}</a
        >
      </div>
      <div class="block pb-4 mx-auto">
        <a
          href="#"
          class="px-[41px] py-[11px] rounded-[3px] uppercase poppins text-green-dark border-2 border-green-dark flex items-center justify-center"
        >
          Login
        </a>
      </div>
    </div>
  </div>
</template>


<script setup>
defineProps({
  links: Object,
});
</script>