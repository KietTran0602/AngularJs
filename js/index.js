var app = angular.module("myApp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'view/home.html',
            controller: 'myCtrl1',
            
        })
        .when('/Operator',{
            templateUrl: 'view/operator.html',
            controller: 'myCtrl2'
        })
        .when('/Recruitment',{
            templateUrl: 'view/recruitment.html',
            controller: 'myCtrl3'
        })
        .when('/Event',{
            templateUrl: 'view/event.html',
            controller: 'myCtrl4'
        })
        .when('/About',{
            templateUrl: 'view/about.html',
            controller: 'myCtrl5'
        });
        
});
app.controller("navcontroller",['$scope','$location',function($scope,$location){
    $scope.isActive = function(destination){
        return destination === $location.path();
    }
    
}]);
app.controller('myCtrl1', function($scope, $http){
    $http.get("../database/Banner.json")
    .then(function (response) {$scope.pictures = response.data;});
  });
app.controller('myCtrl2', function($scope, $http){
    $http.get("../database/Operator.json")
    .then(function (response) {$scope.operators = response.data;
    
        $scope.cancle = function(){
            $scope.flaq = 0;
            $scope.op = {};
            $scope.index = -1;
        }
        $scope.save = function(){
            $scope.operators.push($scope.op);
        }
    
    });
  });
app.controller('myCtrl3', function($scope,$http){
    $http.get("../database/Operator.json")
    .then(function (response) {
        $scope.operators = response.data;

        $scope.showfield =[];
        
        $scope.star1Op = [];
        $scope.star2Op = [];
        $scope.star3Op = [];
        $scope.star4Op = [];
        $scope.star5Op = [];
        $scope.star6Op = [];
        $scope.specialistOp = [];
        $scope.supporterOp = [];
        $scope.defenderOp = [];
        $scope.sniperOp = [];
        $scope.casterOp = [];
        $scope.vanguardOp = [];
        $scope.medicOp = [];
        $scope.guardOp = [];

        $scope.rangeOp = [];
        $scope.meleeOp = [];
        $scope.topOp = [];
        $scope.seniorOp = [];
        $scope.starterOp = [];
        function taging(tag,array){
            for(let i = 0; i< $scope.operators.length; i++){
                for(let j = 0; j <$scope.operators[i].tag.length; j++){
                    $scope.tag = $scope.operators[i].tag[j];
                    if($scope.tag == tag){
                        array.push($scope.operators[i]);
                    }  
                }
            }
            
        }
        taging("starter", $scope.starterOp);
        taging("senior operator", $scope.seniorOp);
        taging("top operator", $scope.topOp);
        taging("melee",$scope.meleeOp);
        taging("range",$scope.rangeOp);
        taging("guard",$scope.guardOp);
        taging("medic",$scope.medicOp);
        taging("vanguard",$scope.vanguardOp);
        taging("caster",$scope.casterOp);
        taging("sniper",$scope.sniperOp);
        taging("defender",$scope.defenderOp);
        taging("supporter",$scope.supporterOp);
        taging("specialist",$scope.specialistOp);
        taging("6star",$scope.star6Op);
        taging("5star",$scope.star5Op);
        taging("4star",$scope.star4Op);

        taging("3star",$scope.star3Op);
        taging("2star",$scope.star2Op);
        taging("1star",$scope.star1Op);
        //starter
        $scope.starter = false;
        $scope.Starter = function(){
            $scope.click1 = !$scope.click1; 
            $scope.starter = !$scope.starter;
                if($scope.starter == true){
                    $scope.showfield.push($scope.starterOp);
                } else {
                    $scope.showfield.pop($scope.starterOp);
                }     
        }
        //senior
        $scope.senior = false;
        $scope.Senior = function(){
            $scope.click2 = !$scope.click2;
            $scope.senior = !$scope.senior;
                if($scope.senior == true){
                    $scope.showfield.push($scope.seniorOp);
                } else {
                    $scope.showfield.pop($scope.seniorOp);
                }     
        }
        //top
        $scope.top = false;
        $scope.Top = function(){
            $scope.click3 = !$scope.click3;
            $scope.top = !$scope.top;
                if($scope.top == true){
                    $scope.showfield.push($scope.topOp);
                } else {
                    $scope.showfield.pop($scope.topOp);
                }     
        }
        //melee
        $scope.melee = false;
        $scope.Melee = function(){
            $scope.click4 = !$scope.click4;
            $scope.melee = !$scope.melee;
                if($scope.melee == true){
                    $scope.showfield.push($scope.meleeOp);
                } else {
                    $scope.showfield.pop($scope.meleeOp);
                }     
        }
        //range
        $scope.range = false;
        $scope.Range = function(){
            $scope.click5 = !$scope.click5;
            $scope.range = !$scope.range;
                if($scope.range == true){
                    $scope.showfield.push($scope.rangeOp);
                } else {
                    $scope.showfield.pop($scope.rangeOp);
                }     
        }
        //guard
        $scope.guard = false;
        $scope.Guard = function(){
            $scope.click6 = !$scope.click6;
            $scope.guard = !$scope.guard;
                if($scope.guard == true){
                    $scope.showfield.push($scope.guardOp);
                } else {
                    $scope.showfield.pop($scope.guardOp);
                }     
        }
        //medic
        $scope.medic = false;
        $scope.Medic = function(){
            $scope.click7 = !$scope.click7;
            $scope.medic = !$scope.medic;
                if($scope.medic == true){
                    $scope.showfield.push($scope.medicOp);
                } else {
                    $scope.showfield.pop($scope.medicOp);
                }     
        }
        //vanguard
        $scope.vanguard = false;
        $scope.Vanguard = function(){
            $scope.click8 = !$scope.click8;
            $scope.vanguard = !$scope.vanguard;
                if($scope.vanguard == true){
                    $scope.showfield.push($scope.vanguardOp);
                } else {
                    $scope.showfield.pop($scope.vanguardOp);
                }     
        }
        //caster
        $scope.caster = false;
        $scope.Caster = function(){
            $scope.click9 = !$scope.click9;
            $scope.caster = !$scope.caster;
                if($scope.caster == true){
                    $scope.showfield.push($scope.casterOp);
                } else {
                    $scope.showfield.pop($scope.casterOp);
                }     
        }
        //sniper
        $scope.sniper = false;
        $scope.Sniper = function(){
            $scope.click10 = !$scope.click10;
            $scope.sniper = !$scope.sniper;
                if($scope.sniper == true){
                    $scope.showfield.push($scope.sniperOp);
                } else {
                    $scope.showfield.pop($scope.sniperOp);
                }     
        }
        //defender
        $scope.defender = false;
        $scope.Defender = function(){
            $scope.click11 = !$scope.click11;
            $scope.defender = !$scope.defender;
                if($scope.defender == true){
                    $scope.showfield.push($scope.defenderOp);
                } else {
                    $scope.showfield.pop($scope.defenderOp);
                }     
        }
        //supporter
        $scope.supporter = false;
        $scope.Supporter = function(){
            $scope.click12 = !$scope.click12;
            $scope.supporter = !$scope.supporter;
                if($scope.supporter == true){
                    $scope.showfield.push($scope.supporterOp);
                } else {
                    $scope.showfield.pop($scope.supporterOp);
                }     
        }
        //specialist
        $scope.specialist = false;
        $scope.Specialist = function(){
            $scope.click13 = !$scope.click13;
            $scope.specialist = !$scope.specialist;
                if($scope.specialist == true){
                    $scope.showfield.push($scope.specialistOp);
                } else {
                    $scope.showfield.pop($scope.specialistOp);
                }     
        }
        //6star
        $scope.star6 = false;
        $scope.sixStar = function(){
            $scope.click14 = !$scope.click14;
            $scope.star6 = !$scope.star6;
                if($scope.star6 == true){
                    $scope.showfield.push($scope.star6Op);
                } else {
                    $scope.showfield.pop($scope.star6Op);
                }     
        }
        //5star
        $scope.star5 = false;
        $scope.fiveStar = function(){
            $scope.click15 = !$scope.click15;
            $scope.star5 = !$scope.star5;
                if($scope.star5 == true){
                    $scope.showfield.push($scope.star5Op);
                } else {
                    $scope.showfield.pop($scope.star5Op);
                }     
        }
        //4star
        
        $scope.star4 = false;
        $scope.fourStar = function(){
            $scope.click16 = !$scope.click16;
            $scope.star4 = !$scope.star4;
                if($scope.star4 == true){
                    $scope.showfield.push($scope.star4Op);
                } else {
                    $scope.showfield.pop($scope.star4Op);
                }     
        }
        //3star
        $scope.star3 = false;
        $scope.threeStar = function(){
            $scope.click17 = !$scope.click17;
            $scope.star3 = !$scope.star3;
                if($scope.star3 == true){
                    $scope.showfield.push($scope.star3Op);
                } else {
                    $scope.showfield.pop($scope.star3Op);
                }     
        }
        //2star
        $scope.star2 = false;
        $scope.twoStar = function(){
            $scope.click18 = !$scope.click18;
            $scope.star2 = !$scope.star2;
                if($scope.star2 == true){
                    $scope.showfield.push($scope.star2Op);
                } else {
                    $scope.showfield.pop($scope.star2Op);
                }     
        }
        //1star
        $scope.star1 = false;
        $scope.oneStar = function(){
            $scope.click19 = !$scope.click19;
            $scope.star1 = !$scope.star1;
                if($scope.star1 == true){
                    $scope.showfield.push($scope.star1Op);
                } else {
                    $scope.showfield.pop($scope.star1Op);
                }     
        }
    });
  });
app.controller('myCtrl4', function($scope, $http){
    $http.get("../database/material.json")
    .then(function (response) {
        $scope.materials = response.data;

        
        $scope.reward =[]
        $scope.thisevent = ["1","8","4","23","34","33","69"];
        $scope.thisamount = ["2","5","5","15","15","15","60000"];
        for(let i = 0; i< 69; i++){
            for(let j = 0; j<$scope.thisevent.length;j++){
                if($scope.materials[i].id == $scope.thisevent[j]){
                    $scope.reward.push($scope.materials[i]);
                }
            }
        }
        for(let i = 0; i <$scope.reward.length;i++){
            $scope.reward[i].amount += $scope.thisamount[i];
        }
    });
  });