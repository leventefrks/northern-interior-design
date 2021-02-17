<template>
  <layout>
    <client-only>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section section1">
          <div>landing page.</div>
        </div>
        <div class="section section2">
          <div>1st slide.</div>
        </div>
        <div class="section section3">
          <div>2nd slide.</div>
        </div>
        <div class="section section4">
          <div>3rd slide.</div>
        </div>
        <div class="section section4">
          <div>4th slide.</div>
        </div>
      </full-page>
    </client-only>
  </layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },

  data() {
    return {
      options: {
        licenseKey: null,
        controlArrows: true,
        scrollBar: false,
      },
    };
  },
};
</script>

<style scoped>
.section {
  text-align: center;
  color: #000;
  font-size: 4rem;
  font-weight: 700;
  user-select: none;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
}
</style>
