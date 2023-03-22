<template>
<globalconfig></globalconfig>
<virtualmachine></virtualmachine>
  </template>
  
  <script>
import globalconfig from './components/globalconfig.vue';
import virtualmachine from './components/virtualmachine.vue';
  export default {
    name: 'HomeView',
    components: {
  
    globalconfig,
    virtualmachine
    }
  }
  </script>