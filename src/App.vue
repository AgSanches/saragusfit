<template>
  <div id="app">
    <PreloaderComponent></PreloaderComponent>
    <router-view />
  </div>
</template>

<script>
import PreloaderComponent from "./components/general/PreloaderComponent.vue";

export default {
  name: "App",
  components: {
    PreloaderComponent
  }
};
</script>

<style lang="scss">
$primary: #d76487;
$secondary: #1f2b3a;
$tertiary: #194f92;

body,
html {
  width: 100vw;
  overflow-x: hidden;
}

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;

  &-black {
    background-color: rgba(0, 0, 0, 0.7);
  }
}

.separate-1 {
  clear: both;
  height: 2rem;
}

.separate-2 {
  clear: both;
  height: 4rem;
}

.separate-3 {
  clear: both;
  height: 5.5rem;
}

.separate-4 {
  clear: both;
  height: 6.5rem;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $primary;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

html {
  scroll-behavior: smooth;
}

@import "styles/fonts";
@import "~bootstrap/scss/bootstrap";
</style>
