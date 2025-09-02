export default defineEventHandler(async () => {
  // Return array of components with their templates and props
  return {
    components: [
      {
        template:
          '<Hero :title="props.title" :content="props.content" :image="props.image" :buttons="props.buttons" />',
        props: {
          title: "Products Component",
          content:
            "Manufacture inspiring custom products with low MOQs, talented designers, and amazing factories in one platform.",
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
      },
      {
        template:
          '<Products :title="props.title" :products="props.products" />',
        props: {
          title: "Types of Custom Patches",
          products: [
            {
              id: "embroidered-patches",
              title: "Embroidered Patches",
              image: "/images/patch.webp",
              price: "From $0.30 per item",
              description:
                "The classic embroidered look with added depth for stitched emblems.",
              discount: "40% OFF",
              customizationOptions: "57+ customization options",
              actionText: "Quick Quote",
              actionLink: "#",
            },
            {
              id: "woven-patches",
              title: "Woven Patches",
              image: "/images/patch.webp",
              price: "From $0.38 per item",
              description:
                "Woven lines and refined details for professional custom patches.",
              discount: "40% OFF",
              customizationOptions: "35+ customization options",
              actionText: "Quick Quote",
              actionLink: "#",
            },
            {
              id: "leather-patches",
              title: "Leather Patches",
              image: "/images/patch.webp",
              price: "From $1.00 per item",
              description:
                "Durable and elegant leather that offers a premium, rugged aura.",
              discount: "40% OFF",
              customizationOptions: "38+ customization options",
              actionText: "Quick Quote",
              actionLink: "#",
            },
            {
              id: "chenille-patches",
              title: "Chenille Patches",
              image: "/images/patch.webp",
              price: "From $0.66 per item",
              description:
                "Soft to touch but visually striking. Chenille: the patch that pops.",
              discount: "40% OFF",
              customizationOptions: "29+ customization options",
              actionText: "Quick Quote",
              actionLink: "#",
            },
          ],
        },
      },
    ],
  };
});
