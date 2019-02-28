<template>
  <header>
    <v-toolbar color="black">
      <v-toolbar-side-icon color="white"></v-toolbar-side-icon>
      <v-toolbar-title id="pmz">PMZ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat color="white">Produtos</v-btn>
        <v-btn flat color="white">Categorias</v-btn>
        <v-btn flat color="white">Sair</v-btn>
      </v-toolbar-items>
    </v-toolbar>

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
#pmz {
  color: white;
}
</style>
