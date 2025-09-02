<template>
  <div>
    <DynamicTemplate :template="apiData.template" :props="apiData.props" />
  </div>
</template>

<script setup>
// Fetch template data from API
const { data: apiData } = await useFetch("/api/template", {
  default: () => ({
    template:
      '<Hero :title="props.title" :content="props.content" :image="props.image" :buttons="props.buttons" />',
    props: {
      title: "Fallback Homepage Title",
      content: "Fallback Homepage Content",
      image: "/images/hero01.jpeg",
    },
  }),
});
</script>
