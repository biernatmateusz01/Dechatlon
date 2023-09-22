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
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.25 7.5H22.5C22.5 5.51088 21.7098 3.60322 20.3033 2.1967C18.8968 0.790176 16.9891 0 15 0C13.0109 0 11.1032 0.790176 9.6967 2.1967C8.29018 3.60322 7.5 5.51088 7.5 7.5H3.75C2.75544 7.5 1.80161 7.89509 1.09835 8.59835C0.395088 9.30161 0 10.2554 0 11.25L0 23.75C0.00198482 25.407 0.661102 26.9956 1.83277 28.1672C3.00445 29.3389 4.59301 29.998 6.25 30H17.5C17.8315 30 18.1495 29.8683 18.3839 29.6339C18.6183 29.3995 18.75 29.0815 18.75 28.75C18.75 28.4185 18.6183 28.1005 18.3839 27.8661C18.1495 27.6317 17.8315 27.5 17.5 27.5H6.25C5.25544 27.5 4.30161 27.1049 3.59835 26.4017C2.89509 25.6984 2.5 24.7446 2.5 23.75V11.25C2.5 10.9185 2.6317 10.6005 2.86612 10.3661C3.10054 10.1317 3.41848 10 3.75 10H7.5V12.5C7.5 12.8315 7.6317 13.1495 7.86612 13.3839C8.10054 13.6183 8.41848 13.75 8.75 13.75C9.08152 13.75 9.39946 13.6183 9.63388 13.3839C9.8683 13.1495 10 12.8315 10 12.5V10H20V12.5C20 12.8315 20.1317 13.1495 20.3661 13.3839C20.6005 13.6183 20.9185 13.75 21.25 13.75C21.5815 13.75 21.8995 13.6183 22.1339 13.3839C22.3683 13.1495 22.5 12.8315 22.5 12.5V10H26.25C26.5815 10 26.8995 10.1317 27.1339 10.3661C27.3683 10.6005 27.5 10.9185 27.5 11.25V17.5C27.5 17.8315 27.6317 18.1495 27.8661 18.3839C28.1005 18.6183 28.4185 18.75 28.75 18.75C29.0815 18.75 29.3995 18.6183 29.6339 18.3839C29.8683 18.1495 30 17.8315 30 17.5V11.25C30 10.2554 29.6049 9.30161 28.9017 8.59835C28.1984 7.89509 27.2446 7.5 26.25 7.5ZM10 7.5C10 6.17392 10.5268 4.90215 11.4645 3.96447C12.4021 3.02678 13.6739 2.5 15 2.5C16.3261 2.5 17.5979 3.02678 18.5355 3.96447C19.4732 4.90215 20 6.17392 20 7.5H10Z"
                  fill="#224F34"
                />
              </svg>
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