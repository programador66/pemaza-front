<template>
  <header>
    <v-toolbar color="#343a40">
      <v-toolbar-side-icon clipped-left="true" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title id="pmz">PMZ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat color="white" @click="listarProdutos()">Produtos</v-btn>
        <v-btn flat color="white">Categorias</v-btn>
        <v-btn flat color="white">Sair</v-btn>
        <v-btn icon>
          <v-icon color="white">more_vert</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <section>
      <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute dark temporary>
        <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider light></v-divider>

          <v-list-tile v-for="item in items" :key="item.title">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
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
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" },
        { title: "Sair", icon: "exit_to_app" }
      ],
      mini: false,
      right: null
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
