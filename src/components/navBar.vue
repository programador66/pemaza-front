<template>
  <header>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container d-flex justify-content-between">
        <a href="./listaProdutos" class="navbar-brand d-flex align-items-center">
          <strong>PMZ</strong>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>

    <section class="jumbotron pb-1">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h5 class="text-muted">Bem vindo (a) ao</h5>
            <h3 class="jumbotron-heading">Sistema TI</h3>
          </div>
          <div class="col-sm-6 text-right position-relative pt-3">
            <button class="btn btn-outline-dark" v-on:click="cadastrarCliente()">Novo cadastro</button>
          </div>
        </div>
      </div>
    </section>
    <listaProdutos/>
  </header>
</template>

<script>
import listaProdutos from "./listaProdutos";

export default {
  name: "navBar",
  components: {
    listaProdutos
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    cadastrarCliente() {
      this.$router.push("/cliente");
    },
    listaProdutos() {
      this.$router.push("/listaProdutos");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
