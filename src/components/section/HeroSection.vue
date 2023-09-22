<template>
  <div class="bg-green-light w-screen">
    <div
      class="max-w-[1728px] block mx-auto pt-[140px] xl:pt-[234px] px-[32px] md:px-[60px] 2xl:px-[174px] pb-[48px] md:pb-[166px]"
    >
      <div
        class="flex gap-[24px] md:gap-[60px] xl:gap-[160px] justify-between flex-col md:flex-row"
      >
        <div
          class="flex flex-col order-2 xl:order-1 flex-1 md:w-[30%] lg:flex-1"
        >
          <h1
            class="text-[32px] leading-normal lg:text-[48px] 2xl:text-[86px] rufina text-green-dark font-bold"
          >
            Discover and Find Your Own Fashion!
          </h1>
          <p
            class="mt-[27px] poppins text-[16px] md:text-xl lg:text-2xl xl:leading-[220%] text-green-medium"
          >
            Explore our curated collection of stylish <br />
            clothing and accessories tailored to your <br />
            unique taste.
          </p>
          <div class="flex mt-[51px]">
            <button
              type="button"
              style="
                box-shadow: 6px 33px 59px 0px rgba(0, 0, 0, 0.3);
                border-radius: 3px;
              "
              class="px-[60px] py-[22px] uppercase poppins text-white bg-green-dark"
            >
              Explore Now
            </button>
          </div>
        </div>
        <div
          class="w-full block mt-auto md:w-1/2 order-1 xl:order-2 xl:flex-1 xl:flex xl:justify-end"
        >
          <div
            class="h-[420px] radius md-[530px] xl:h-[717px] bg-[#6BC785] xl:w-[570px] relative"
          >
            <img
              src="../../assets/personHero.png"
              alt="hero-person"
              class="absolute bottom-0 z-30 h-full hero-person"
            />
            <img
              src="../../assets/dots.png"
              alt="dots"
              class="absolute left-[24px] bottom-[83px]"
            />
            <img
              src="../../assets/dots.png"
              alt="dots"
              class="absolute right-[12px] top-[155px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 500px) {
  .hero-person {
    left: 17%;
  }
}

@media (min-width: 800px) {
  .hero-person {
    left: auto;
  }
}

@media (max-width: 800px) {
  .radius {
    border-radius: 141px 45px 0px 82px;
  }
}

@media (min-width: 900px) {
  .radius {
    border-radius: 141px 45px 150px 82px;
  }
}
</style>