<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Legal first name*" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Email*" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password*" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <!-- <div class="container" style="margin-top:2%;">
      <b-jumbotron header-level="1" lead="Cadastro de  Produtos">
        <p>Produtos</p>
        <div>
          <b-form-input v-model="produto" type="text" placeholder="Nome produto" required/>
          <div class="mt-4"></div>
        </div>
        <div>
          <b-form-input v-model="preco" type="number" placeholder="preco"/>
          <div class="mt-4"></div>
        </div>
        <div>
          <b-form-input v-model="estoque" type="number" placeholder="estoque"/>
          <div class="mt-4"></div>
        </div>
        <div>
          <b-form-select v-model="cat" :options="options" type="text" placeholder="selected"/>

          <div class="mt-4"></div>
        </div>
        <b-button v-on:click="voltarProdutos();">Voltar</b-button>
        <b-button v-on:click="read();">Cadastrar</b-button>
      </b-jumbotron>
    </div>

    <div>
      <b-modal v-model="modalShow">inserido com sucesso!</b-modal>
    </div>

    <div>
      <b-modal v-model="modalErro">Erro ao cadastrar!</b-modal>
    </div>

    <div>
      <b-alert v-model="alert" dismissible fade variant="danger" class="m-1">Erro ao Cadastrar</b-alert>
    </div>-->
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
      dialog: false
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
            this.produto = null;
            this.estoque = null;
            this.preco = null;
            this.cat = null;
            voltarProdutos();
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
