<template>
  <div>
    <!-- Render all components from API -->
    <DynamicTemplate
      v-for="(component, index) in apiData.components"
      :key="index"
      :template="component.template"
      :props="component.props"
    />
  </div>
</template>

<script setup>
// Fetch components data from API
const { data: apiData } = await useFetch("/api/products-template", {
  default: () => ({
    components: [
      {
        template:
          '<Hero :title="props.title" :content="props.content" :image="props.image" :buttons="props.buttons" />',
        props: {
          title: "Fallback Products Title",
          content: "Fallback Products Content",
          image: "/images/hero01.jpeg",
        },
      },
      {
        template:
          '<Products :title="props.title"  :products="props.products" />',
        props: {
          title: "Fallback Products Title",
          products: [],
        },
      },
    ],
  }),
});
</script>
