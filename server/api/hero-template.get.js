export default defineEventHandler(async () => {
  // Return array of components with their templates and props
  return {
    components: [
      {
        template:
          '<Hero :title="props.title" :content="props.content" :image="props.image" :buttons="props.buttons" />',
        props: {
          title: "Hero Component",
          content:
            "Manufacture inspiring custom products with low MOQs, talented designers, and amazing factories in one platform.",
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
      },
    ],
  };
});
