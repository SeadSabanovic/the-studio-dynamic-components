<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :class="imageClasses"
    :loading="loading"
    :fetchpriority="fetchpriority"
    :sizes="sizes"
    :width="width"
    :height="height"
    @load="onImageLoad"
    @error="onImageError"
  />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "",
  },
  loading: {
    type: String,
    default: "lazy",
    validator: (value) => ["lazy", "eager"].includes(value),
  },
  fetchpriority: {
    type: String,
    default: "auto",
    validator: (value) => ["high", "low", "auto"].includes(value),
  },
  sizes: {
    type: String,
    default: undefined,
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const isLoaded = ref(false);
const hasError = ref(false);

const imageClasses = computed(() => {
  const baseClasses = "transition-opacity duration-500 ease-in-out";
  const opacityClass = isLoaded.value ? "opacity-100" : "opacity-0";
  const customClasses = props.class || "";

  return `${baseClasses} ${opacityClass} ${customClasses}`.trim();
});

const onImageLoad = () => {
  isLoaded.value = true;
  hasError.value = false;
};

const onImageError = () => {
  hasError.value = true;
  isLoaded.value = false;
};
</script>
