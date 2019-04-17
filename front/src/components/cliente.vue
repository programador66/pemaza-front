<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro de Produtos</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field v-model="produto" label="Nome do Produto*" required></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-text-field v-model="preco" label="Preço*" prefix="R$" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="estoque" label="Estoque*" type="text" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select :items="options" v-model="cat" label="Categoria*" required></v-select>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat v-on:click="read()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import listaProdutos from "./listaProdutos";
export default {
  name: "cliente",
  props: ["modal"],
  components: {},
  data() {
    return {
      msg: "clientes",
      options: [{ text: "selecione", value: null }],
      produto: null,
      preco: null,
      estoque: null,
      cat: null,
      modalShow: false,
      modalErro: false,
      alert: false,
      dialog: false,
      mask: "###.###,##"
    };
  },

  created() {
    this.listaCategria();
  },
  watch: {
    modal() {
      this.dialog = this.modal;
    },

    dialog() {
      this.$emit("modalDialog", this.dialog);
    }
  },
  methods: {
    read() {
      if (
        this.produto == null ||
        this.estoque == null ||
        this.preco == null ||
        this.cat == null
      ) {
        this.alert = true;
      }
      this.axios
        .post("http://127.0.0.1:8000/api/produtos", {
          nomeProd: this.produto,
          estoqueProd: this.estoque,
          precoProd: this.preco,
          prodCombo: this.cat
        })
        .then(({ data }) => {
          console.log(data);

          if (data.codigo == 1) {
            console.log("ok");
            this.modalShow = true;
            this.dialog = false;
            this.produto = null;
            this.estoque = null;
            this.preco = null;
            this.cat = null;
            this.$emit("attprodutos", true);
          } else {
            console.log("erro");
            this.modalErro = true;
          }
        });
    },
    listaCategria() {
      this.axios
        .get("http://127.0.0.1:8000/api/categorias")
        .then(({ data }) => {
          this.options = data.map(c => {
            console.log(c);
            return {
              text: c.nome,
              value: c.id
            };
          });
          this.options.unshift({ text: "selecione", value: null });
        });
    },
    voltarProdutos() {
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .container{
  margin-top: 2%;
} */
</style>
