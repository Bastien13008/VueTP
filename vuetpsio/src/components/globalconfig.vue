<template>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <!-- App CSS -->
      <link rel="stylesheet" type="text/css" href="main.css">
  </head>

  <div class="row">
            <div class="col mt-3">
                <div class="card">
                    <div class="card-header">
                        Configuration Globale
                    </div>
                    <div class="card-body">
                        <div class="form-row">
                            <label for="inputName">Nom</label>
                            <input type="text" class="form-control" id="inputName">
                        </div>
                        <div class="form-row">
                            <label for="inputDescription">Description</label>
                            <textarea class="form-control" id="inputDescription" rows="3"></textarea>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputTemplateID">ID du Template</label>
                                <input type="text" class="form-control" id="inputTemplateID">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputHostnameTemplate">Nom d'hôte du Template</label>
                                <input type="text" class="form-control" id="inputHostnameTemplate">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputMemory">Memoire</label>
                                <input type="text" class="form-control" id="inputMemory">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputDisksize">Taille du HDD</label>
                                <input type="text" class="form-control" id="inputDisksize">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputCore">Coeur</label>
                                <input type="text" class="form-control" id="inputCore">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputSocket">Socket</label>
                                <input type="text" class="form-control" id="inputSocket">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputLogin">Login</label>
                                <input type="text" class="form-control" id="inputLogin">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword">Mot de passe</label>
                                <input type="text" class="form-control" id="inputPassword">
                            </div>
                        </div>

                        <div class="form-row">
                            <label for="inputSSHKey">Clé SSH</label>
                            <textarea class="form-control" id="inputSSHKey" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    
    <script>
    export default {
      name: 'HelloWorld',
      props: {
        msg: String
      }
    }
  
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
  
  .trash-fill:before {
    content: url("data:image/svg+xml,<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z'/></svg>");
    width: 5px;
    float: center;
    margin-right: 0px;
    margin-top: 0px;
  }
  
  .x-square-fill:before {
    content: url("data:image/svg+xml,<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-x-square-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'/></svg>");
    width: 5px;
    float: center;
    margin-right: 0px;
    margin-top: 0px;
  }
  
  @media (min-width: 576px) {
    .card-columns {
        column-count: 1;
   }
  }
  @media (min-width: 700px) {
    .card-columns {
        column-count: 2;
   }
  }
  @media (min-width: 1200px) {
    .card-columns {
        column-count: 3;
   }
  }
  @media (min-width: 1600px) {
    .card-columns {
        column-count: 4;
   }
  
    }
    </style>
    