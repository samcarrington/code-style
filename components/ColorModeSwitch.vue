<script setup lang='ts'>
defineProps({
  size: {
    type: String,
    default: 'w-8 h-8'
  },
  spacing: {
    type: String,
    default: 'p-0'
  }
})

const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <button aria-label='Color Mode' class='color-mode-selector flex relative' @click='onClick'>
    <ColorScheme placeholder='...'>
      <div class='selector absolute bg-white'></div>
      <Icon name='heroicons-outline:moon'/>
      <Icon name='heroicons-outline:sun' class='text-yellow-200 hover:text-yellow-600 ml-2'  />
    </ColorScheme>
  </button>
</template>

<style lang='postcss'>

  button.color-mode-selector {
    border: 1px solid gray;
    cursor: pointer;
    border-radius: 15px;
    width: 55px;
    height: 26px;
    box-shadow: 0 0 0 1px ffffff4d;
    padding-top: 2px;
    padding-left: 3px;

  }

  .selector {
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.57,.33,.19,.97);
    transition-property: left;
    left: 2px;
    top: 2px;
    bottom: 0;
    border-radius: 50%;
    width: 20px;
    height: 20px;

    html.dark & {
      left: 31px;
    }

  }

</style>
