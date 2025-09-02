export default defineEventHandler(async () => {
  // Return Vue template string with Hero component for homepage
  return {
    template:
      '<Hero :title="props.title" :content="props.content" :image="props.image" :buttons="props.buttons" />',
    props: {
      title: "Products Component",
      content:
        "This is a dynamic Products component rendered from API template string. It demonstrates how Vue template strings can be fetched from API and rendered dynamically with custom props.",
      image: "/images/hero03.jpeg",
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
