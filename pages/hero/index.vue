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
const { data: apiData } = await useFetch("/api/hero-template", {
  default: () => ({
    components: [
      {
        template:
          '<Hero :title="props.title" :content="props.content" :image="props.image" :buttons="props.buttons" />',
        props: {
          title: "Fallback Hero Title",
          content: "Fallback Hero Content",
          image: "/images/hero02.jpeg",
        },
      },
    ],
  }),
});
</script>
