<template>
  <div>
    <div id="tabProd">
      <v-data-table :headers="headers" :items="getTabelas" class="elevation-1" item-key="id">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.id }}</td>
          <td class="text-xs-center">{{ props.item.nome }}</td>
          <td class="text-xs-center">{{ props.item.estoque }}</td>
          <td class="text-xs-center">{{ props.item.preco }}</td>
          <td>
            <button
              class="text-xs-center btn btn-outline-dark"
              @click="decisao(props.item.id)"
            >Excluir</button>
            <button class="text-xs-center btn btn-outline-dark">Editar</button>
          </td>
        </template>
      </v-data-table>
    </div>

    <div>
      <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Exclusao de item</v-card-title>
            <v-card-text>Tem certeza que deseja excluir o item?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="dialog = false">Cancelar</v-btn>
              <v-btn color="green darken-1" flat @click="excluir()">Sim</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>

    <v-snackbar
      :color="color"
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>


<script>
export default {
  name: "listaProdutos",
  props: ["attprodutos"],

  data() {
    return {
      headers: [
        { text: "ID", value: "id", align: "center" },
        { text: "nome", value: "nome", align: "center" },
        { text: "Estoque", value: "estoque", align: "center" },
        { text: "Preco", value: "preco", align: "center" },
        { text: "Ações", value: "", align: "left" }
      ],
      tabelas: [],
      dialog: false,
      exc: 0,
      snackbar: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      text: "",
      color: "green"
    };
  },

  watch: {
    attprodutos(val) {
      if (val) {
        this.read();
      }
    },

    eventoModal() {
      this.dialog = !this.dialog;
    }
  },

  mounted() {
    this.read();
  },

  computed: {
    getTabelas() {
      return this.tabelas;
    }
  },

  methods: {
    read() {
      this.axios.get("http://127.0.0.1:8000/api/produtos").then(({ data }) => {
        this.tabelas = data;
      });
    },

    decisao(id) {
      console.log(id);
      this.dialog = true;
      this.exc = id;
    },
    excluir() {
      this.dialog = false;
      var id = this.exc;

      this.axios
        .get("http://127.0.0.1:8000/api/produtos/excluir/" + id)
        .then(({ data }) => {
          console.log(data);
          if (data.codigo == 1) {
            this.snackbar = true;
            this.text = data.msg;
            this.y = "bottom";
            this.read();
          } else {
            this.snackbar = true;
            this.text = data.msg;
            this.color = "red";
            this.read();
          }
        });
    }
  }
};
</script>

<style>
</style>
