'use strict';

angular.module('myApp.home')


.directive("dropdown", function($rootScope) {
	return {
		restrict: "E",
		templateUrl: "app/home/dropdown.template.html",
		controller: 'HOMEController',
		controllerAs: 'vm',
		bindToController: true,
		scope: {
			selected: '='
		},
		link: function(scope, elem, attrs) {
			scope.list = scope.vm[attrs.list];
			scope.placeholder = attrs.placeholder;
			scope.listVisible = false;
			scope.isPlaceholder = true;
			var clickCallback;

			scope.select = function(item) {
				scope.isPlaceholder = false;
				scope.vm.selected = item;
				if (angular.isDefined(scope.onChange))
					scope.onChange(item);
				scope.isPlaceholder = !scope.vm.selected;
				scope.display = scope.vm.selected.toString();
			};

			scope.isSelected = function(item) {
				return item === scope.vm.selected;
			};

			scope.toggle = function() {
				scope.listVisible = !scope.listVisible;
			};

			clickCallback = $rootScope.$on("documentClicked", function(inner, target) {
				var parent = angular.element(target.parent()[0]);
				if (!parent.hasClass("clicked")) {
					scope.$apply(function () {
						scope.listVisible = false;
					});
				}
			});
			$rootScope.$on('$destroy', clickCallback);
			scope.$watch("vm.selected", function(value) {
				scope.isPlaceholder = !scope.vm.selected;
				scope.display = scope.vm.selected.toString();
			});
		}
	}
});
