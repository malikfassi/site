'use strict';


/*eslint angular/di: [2,"array"]*/


angular.module('myApp.home')

.controller('HOMEController', ['$scope', '$location','$route', 'dataFactory', function($scope, $location, $route, dataFactory) {
	var vm = this;
	var range = function range(start, end) {
		var foo = [];
		for (var i = start; i <= end; i++) {
			foo.push(i);
		}
		return foo;
	}
	vm.years = range(2000, 2016);  //Liste contenant les années pour le dropdown annee
	vm.selected = ""; 
	vm.multiselected = [];
	vm.submitted = false;
	vm.loading = true;
	vm.onlyNumbers = /^\d+$/;
	vm.popupActive = false;
	vm.location = "";

	var getDataSuccess = function(data){
		//Handle data on Success
		vm.loading = false;
		vm.valid = true;
		vm.data = data.data;
		formatData();
		vm.location = vm.data[0].ville;
	}
	//	dataFactory.getMap(vm.data[0].ville).then(sucessMap, sucessMap);

	var getDataError = function(){
		//Handle data on fail
		vm.loading = false;
	}
	var formatCa = function(data) {
		//reformate l'objet chiffre d'affaire
		//conforme a la directive barChart
		var ca = [];
		ca.push({x : "brr", y: parseInt(data.caBrr) ? parseInt(data.caBrr) : 0});
		ca.push({x : "ded", y: parseInt(data.caDed) ? parseInt(data.caDed) : 0});
		ca.push({x : "liasse", y: parseInt(data.caLiasse) ? parseInt(data.caLiasse) : 0 });
		ca.push({x : "tva", y: parseInt(data.caTva) ? parseInt(data.caTva) : 0});
		ca.push({x : "drf", y: parseInt(data.cadrf) ? parseInt(data.cadrf) : 0})
		return (ca);
	}
	var formatData = function ()
	{
		vm.data.ca = [];
		vm.data.forEach(function(elem){
			if (elem.ca)
				vm.data.ca.push({'year':elem.annee, 'data':formatCa(elem.ca)});
		});
		if (vm.data[0].dateCreation)
			vm.data[0].dateCreation = vm.data[0].dateCreation.split(" ")[0];
		if (!vm.data[0].uniteDeGestion || vm.data[0].uniteDeGestion == "NULL")
			vm.data[0].uniteDeGestion = "-";
	}
/*	Mock data
	vm.data = {"ifu":"153495","annee":"2005","nom":"'153495 NOM'","prenom":"'153495 PRENOM'","cin":"I238436","raisonSociale":"'153495 RAISON_SOCIALE '","adresse":"ADRESSE","typeContribuable":"P","formeJuridique":"","dateCreation":"2014-09-24 18:11:44.000","uniteDeGestion":"NULL","activitePrincipale":"","ville":"SAFI (M)","ca":{"caDed":"576000.0","caTva":"Total_Montant_brr","caLiasse":"","caBrr":""},"rs":null}; 
	formatData();*/

	vm.example = {
					'year': 2016,
					'data' : [  //Example pour  les indicateurs manquant (X/Y)
								{'x': 'brr', 'y': 48000},
								{'x': 'ded', 'y': 60000},
								{'x': 'liasse', 'y': 10000},
								{'x': 'tva', 'y': 24000},
								{'x': 'drf', 'y': 36000}
							]
				}

	vm.example2 = {
					'year': 2015,
					'data' : [  //Example pour  les indicateurs manquant (X/Y)
								{'x': 'brr', 'y': 54000},
								{'x': 'ded', 'y': 12000},
								{'x': 'liasse', 'y': 46000},
								{'x': 'tva', 'y': 31000},
								{'x': 'drf', 'y': 73000}
							]
				}
	vm.example3 = {
					'year': 2014,
					'data' : [  //Example pour  les indicateurs manquant (X/Y)
								{'x': 'brr', 'y': 154000},
								{'x': 'ded', 'y': 122000},
								{'x': 'liasse', 'y': 436000},
								{'x': 'tva', 'y': 431000},
								{'x': 'drf', 'y': 573000}
							]
				}
	vm.example4 = {
					'year': 2013,
					'data' : [  //Example pour  les indicateurs manquant (X/Y)
								{'x': 'brr', 'y': 254000},
								{'x': 'ded', 'y': 212000},
								{'x': 'liasse', 'y': 246000},
								{'x': 'tva', 'y': 231000},
								{'x': 'drf', 'y': 273000}
							]
				}

	vm.allExample = [vm.example, vm.example2, vm.example3, vm.example4];

	vm.submit = function() {
		//Handle submit
		var data ={};
		if (vm.ifu) {
			//Si tout les champs sont remplis
			vm.valid = true;
			data.id = vm.ifu;
			vm.loading = true;
			dataFactory.getDataIFU(data).then(getDataSuccess, getDataError); //send request 
		}
		vm.submitted = true;
	}
	vm.reset = function() {
		//Retourne a la page d'acceuil
		$route.reload();
	}
}])

.run(function($rootScope) {
	angular.element(document).on("click", function(e) {
		$rootScope.$broadcast("documentClicked", angular.element(e.target));
	});
});