angular.module('simulado').controller('ListaController', function ($scope) {
    $scope.lista = {
        titulo: "Simulado de 2018",
    }

    $scope.digitado = "";
    console.log($scope.digitado);
    
    $scope.opcoes = [
        {
            titulo: "Simulado 10",
            ativo: false
        },
        {
            titulo: "Simulado 9",
            ativo: false
        },
        {
            titulo: "Simulado 8",
            ativo: false
        },
        {
            titulo: "Simulado 7",
            ativo: false
        },
        {
            titulo: "Simulado 6",
            ativo: false
        },
        {
            titulo: "Simulado 5",
            ativo: false
        },
        {
            titulo: "Prova objetiva",
            ativo: true
        },
        {
            titulo: "Prova final",
            ativo: false
        },
        {
            titulo: "Simulado 4",
            ativo: false
        },
        {
            titulo: "Simulado 3",
            ativo: false
        },
        {
            titulo: "Simulado 2",
            ativo: false
        },
        {
            titulo: "Simulado 1",
            ativo: false
        },
    ]

    $scope.subopcoes = [
        {
            subtitulo: "Prova objetiva",
            ativo: true
        },
        {
            subtitulo: "Prova final",
            ativo: false
        },
    ]

    
    $scope.myFunction = function($event){
        var input = $event.path[1].children[1].value;
        console.log("x:", $event.path[1].children[1].value);
        $scope.digitado = input;
    }
})