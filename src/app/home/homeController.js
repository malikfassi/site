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
	vm.ind = ["rs","ca","x","y"]; //Liste des indicateurs
	vm.submitted = false;
	vm.loading = true;
	vm.onlyNumbers = /^\d+$/;
	vm.popupActive = false;

	var getDataSuccess = function(data){
		//Handle data on Success
		vm.loading = false;
		vm.valid = true;
		vm.data = data.data;
		formatData();
	}

	var getDataError = function(data){
		//Handle data on fail
		console.log(data);
		vm.loading = false;
	}
	var formatCa = function(data) {
		//reformate l'objet chiffre d'affaire
		//conforme a la directive barChart
		var ca = [];
		ca.push({x : "brr", y: parseInt(data.ca.caBrr) ? parseInt(data.ca.caBrr) : 0});
		ca.push({x : "ded", y: parseInt(data.ca.caDed) ? parseInt(data.ca.caDed) : 0});
		ca.push({x : "liasse", y: parseInt(data.ca.caLiasse) ? parseInt(data.ca.caLiasse) : 0 });
		ca.push({x : "tva", y: parseInt(data.ca.caTva) ? parseInt(data.ca.caTva) : 0});
		ca.push({x : "drf", y: parseInt(data.ca.cadrf) ? parseInt(data.ca.cadrf) : 0})
		return (ca);
	}
	var formatData = function ()
	{
		if (vm.data.ca)
			vm.data.ca = formatCa(vm.data);
		if (vm.data.dateCreation)
			vm.data.dateCreation = vm.data.dateCreation.split(" ")[0];
		if (!vm.data.uniteDeGestion || vm.data.uniteDeGestion == "NULL")
			vm.data.uniteDeGestion = "-";
	}
/*	Mock data
	vm.data = {"ifu":"153495","annee":"2005","nom":"'153495 NOM'","prenom":"'153495 PRENOM'","cin":"I238436","raisonSociale":"'153495 RAISON_SOCIALE '","adresse":"ADRESSE","typeContribuable":"P","formeJuridique":"","dateCreation":"2014-09-24 18:11:44.000","uniteDeGestion":"NULL","activitePrincipale":"","ville":"SAFI (M)","ca":{"caDed":"576000.0","caTva":"Total_Montant_brr","caLiasse":"","caBrr":""},"rs":null}; 
	formatData();*/

	vm.example = [  //Example pour  les indicateurs manquant (X/Y)
	    {'x': 'A', 'y': 48000},
	    {'x': 'B', 'y': 60000},
	    {'x': 'C', 'y': 10000},
	    {'x': 'D', 'y': 24000},
	   	{'x': 'E', 'y': 36000},
	    ];

	vm.example2 = [  //Example pour  les indicateurs manquant (X/Y)
	    {'x': 'A', 'y': 54000},
	    {'x': 'B', 'y': 12000},
	    {'x': 'C', 'y': 46000},
	    {'x': 'D', 'y': 31000},
	   	{'x': 'E', 'y': 73000},
	    ];
	vm.example3 = [  //Example pour  les indicateurs manquant (X/Y)
	    {'x': 'A', 'y': 154000},
	    {'x': 'B', 'y': 122000},
	    {'x': 'C', 'y': 436000},
	    {'x': 'D', 'y': 431000},
	   	{'x': 'E', 'y': 573000},
	    ];

	vm.example4 = [  //Example pour  les indicateurs manquant (X/Y)
	    {'x': 'A', 'y': 254000},
	    {'x': 'B', 'y': 212000},
	    {'x': 'C', 'y': 246000},
	    {'x': 'D', 'y': 231000},
	   	{'x': 'E', 'y': 273000},
	    ];

	vm.allExample = [vm.example, vm.example2, vm.example3, vm.example4];
	vm.zoomOnData = function(x)
	{
		var data = vm.allExample.slice();
		var i = 0;
		var j = 0;
		var newData = [];
        while (data[i])
        {
        	j = 0;
        	while (data[i][j])
        	{
        		if (data[i][j]['x'] == x)
        		{
        			data[i][j]['x'] = i;
        			newData.push(data[i][j]);
        		}
	        	j++;
        	}
        	i++
        }
        return (newData);
	}

	vm.togglePopup = function() {
		vm.popupActive = !vm.popupActive;
	}
	vm.submit = function() {
		//Handle submit
		var data ={};
		var resp;
		if (vm.ifu && vm.selected && vm.multiselected.length) {
			//Si tout les champs sont remplis
			vm.valid = true;
			data.id = vm.ifu;
			data.annee = vm.selected;
			data.indic = vm.multiselected;
			vm.loading = true;
			resp = dataFactory.getDataIFU(data).then(getDataSuccess, getDataError); //send request 
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