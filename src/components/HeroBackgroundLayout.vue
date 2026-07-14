<template>
  <section
    class="hero-background"
    :class="[
      { 'hero-background--header-offset': headerOffset },
      { 'hero-background--light': theme === 'light' },
      { 'hero-background--no-image': hideImage },
      { 'home-hero': sectionClass === 'home-hero' }
    ]"
  >
    <div class="hero-layout">
      <div class="hero-copy">
        <slot />
      </div>
      <div
        v-if="!hideImage"
        class="hero-image-wrap"
        :class="{ 'hero-image-wrap--placeholder': imagePlaceholder }"
      >
        <img
          v-if="!imagePlaceholder"
          :src="imageSrc"
          alt=""
          class="hero-image"
          aria-hidden="true"
        />
        <div v-else class="hero-image-placeholder" aria-hidden="true">
          <span class="hero-image-placeholder-text">Image placeholder</span>
        </div>
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
  },
  theme: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  },
  hideImage: {
    type: Boolean,
    default: false
  },
  imagePlaceholder: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.hero-background {
  --text-gutter: var(--site-gutter);
  --text-width: min(680px, calc(100% - 2 * var(--site-gutter)));
  --image-overlap: min(288px, calc(var(--text-width) * 0.42));
  --image-start: calc(var(--text-gutter) + var(--text-width) - var(--image-overlap));

  position: relative;
  background-color: #0a0a0a;
  overflow: hidden;
}

.hero-background--header-offset {
  padding-top: var(--site-header-height);
}

.hero-layout {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: var(--site-max-width);
  margin-inline: auto;
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
  width: calc(100% - var(--image-start));
  line-height: 0;
  position: relative;
  z-index: 1;
}

.hero-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to right, #0a0a0a 0%, transparent 3%, transparent 97%, #0a0a0a 100%),
    linear-gradient(to bottom, #0a0a0a 0%, transparent 4%, transparent 94%, #0a0a0a 100%);
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
    linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
    linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
  mask-composite: intersect;
}

.hero-copy {
  grid-column: 1;
  grid-row: 1;
  align-self: start;
  position: relative;
  z-index: 3;
  width: var(--text-width);
  margin-left: var(--text-gutter);
  padding: 48px 0 48px;
}

.hero-copy::before {
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

.hero-image-wrap--placeholder::after {
  display: none;
}

.hero-image-placeholder {
  width: 100%;
  min-height: clamp(380px, 56vh, 580px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgba(255, 255, 255, 0.22);
  background-color: #111111;
}

.hero-image-placeholder-text {
  font-family: var(--font-body);
  font-size: var(--text-tiny);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-pane);
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.38);
}

.hero-after {
  position: relative;
  z-index: 4;
}

.hero-background--no-image .hero-layout::before,
.hero-background--no-image .hero-copy::before {
  display: none;
}

/* Homepage hero — contained layout, image top-right within max width */
.hero-background.home-hero {
  --image-overlap: min(327px, calc(var(--text-width) * 0.465));
  overflow: hidden;
}

.hero-background.home-hero .hero-layout {
  position: relative;
}

.hero-background.home-hero .hero-copy {
  padding: 32px 0 40px;
  position: relative;
  z-index: 3;
}

.hero-background.home-hero .hero-image-wrap {
  position: absolute;
  top: 0;
  right: 0;
  width: min(800px, calc(100% - var(--text-gutter)));
  z-index: 1;
  grid-column: unset;
  grid-row: unset;
  align-self: unset;
  justify-self: unset;
  overflow: hidden;
}

.hero-background.home-hero .hero-image {
  width: 100%;
  max-width: none;
  margin-left: auto;
  object-fit: contain;
  object-position: right top;
  -webkit-mask-image:
    linear-gradient(
      to bottom,
      #000 0%,
      #000 62%,
      rgba(0, 0, 0, 0.55) 78%,
      transparent 100%
    ),
    linear-gradient(to right, #000 0%, #000 93%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(
      to bottom,
      #000 0%,
      #000 62%,
      rgba(0, 0, 0, 0.55) 78%,
      transparent 100%
    ),
    linear-gradient(to right, #000 0%, #000 93%, transparent 100%);
  mask-composite: intersect;
}

.hero-background.home-hero .hero-image-wrap::after {
  background:
    linear-gradient(
      to bottom,
      transparent 50%,
      rgba(10, 10, 10, 0.35) 68%,
      rgba(10, 10, 10, 0.75) 85%,
      #0a0a0a 100%
    ),
    linear-gradient(to right, transparent 90%, rgba(10, 10, 10, 0.55) 96%, #0a0a0a 100%);
}

@media (max-width: 768px) {
  .hero-background {
    --text-gutter: var(--site-gutter);
    --text-width: calc(100% - 2 * var(--site-gutter));
    --image-overlap: 0;
    --image-start: var(--site-gutter);
  }

  .hero-background.home-hero {
    overflow: hidden;
  }

  .hero-background.home-hero .hero-layout {
    position: relative;
  }

  .hero-background.home-hero .hero-image-wrap {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
  }

  .hero-background.home-hero .hero-image {
    width: 100%;
    max-width: none;
    transform: none;
    object-position: center center;
    max-height: min(52vh, 420px);
  }

  .hero-background--header-offset {
    padding-top: var(--site-header-height-mobile);
  }

  .hero-layout {
    display: flex;
    flex-direction: column;
  }

  .hero-layout::before {
    display: none;
  }

  .hero-copy {
    width: 100%;
    max-width: none;
    margin-left: 0;
    padding: 20px var(--site-gutter) 28px;
    align-self: stretch;
  }

  .hero-copy::before {
    display: none;
  }

  .hero-image-wrap {
    position: relative;
    width: 100%;
    margin-top: 0;
    align-self: stretch;
    justify-self: stretch;
  }

  .hero-image-wrap::after {
    background:
      linear-gradient(to right, #0a0a0a 0%, transparent 4%, transparent 96%, #0a0a0a 100%),
      linear-gradient(to bottom, #0a0a0a 0%, transparent 4%, transparent 94%, #0a0a0a 100%);
  }

  .hero-image {
    width: 100%;
    max-height: min(52vh, 420px);
    object-fit: contain;
    object-position: center center;
    -webkit-mask-image:
      linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to right, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, #000 3.5%, #000 96.5%, transparent 100%);
    mask-composite: intersect;
  }

  .hero-image-placeholder {
    min-height: min(52vh, 420px);
  }
}

.hero-background--light {
  background-color: #ffffff;
}

.hero-background--light .hero-layout::before {
  background: linear-gradient(
    to right,
    #ffffff 0%,
    #ffffff 28%,
    rgba(255, 255, 255, 0.92) 42%,
    rgba(255, 255, 255, 0.7) 58%,
    rgba(255, 255, 255, 0.35) 75%,
    rgba(255, 255, 255, 0.08) 90%,
    transparent 100%
  );
}

.hero-background--light .hero-image-wrap::after {
  background:
    linear-gradient(to bottom, transparent 55%, rgba(255, 255, 255, 0.6) 80%, #ffffff 100%),
    linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.15) 8%, transparent 20%);
}

.hero-background--light .hero-copy::before {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.55) 45%,
    rgba(255, 255, 255, 0.2) 72%,
    transparent 100%
  );
}

@media (max-width: 768px) {
  .hero-background--light .hero-image-wrap::after {
    background: linear-gradient(to bottom, transparent 72%, rgba(255, 255, 255, 0.55) 90%, #ffffff 100%);
  }
}
</style>
