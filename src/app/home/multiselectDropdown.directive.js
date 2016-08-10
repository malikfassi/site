'use strict';

angular.module('myApp.home')


.directive("multiselectDropdown", function($rootScope) {
	return {
		restrict: "E",
		templateUrl: "app/home/multiselectDropdown.template.html",
		controller: 'HOMEController',
		controllerAs: 'vm',
		bindToController: true,
		scope: {
			multiselected: '='
		},
		link: function(scope, elem, attrs) {
			scope.list = scope.vm[attrs.list];
			scope.placeholder = attrs.placeholder;
			scope.listVisible = false;
			scope.isPlaceholder = true;
			var clickCallback;

			scope.select = function(item, all) {
				if (all)
				{
					if (scope.vm.multiselected.length == scope.list.length)
						scope.vm.multiselected = []
					else
						scope.vm.multiselected = scope.list.slice();
				}
				else
				{
					var index = scope.vm.multiselected.indexOf(item);
					scope.isPlaceholder = false;
					if (index == -1)
						scope.vm.multiselected.push(item);
					else
						scope.vm.multiselected.splice(index, 1);
				}
				scope.isPlaceholder = !scope.vm.multiselected.length;
				scope.display = scope.vm.multiselected.join();
			};

			scope.isSelected = function(item) {
				return scope.vm.multiselected.indexOf(item) != -1;
			};

			scope.toggle = function() {
				scope.listVisible = !scope.listVisible;
				console.log("toggled");
			};

			clickCallback = $rootScope.$on("documentClicked", function(inner, target) {
				var parent = angular.element(target.parent()[0]);
				if (!parent.hasClass("clicked")) {
					scope.$apply(function () {
						if (!angular.element(target[0]).hasClass("element"))
							scope.listVisible = false;
					});
				}
			});
			$rootScope.$on('$destroy', clickCallback);
		}
	}
});
