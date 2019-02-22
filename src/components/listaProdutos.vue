<template>
  <div>
    <div class="album py-5 bg-light">
      <div class="container">
        <div hidden>
          <h6 class="text-center">Aguarde um instante...</h6>
        </div>

        <div>
          <div></div>

          <h6 class="text-center">Nenhum resultado encontrado.</h6>

          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Nome Produto</th>
                <th scope="col">Estoque</th>
                <th scope="col">Preço</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tab in tabelas" :key="tab.id">
                <td>{{tab.id}}</td>
                <td>{{tab.nome}}</td>
                <td>{{tab.estoque}}</td>
                <td>{{tab.preco}}</td>
                <td>
                  <span class="text-success font-weight-bold" hidden>Ativo</span>
                  <span class="text-danger font-weight-bold" hidden>Inativo</span>
                </td>
                <td class="buttons-actions">
                  <button class="btn btn-outline-dark">Editar</button>
                  <button class="btn btn-outline-dark">Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="col-lg-12 mt-5" hidden>
            <div class="col-md-8 offset-md-2">
              <div class="alert alert-success feedback">
                <a class="text-uppercase font-weight-bold float-right">Desfazer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "listaProdutos",

  data() {
    return {
      headers: [
        { text: "ID", value: "id", align: "center" },
        { text: "nome", value: "nome", align: "center" },
        { text: "Estoque", value: "estoque", align: "center" },
        { text: "Preco", value: "preco", align: "center" }
      ],
      tabelas: []
    };
  },

  mounted() {
    this.read();
  },

  methods: {
    Tabela: function({ id, nome, estoque, preco }) {
      this.id = id;
      this.nome = nome;
      this.estoque = estoque;
      this.preco = preco;
    },
    read() {
      this.axios.get("http://127.0.0.1:8000/api/produtos").then(({ data }) => {
        this.tabelas = data;
        console.log(data);
      });
    }
  }
};
</script>

<style>
#tabProd {
  margin: 2%;
  margin-top: 0%;
}
</style>
