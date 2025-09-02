export default defineEventHandler(async () => {
  // Return Vue template string with Hero component for homepage
  return {
    template:
      '<Hero :title="props.title" :content="props.content" :image="props.image" :buttons="props.buttons" />',
    props: {
      title: "Welcome to my test task!",
      content:
        "Presenting my dynamic template system - Hero and Products components are rendered from API template strings in real-time.",
      image: "/images/hero01.jpeg",
      buttons: [
        {
          id: "hero-page",
          text: "Hero Component",
          link: "/hero",
        },
        {
          id: "products-page",
          text: "Products Component",
          variant: "outline",
          link: "/products",
        },
      ],
    },
  };
});
