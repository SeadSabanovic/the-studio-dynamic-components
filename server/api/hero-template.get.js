export default defineEventHandler(async () => {
  // Return different Vue template string with Hero component for hero page
  return {
    template:
      '<Hero :title="props.title" :content="props.content" :image="props.image" :metadata="props.metadata" />',
    props: {
      title: "Hero Component",
      content:
        "This is a dynamic Hero component rendered from API template string. It demonstrates how Vue template strings can be fetched from API and rendered dynamically with custom props.",
      image: "/images/hero02.jpeg",
      buttons: [
        {
          id: "back-to-home",
          text: "Back to Home",
          link: "/",
          icon: "HugeiconsArrowTurnBackward",
        },
      ],
    },
  };
});
