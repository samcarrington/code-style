<script setup lang="ts">
import MarkdownIt from 'markdown-it';
const { data: markdown } = await useFetch('/api/changelog.md');
const md = new MarkdownIt();
const result = md.render(markdown.value as string);
</script>

<template>
  <div
    class="mt-3 max-w-2xl px-4 py-16 sm:py-8 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 sm:rounded"
  >
    <div
      class="prose prose-gray dark:prose-invert max-w-none"
      v-html="result"
    ></div>
  </div>
</template>

<style lang="postcss">
.prose {
  h2,
  h3,
  h4 {
    a {
      @apply no-underline;
      &:hover {
        @apply border-b border-neutral-600 dark:border-neutral-300;
      }
    }
  }
}
</style>
