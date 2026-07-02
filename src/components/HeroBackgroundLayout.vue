<template>
  <section class="hero-background" :class="[{ 'hero-background--header-offset': headerOffset }, sectionClass]">
    <div class="hero-layout">
      <div class="hero-image-wrap">
        <img
          :src="imageSrc"
          alt=""
          class="hero-image"
          aria-hidden="true"
        />
      </div>
      <div class="hero-text">
        <slot />
      </div>
    </div>
    <div v-if="$slots.after" class="hero-after">
      <slot name="after" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  headerOffset: {
    type: Boolean,
    default: false
  },
  sectionClass: {
    type: String,
    default: ''
  },
  imageSrc: {
    type: String,
    default: '/hero-background.png'
  }
})
</script>

<style scoped>
.hero-background {
  --text-gutter: max(32px, calc((100vw - 1400px) / 2 + 32px));
  --text-width: min(700px, calc(100vw - 2 * var(--text-gutter)));
  --image-overlap: min(288px, calc(var(--text-width) * 0.42));
  --image-start: calc(var(--text-gutter) + var(--text-width) - var(--image-overlap));

  position: relative;
  background-color: #0a0a0a;
  overflow: hidden;
}

.hero-background--header-offset {
  margin-top: 124px;
}

.hero-layout {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
}

.hero-layout::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(var(--text-gutter) + var(--text-width) + var(--image-overlap) * 0.6);
  background: linear-gradient(
    to right,
    #0a0a0a 0%,
    #0a0a0a 28%,
    rgba(10, 10, 10, 0.92) 42%,
    rgba(10, 10, 10, 0.7) 58%,
    rgba(10, 10, 10, 0.35) 75%,
    rgba(10, 10, 10, 0.08) 90%,
    transparent 100%
  );
  z-index: 2;
  pointer-events: none;
}

.hero-image-wrap {
  grid-column: 1;
  grid-row: 1;
  align-self: start;
  justify-self: end;
  width: calc(100vw - var(--image-start));
  line-height: 0;
  position: relative;
  z-index: 1;
}

.hero-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, transparent 55%, rgba(10, 10, 10, 0.6) 80%, #0a0a0a 100%),
    linear-gradient(to right, transparent 0%, rgba(10, 10, 10, 0.15) 8%, transparent 20%);
  pointer-events: none;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  object-position: right top;
  pointer-events: none;
  -webkit-mask-image:
    linear-gradient(to bottom, #000 0%, #000 72%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.6) 18%, #000 28%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to bottom, #000 0%, #000 72%, transparent 100%),
    linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.6) 18%, #000 28%);
  mask-composite: intersect;
}

.hero-text {
  grid-column: 1;
  grid-row: 1;
  align-self: start;
  position: relative;
  z-index: 3;
  width: var(--text-width);
  margin-left: var(--text-gutter);
  padding: 48px 0 48px;
}

.hero-text::before {
  content: '';
  position: absolute;
  top: -24px;
  bottom: -24px;
  left: -24px;
  right: calc(-1 * var(--image-overlap) * 0.5);
  background: linear-gradient(
    to right,
    rgba(10, 10, 10, 0.85) 0%,
    rgba(10, 10, 10, 0.55) 45%,
    rgba(10, 10, 10, 0.2) 72%,
    transparent 100%
  );
  z-index: -1;
  pointer-events: none;
}

.hero-after {
  position: relative;
  z-index: 4;
}

@media (max-width: 768px) {
  .hero-background {
    --text-gutter: 16px;
    --text-width: min(700px, 58vw);
    --image-overlap: min(128px, calc(var(--text-width) * 0.3));
  }

  .hero-background--header-offset {
    margin-top: 88px;
  }

  .hero-image {
    -webkit-mask-image:
      linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%),
      linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.4) 12%, #000 30%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to bottom, #000 0%, #000 68%, transparent 100%),
      linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.4) 12%, #000 30%);
    mask-composite: intersect;
  }

  .hero-text {
    padding-bottom: 32px;
  }
}
</style>
