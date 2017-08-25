nutrifamiMobile.directive('leccionInfo', function () {
    return {
        restrict: 'E',
        scope: {
            leccion: '=',
            modulo: '=',
            index: '@'
        },
        templateUrl: 'views/directives/leccionInfo.drt.html',
        link: function ($scope, $element, $attrs) {
            $scope.porcentajeAvance = function () {
                return(100 / $scope.totalLecciones() * $scope.avance.leccionesTerminadas);
            };
            $scope.click = function () {
                $scope.$parent.irALeccion($scope.index);
            };
        }
    };
});