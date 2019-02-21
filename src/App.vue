<template>
  <div id="app">
    <router-view/>
    <section class="jumbotron pb-1">
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h5 class="text-muted">Bem vindo (a) ao</h5>
        <h3 class="jumbotron-heading">Sistema TI</h3>
      </div>
      <div class="col-sm-6 text-right position-relative pt-3">
        <button class="btn btn-outline-dark">
          Novo cadastro
        </button>
      </div>
    </div>
  </div>
</section>

<div class="album py-5 bg-light">
  <div class="container">
    <div hidden>
      <h6 class="text-center">
        Aguarde um instante...
      </h6>
    </div>

    <div>
      <div ></div>

     
        <h6 class="text-center">
          Nenhum resultado encontrado.
        </h6>
      

      
        <table class="table">
          <thead class="thead-light">
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nome completo</th>
            <th scope="col">Registro</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr >
            <td>  </td>
            <td>  </td>
            <td>
              <span  class="text-success font-weight-bold" hidden>
                Ativo
              </span>
              <span  class="text-danger font-weight-bold" hidden>
                Inativo
              </span>
            </td>
            <td class="buttons-actions">
              <button class="btn btn-outline-dark">
                Editar
              </button>
              <button class="btn btn-outline-dark" >
                Excluir
              </button>
            </td>
          </tr>
          </tbody>
        </table>

        <div class="col-lg-12 mt-5" hidden>
          <div class="col-md-8 offset-md-2">
            <div class="alert alert-success feedback">
              
              <a class="text-uppercase font-weight-bold float-right" >Desfazer</a>
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
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
