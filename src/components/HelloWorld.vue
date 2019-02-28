<template>
  <div>
    <div>
      <navBar/>
    </div>
    <div>
      <listaProdutos/>
    </div>
  </div>
</template>

 <script>
import navBar from "./navBar";
import listaProdutos from "./listaProdutos";

export default {
  name: "Hellowold",
  components: {
    navBar,
    listaProdutos
  },
  return() {
    msg: "teste";
  }
};
</script>
 
</script>

<style>
</style>
