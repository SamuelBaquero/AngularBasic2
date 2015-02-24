(function () {
	var app = angular.module('sportModule');

	app.controller('sportCtrl', ['$scope', 'CRUDUtils', 'sport.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
			this.fetchRecords();
                        this.calcularPromedio = function(){
                            var self = $scope.currentRecord;
                            var promedio = (Number(self.minAge.toString().replace(/ /g, ""))+Number(self.maxAge.toString().replace(/ /g, "")))/2;
                            alert(promedio);
                        };
        }]);
})();