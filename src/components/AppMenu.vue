<template lang="html">
  <div class="app-menu">
    <transition name="fade">
      <div>
        <g-link to="/">home.</g-link>
        <g-link to="/work">works.</g-link>
        <g-link to="/contact">contact.</g-link>
        <g-link to="/about">about.</g-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  title: 'AppMenu',
};
</script>

<style lang="scss">
.app-menu {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1b1b2f;
  z-index: 50;
  opacity: 1;
  user-select: none;

  > div {
    display: flex;
    flex-direction: column;
    list-style-type: none;

    a {
      font-size: 3rem;
      font-weight: 500;
      color: #fff;
      cursor: pointer;
      text-decoration: none;

      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }
    }
  }
}

.delay-enter-active {
  transition-duration: 5s;
  transition: opacity 0.6s ease-in-out;
}

.delay-leave-active {
  transition: opacity 0.3s ease-out;
}
.delay-enter,
.delay-leave-to {
  opacity: 0;
}
</style>
