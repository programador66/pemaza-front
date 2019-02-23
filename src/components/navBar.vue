<template>
  <header>
    <div class="collapse bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">About</h4>
            <p class="text-muted">
              Add some information about the album below, the author, or any other background context.
              Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some
              social networking sites or contact information.
            </p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">Contact</h4>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-white">Follow on Twitter</a>
              </li>
              <li>
                <a href="#" class="text-white">Like on Facebook</a>
              </li>
              <li>
                <a href="#" class="text-white">Email me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand d-flex align-items-center">
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
