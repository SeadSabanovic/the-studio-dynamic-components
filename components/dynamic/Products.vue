<template>
  <section class="py-16" :aria-labelledby="titleId">
    <BaseContainer class="flex flex-col gap-8 max-w-[1280px]">
      <h2 :id="titleId" class="text-lg md:text-2xl text-center" tabindex="0">
        {{ title }}
      </h2>

      <div
        v-if="products && products.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        role="list"
        :aria-label="`${title} products list`"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="rounded-[2px] overflow-hidden"
          role="listitem"
          :aria-label="`${product.title} product card`"
          :aria-describedby="`product-${product.id}-description`"
        >
          <!-- Product Image with discount badge and customization options -->
          <div class="relative overflow-hidden aspect-[200/250]">
            <BaseAnimatedImage
              v-if="product.image"
              :src="product.image"
              :alt="product.title"
              class="w-full h-full object-cover absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
              loading="lazy"
              width="400"
              height="400"
            />

            <!-- Discount Badge -->
            <span
              v-if="product.discount"
              class="bg-[#11a66a] text-white text-xs font-bold px-2 py-1 absolute top-0 right-0 rounded-bl-[2px]"
              role="status"
              aria-label="Discount: {{ product.discount }}"
            >
              {{ product.discount }}
            </span>

            <!-- Customization Options -->
            <span
              v-if="product.customizationOptions"
              class="inline-block rounded-full border border-[#ABBED9] bg-light-gray px-3 py-1 absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-[#2d5d9f] whitespace-nowrap"
              role="status"
              :aria-label="`${product.customizationOptions} available`"
            >
              {{ product.customizationOptions }}
            </span>
          </div>

          <!-- Product Info -->
          <div class="pt-6 text-center">
            <!-- Product Title -->
            <h3
              v-if="product.title"
              class="text-md font-semibold"
              :id="`product-${product.id}-title`"
            >
              {{ product.title }}
            </h3>

            <!-- Price -->
            <p
              v-if="product.price"
              class="text-sm text-gray-900 mt-1"
              :aria-label="`Price: ${product.price}`"
            >
              {{ product.price }}
            </p>

            <!-- Description -->
            <p
              v-if="product.description"
              class="text-gray-600 text-sm mb-4 leading-relaxed my-3"
              :id="`product-${product.id}-description`"
            >
              {{ product.description }}
            </p>

            <!-- Action Button -->
            <BaseButton
              variant="outline-product"
              size="sm"
              :aria-label="`Get quote for ${product.title}`"
              :aria-describedby="`product-${product.id}-description`"
              @click="handleProductAction(product)"
              @keydown.enter="handleProductAction(product)"
              @keydown.space="handleProductAction(product)"
            >
              {{ product.actionText }}
            </BaseButton>
          </div>
        </div>
      </div>

      <!-- Fallback if no products -->
      <div v-else class="text-center py-12" role="status" aria-live="polite">
        <p class="text-gray-500 text-lg">
          No products available at the moment.
        </p>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
/**
 * @typedef {Object} Product
 * @property {string} id - Unique identifier for the product
 * @property {string} title - Product title
 * @property {string} image - Product image URL
 * @property {string} price - Product price text
 * @property {string} description - Product description
 * @property {string} [discount] - Discount badge text
 * @property {string} [customizationOptions] - Customization options text
 * @property {string} [actionText] - Action button text
 * @property {string} [actionLink] - Optional action link
 */

defineProps({
  title: {
    type: String,
    default: "Types of Custom Patches",
  },
  products: {
    type: Array,
    default: () => [],
  },
});

const titleId = "products-title";

// Handle product action button clicks
const handleProductAction = (product) => {
  if (product.actionLink) {
    navigateTo(product.actionLink);
  }
};
</script>
