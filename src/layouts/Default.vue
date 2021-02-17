<template lang="html">
  <div class="layout">
    <transition name="fade">
      <app-menu v-show="isAppMenuVisible" />
    </transition>
    <div
      class="button"
      :class="{ 'button--inverted': isAppMenuVisible }"
      @click="showAppMenu()"
    >
      <svg viewBox="0 0 100 80" width="80" height="50">
        <rect width="100" height="2"></rect>
        <rect y="30" width="100" height="2"></rect>
      </svg>
    </div>

    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import AppMenu from '~/components/AppMenu.vue';

export default {
  components: {
    AppMenu,
  },

  data() {
    return {
      isAppMenuVisible: false,
    };
  },

  methods: {
    showAppMenu() {
      this.isAppMenuVisible = !this.isAppMenuVisible;
    },
  },
};
</script>

<style lang="scss">
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.button {
  position: absolute;
  z-index: 10000;
  top: 0;
  right: 0;
  margin: 2rem;
  font-weight: 400;
  cursor: pointer;

  &--inverted {
    fill: #fff;
  }
}

.fade-enter-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
