<template>
<navbar></navbar>
<globalconfig></globalconfig>
<virtualmachine></virtualmachine>
<vm1></vm1>
<vm2></vm2>
</template>

<style>
</style>

<script>
import navbar from './components/navbar.vue';
import globalconfig from './components/globalconfig.vue';
import virtualmachine from './components/virtualmachine.vue';
import vm1 from './components/vm1.vue';
import vm2 from './components/vm2.vue';


export default{
  name: "App",
  components: {
    navbar,
    globalconfig,
    virtualmachine,
    vm1,
    vm2


  }
}
</script>