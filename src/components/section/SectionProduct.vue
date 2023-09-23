<template>
  <section id="products">
    <div
      class="max-w-[1728px] block mx-auto pt-[80px] md:pt-[114px] px-[48px] 2xl:px-[174px] pb-[99px]"
    >
      <h2 class="text-center text-[48px] md:text-[64px] roboto text-green-dark">
        Best selling
      </h2>
      <h3
        class="mt-[37px] text-center poppins text-[18px] md:text-[22px] text-green-dark"
      >
        Get in on the trend with our curated selection of best-selling styles.
      </h3>
      <div
        class="mt-[80px] flex gap-y-[20px] 2xl:gap-[44px] flex-wrap justify-between"
      >
        <TransitionGroup name="fade">
          <BaseProduct
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </TransitionGroup>
      </div>

      <button
        type="button"
        class="hover:gap-[8px] rounded-[3px] py-4 px-[55px] ease-in duration-300 items-start border-2 border-green-dark text-[#224F34] mt-[80px] block mx-auto gap-[18px] text-[22px] flex items-center jsutify-center border"
        @click="getNewData"
      >
        See all
        <svg
          class="block my-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
        >
          <path
            d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM0 9L23 9V7L0 7L0 9Z"
            fill="#224F34"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import BaseProduct from "../base/BaseProduct.vue";
import fetchData from "../../utils/FetchData";

const products = reactive([
  {
    id: 1,
    name: "Regular Fit Long Sleeve Top",
    price: "38.99",
    starsLevel: "5.0",
    background: "#A9D4BA",
    img: "person1.jpg",
  },
  {
    id: 2,
    name: "Black Crop Tailored Jacket",
    price: "62.99",
    starsLevel: "4.9",
    background: "#A9D4BA",
    img: "person2.png",
  },
  {
    id: 3,
    name: "Textured Sunset Shirt",
    price: "49.99",
    starsLevel: "5.0",
    background: "#CADCD0",
    img: "person3.png",
  },
]);

const myData = ref([]); // Initialize myData as a ref

const getNewData = async () => {
  try {
    const newData = await fetchData("products?limit", 6);

    products.push(...newData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
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