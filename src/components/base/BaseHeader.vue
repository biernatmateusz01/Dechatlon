<template>
  <div class="max-w-[1728px] block mx-auto relative">
    <div
      class="absolute top-0 left-0 flex justify-between px-[42px] 2xl:px-[174px] pt-8 xl:pt-[63px] flex w-full justify-between z-50"
    >
      <a
        href="#"
        class="text-[32px] 2xl:text-[40px] font-normal text-green-dark elephant-text"
        >Rivo</a
      >
      <div class="items-center hidden xl:flex">
        <a
          v-for="link in links"
          :key="link.id"
          href=""
          class="uppercase text-green-dark font-medium leading-normal text-[18px] 2xl:text-[22px] poppins py-2 ml-[57px] first:ml-0"
          >{{ link.name }}</a
        >
        <div class="flex gap-[57px] ml-[206px]">
          <div class="flex items-center justify-center">
            <div class="relative">
              <img src="bag.svg" alt="bag" />
              <div
                class="h-[10px] w-[10px] rounded-full absolute bottom-0 right-0 bg-[#10FF70]"
                style="filter: drop-shadow(1px 2px 9px rgba(0, 0, 0, 0.15))"
              ></div>
            </div>
          </div>
          <a
            href="#"
            class="px-[41px] py-[11px] rounded-[3px] uppercase poppins text-green-dark border-2 border-green-dark hover:bg-green-dark hover:text-white flex items-center justify-center"
          >
            Login
          </a>
        </div>
      </div>
      <!-- <div class="xl:flex gap-[57px] hidden">

      </div> -->
      <Transition name="fade">
        <MenuModal v-if="isMenuOpen" :links="links" @close-menu="toogleMenu" />
      </Transition>
      <div class="flex xl:hidden">
        <button type="button" @click="toogleMenu">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MenuModal from "../base/MenuModal.vue";

const isMenuOpen = ref(false);

const links = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Shop",
    link: "#",
  },
  {
    id: 3,
    name: "Features",
    link: "#",
  },
  {
    id: 4,
    name: "Contact",
    link: "#",
  },
];

const toogleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>