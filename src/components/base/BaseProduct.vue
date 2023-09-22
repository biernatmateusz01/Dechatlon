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
        >{{ product.name ?? "Textured Sunset Shirt" }}</span
      >
      <div class="flex block mx-auto mt-2">
        <span class="mr-[39px] poppins text-[#454545] text-[22px]"
          >$ {{ product.price }}</span
        >
        <div class="flex gap-[9px] pl-12 border-l border-[#454545]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="block my-auto"
          >
            <g clip-path="url(#clip0_1_127)">
              <path
                d="M19.4672 23.3152L12.0002 17.8272L4.53322 23.3152L7.40022 14.4522L-0.0627823 8.99922H9.15122L12.0002 0.121216L14.8492 8.99922H24.0622L16.6002 14.4522L19.4672 23.3152Z"
                fill="#F5D426"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_127">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span class="poppins text-[#454545] text-[22px]">
            {{ product.starsLevel ?? "4.9" }}</span
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