<template>
  <div>
    <DynamicTemplate :template="apiData.template" :props="apiData.props" />
  </div>
</template>

<script setup>
// Fetch template data from API
const { data: apiData } = await useFetch("/api/products-template", {
  default: () => ({
    template:
      '<Hero :title="props.title" :content="props.content" :image="props.image" />',
    props: {
      title: "Hero Page - Dynamic Component",
      content:
        "This is a dynamic Hero component rendered from API template string on the hero page.",
      image: "/images/hero01.jpeg",
    },
  }),
});
</script>
