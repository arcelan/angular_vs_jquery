var app = angular.module('x-app',[]);
app.controller('x-controller',function($scope) {
    $scope.angular_name = '';
    $scope.jquery_name = '';
    $scope.set = function() {
        $scope.angular_name = 'lu zhiyuan';
        setTimeout(function() {
            $scope.angular_name = 'lu zhiyuan timeout';
        }, 0);
    }
    $scope.reset = function() {
        $scope.angular_name = '';
    }
});

$(function() {
    $scope = $('#x-scope').scope();
    $('#jquery-set').click(function() {
        $scope.jquery_name = 'lu zhiyuan';
    });
    $('#jquery-reset').click(function() {
        $scope.jquery_name = '';
    });
    $('#jquery-apply').click(function() {
        $scope.$apply();
    });
});