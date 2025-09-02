<template>
  <section
    role="banner"
    aria-labelledby="hero-title"
    aria-describedby="hero-description"
    class="relative bg-[#F9FAFC] py-20 min-h-[60lvh] max-h-[900px] flex flex-col justify-center"
  >
    <BaseContainer class="relative z-[1]">
      <div class="flex flex-col gap-6 max-w-2xl">
        <h1 v-if="title" id="hero-title">{{ title }}</h1>
        <p
          v-if="content"
          id="hero-description"
          class="text-[16px] md:text-[20px]"
        >
          {{ content }}
        </p>
        <div v-if="buttons && buttons.length > 0" class="flex flex-wrap gap-4">
          <BaseButton
            v-for="button in buttons"
            :key="button.id"
            :variant="button.variant"
            @click="handleButtonClick(button)"
            :aria-label="button.text"
          >
            {{ button.text }}
            <nuxt-icon
              v-if="button.icon"
              :name="button.icon"
              class="text-lg"
              filled
            />
          </BaseButton>
        </div>
      </div>
    </BaseContainer>

    <div
      v-if="image"
      class="absolute z-[0] inset-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#F9FAFC] after:to-transparent"
    >
      <BaseAnimatedImage
        :src="image"
        alt="Hero Image"
        class="size-full object-cover"
        loading="eager"
        fetchpriority="high"
        width="1920"
        height="1080"
      />
    </div>
  </section>
</template>

<script setup>
// Button type definition for reference
/**
 * @typedef {Object} Button
 * @property {string} id - Unique identifier for the button
 * @property {string} text - Button display text
 * @property {'default' | 'outline'} [variant] - Button style variant
 * @property {string} link - Navigation link when button is clicked
 * @property {string} [icon] - Optional icon name for nuxt-icon component
 */

defineProps({
  title: {
    type: String,
    default: undefined,
  },
  content: {
    type: String,
    default: undefined,
  },
  image: {
    type: String,
    default: undefined,
  },
  buttons: {
    type: Array,
    default: () => undefined,
  },
});

// Handle button click with navigation
const handleButtonClick = (button) => {
  if (button.link) {
    navigateTo(button.link);
  } else {
    console.warn("No link provided for button:", button);
  }
};
</script>
