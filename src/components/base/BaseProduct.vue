<template>
  <article class="w-full lg:max-w-[340px] 2xl:max-w-[430px] w-full">
    <div
      :style="{ backgroundColor: product.background }"
      class="min-h-[300px] 2xl:min-h-[536px] bg-green-medium relative flex justify-center"
    >
      <img
        :src="product.img ?? 'person1.jpg'"
        :alt="product.name"
        class="absolute bottom-0 object-cover h-full"
      />
    </div>
    <div class="mt-[51px] flex flex-col">
      <span
        class="text-[#373737] text-center poppins text-[22px] font-semibold"
        >{{ product.name ?? 'Textured Sunset Shirt' }}</span
      >
      <div class="flex block mx-auto mt-2">
        <span class="mr-[39px] poppins text-[#454545] text-[22px]"
          >$ {{ product.price }}</span
        >
        <div class="flex gap-[9px] pl-12 border-l border-[#454545]">
          <img src="star.svg" alt="star" class="block my-auto">
          <span class="poppins text-[#454545] text-[22px]">
            {{ product.starsLevel ?? '4.9' }}</span
          >
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>