(function () {
	var app = angular.module('countryModule');

	app.controller('countryCtrl', ['$scope', 'CRUDUtils', 'country.context', function ($scope, CRUDUtils, context) {
			this.url = context;
			CRUDUtils.extendCtrl(this, $scope);
			this.fetchRecords();
                        this.masPoblado = function(){
                            var self = this;
                            var max = null;
                            $scope.currentRecord = $scope.records.forEach(function(element, index, array){
                                if(max == null){
                                    max = element;
                                }else if(element.population > max.population){
                                    max = element;
                                }
                            })
                            alert(max.name);
                        };
        }]);
})();