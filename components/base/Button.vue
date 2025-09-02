<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
});

// Simple class mapping
const buttonClasses = computed(() => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-[2px] font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 uppercase flex gap-4";

  const variantClasses = {
    default: "bg-[#2d5d9f] text-white hover:opacity-90 border border-[#2d5d9f]",
    outline: "border border-[#575757] hover:bg-[#575757] hover:text-white",
    "outline-product": "border border-[#d5d5d5] hover:border-[#2d2d2d] w-full",
  };

  const sizeClasses = {
    default: "h-10 px-10 py-3 h-12 text-[14px]",
    sm: "h-8 px-4 py-2 text-sm",
    // Can add more sizes here
  };

  return `${baseClasses} ${variantClasses[props.variant]} ${
    sizeClasses[props.size]
  }`;
});
</script>

<style></style>
