<template>
  <div id="app">
    <y-textarea />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import YTextarea from './packages/y-textarea';

@Component({
  components: {
    YTextarea,
  },
})
export default class App extends Vue {}
</script>
