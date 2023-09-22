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
        class="hover:gap-[8px] text-[#224F34] mt-[80px] block mx-auto gap-[18px] text-[22px] flex items-center jsutify-center border"
        style="
          border-radius: 3px;
          border: 2px solid #224f34;
          padding: 16px 55px;
          align-items: flex-start;
        "
        @click="getNewData"
      >
        See all
        <img src="arrow.svg" alt="arrow" class="block my-auto">
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