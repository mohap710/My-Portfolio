<!-- Soft "cloud" atmosphere behind the hero: side glows, a few cloud puffs and the photo halo.
     Everything here is gradients + transforms (no blur filters), so it is cheap to paint. -->
<template>
  <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
    <span
      class="absolute top-[6%] -left-[24vw] h-[90%] w-[62vw] animate-drift rounded-full bg-[radial-gradient(closest-side,var(--color-sky),transparent)]"
    />
    <span
      class="absolute top-[6%] -right-[24vw] h-[90%] w-[62vw] animate-drift rounded-full bg-[radial-gradient(closest-side,var(--color-sand),transparent)] [animation-direction:alternate-reverse] [animation-duration:17s]"
    />
    <span
      class="absolute -top-[18%] left-1/2 h-[55%] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,#fbf3e3,transparent)] opacity-90"
    />
  </div>
  <span class="puff top-[64%] left-[7%] h-11 w-[150px]" aria-hidden="true" />
  <span class="puff top-[30%] right-[9%] h-[34px] w-[110px] [animation-delay:-3s] max-lg:hidden" aria-hidden="true" />
  <div
    class="absolute -bottom-[18%] left-1/2 z-0 aspect-square w-[min(78vh,62vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_35%,#fffaf0,#d9c9aa)] shadow-[0_0_120px_20px_#fbf3e3] max-lg:w-screen"
    aria-hidden="true"
  >
    <span class="absolute -inset-[6%] animate-spin-slow rounded-full border-2 border-dashed border-navy/25" />
  </div>
</template>

<style scoped>
/* a cloud puff = one pill + two circles */
.puff {
  position: absolute;
  z-index: 0;
  border-radius: 9999px;
  background: var(--color-cream);
  opacity: 0.8;
  animation: var(--animate-float);
}
.puff::before,
.puff::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: inherit;
}
.puff::before {
  width: 46%;
  aspect-ratio: 1;
  left: 14%;
  top: -45%;
}
.puff::after {
  width: 34%;
  aspect-ratio: 1;
  right: 16%;
  top: -30%;
}
</style>
