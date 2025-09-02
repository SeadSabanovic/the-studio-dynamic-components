<template>
  <div>
    <component :is="renderedComponent" v-bind="componentProps" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import Hero from "./Hero.vue";

const props = defineProps({
  template: {
    type: String,
    required: true,
  },
  props: {
    type: Object,
    default: () => ({}),
  },
});

// Parse the template string and create a component
const renderedComponent = computed(() => {
  if (props.template.includes("Hero")) {
    // Return Hero component directly
    return Hero;
  }

  // Return a fallback component with helpful message
  return {
    template: `
        <p class="text-destructive my-4">The template "${props.template}" could not be rendered.</p>
    `,
  };
});

// Pass the props to the component
const componentProps = computed(() => {
  if (props.template.includes("Hero")) {
    return {
      title: props.props.title,
      content: props.props.content,
      image: props.props.image,
      buttons: props.props.buttons,
    };
  }

  return {};
});
</script>
