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
      title: "Welcome to my test task!",
      content: "Manufacture inspiring custom products...",
      image: "/images/hero01.jpeg",
      buttons: [
        {
          id: "get-started",
          text: "Get Started",
          link: "/get-started",
          icon: "HugeiconsGithub",
        },
        {
          id: "learn-more",
          text: "Learn More",
          variant: "outline",
          link: "/learn-more",
          icon: "HugeiconsLinkedin",
        },
      ],
    },
  }),
});
</script>
