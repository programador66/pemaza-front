<template>
  <div>
    <div id="tabProd">
      <v-data-table :headers="headers" :items="tabelas" class="elevation-1" item-key="id">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.id }}</td>
          <td class="text-xs-center">{{ props.item.nome }}</td>
          <td class="text-xs-center">{{ props.item.estoque }}</td>
          <td class="text-xs-center">{{ props.item.preco }}</td>
        </template>
      </v-data-table>
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
</style>
