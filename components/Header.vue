<template lang="pug">
  header.header
    nuxt-link.header__logo(to="/",@click.right.native.prevent="showChanges")
      af-logo
      h1.header__logo__text Analogfolk
    .header__toggler
      .header__toggler__button(@click="toggle")
        div(:class="{ 'icon menu': !visible, 'icon close': visible }")
</template>

<script>
import afLogo from '@/components/icons/af'

export default {
  name: 'Header',
  components: {
    afLogo
  },
  computed: {
    visible() {
      return this.$store.state.visibleHeader
    }
  },
  methods: {
    toggle() {
      this.$store.commit('toggle', 'visibleHeader')
    },
    showChanges() {
      this.$router.push('/changelog')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 995;
  padding: 0 15px;
  display: flex;
  position: fixed;
  flex-direction: row;
  background-color: #ffffff;

  &__logo {
    display: flex;
    width: 400px;

    svg {
      width: 200px;
    }
  }

  &__toggler {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    &__button {
      display: flex;
      width: 25px;
      height: 20px;
      cursor: pointer;
    }
  }
}
</style>
