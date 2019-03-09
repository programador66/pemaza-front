<template>
  <div>
    <div>
      <navBar/>
    </div>
    <div>
      <section class="jumbotron pb-1">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h5 class="text-muted">Bem vindo (a) ao</h5>
              <h3 class="jumbotron-heading">Sistema TI</h3>
            </div>
            <div class="col-sm-6 text-right position-relative pt-3">
              <button class="btn btn-outline-dark" @click="modalActive = true">Novo cadastro</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
      <listaProdutos :attprodutos="atualizaLista"/>
    </div>

    <div>
      <cliente :modal="modalActive" @modalDialog="modalDialog" @attprodutos="attprodutos"/>
    </div>
  </div>
</template>

 <script>
import navBar from "./navBar";
import listaProdutos from "./listaProdutos";
import toolbarBottom from "./toolbarBottom";
import cliente from "./cliente";

export default {
  name: "HelloWorld",
  components: {
    navBar,
    listaProdutos,
    toolbarBottom,
    cliente
  },
  data() {
    return {
      msg: "teste",
      modalActive: false,
      atualizaLista: false
    };
  },

  methods: {
    cadastrarCliente() {
      this.$router.push("/cliente");
    },

    modalDialog(value) {
      this.modalActive = value;
    },
    attprodutos(val) {
      this.atualizaLista = val;
    }
  }
};
</script>

<style>
#footer {
  margin-top: 15%;
}
</style>
