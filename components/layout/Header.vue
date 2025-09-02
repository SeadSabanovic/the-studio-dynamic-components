<script setup>
import { navigationItems } from "~/constants/navigation";
</script>

<template>
  <header class="text-white z-50 relative">
    <div id="discount-banner" class="bg-[#2d2d2d]">
      <BaseContainer class="flex justify-evenly items-center text-xs h-9">
        <a
          href="https://github.com/SeadSabanovic/the-studio-dynamic-components"
          target="_blank"
          class="flex items-center gap-2"
          aria-label="Navigate to GitHub"
        >
          <nuxt-icon name="HugeiconsGithub" class="text-lg" filled />
          the-studio-dynamic-components
        </a>
        <a
          href="https://www.linkedin.com/in/ssabanovic/"
          target="_blank"
          class="flex items-center gap-2"
          aria-label="Navigate to LinkedIn"
        >
          <nuxt-icon name="HugeiconsLinkedin" class="text-lg" filled />
          Sead Sabanovic
        </a>
      </BaseContainer>
    </div>
    <nav
      class="px-4 bg-gradient-to-r from-[#2d5d9f] to-[#708cb2]"
      role="navigation"
      aria-label="Main navigation"
    >
      <BaseContainer class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center"
          aria-label="Navigate to home"
          role="link"
        >
          <img
            src="/images/the-studio-logo.svg"
            alt="The Studio Logo"
            class="h-9"
          />
        </NuxtLink>

        <!-- Navigation -->
        <ul class="flex space-x-8" role="menubar">
          <li v-for="item in navigationItems" role="none">
            <NuxtLink
              :key="item.label"
              :to="item.href"
              :aria-label="`Navigate to ${item.label}`"
              role="menuitem"
              class="px-1 font-body font-display whitespace-nowrap font-medium antialiased relative after:absolute after:top-full after:left-1/2 after:h-px after:w-full after:origin-center after:bg-white/70 after:transition-opacity after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100 focus:after:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#2d5d9f]"
              :class="{ 'after:opacity-100': $route.path === item.href }"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </BaseContainer>
    </nav>
  </header>
</template>
