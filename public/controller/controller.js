//cathy-01174280600
var OnCalApp = angular.module('OnCalApp', []);
OnCalApp.controller('OnCalCtrl',['$scope',function ($scope){

  $scope.buttons1 = [9,8,7,6,5];
  $scope.buttons2 = [4,3,2,1,0];
  $scope.buttons3 = ["."]
  $scope.data = {};
  $scope.result=null;
  $scope.data.tes="";
  $scope.memory=null;
  $scope.operator="";
  
  $scope.updateoutput= function(btn){
    if($scope.data.tes===""){
      $scope.data.tes=btn;
    }
      else{
      $scope.data.tes += String(btn);
      console.log($scope.data.tes, typeof $scope.data.tes);
    }
  };
 
  $scope.add= function(){
    options();
    if($scope.memory==null){
      $scope.memory=$scope.data.tes;}
    else{
      //$scope.memory += $scope.data.tes;
      console.log($scope.memory);
    }
    $scope.data.tes="";
    $scope.operator="+";
  }
  $scope.sub= function(){
    options();
    if($scope.memory==null){
      $scope.memory=$scope.data.tes;}
    else{
      //$scope.memory -= $scope.data.tes;
      console.log($scope.memory);
    }    
    $scope.data.tes="";
    $scope.operator="-";
  }
  $scope.mul= function(){
    options();
    if($scope.memory==null){
      $scope.memory=$scope.data.tes;}
    else{
      console.log("in mul  "+$scope.memory+"  tes: "+$scope.data.tes);
      //$scope.memory = $scope.memory * $scope.data.tes;
    }    
    $scope.data.tes="";
    $scope.operator="*";
  }
  $scope.div= function(){
    options();
    if($scope.memory==null){
      $scope.memory=$scope.data.tes;}
    else{
      //$scope.memory = $scope.memory / $scope.data.tes;
      console.log($scope.memory);
    }    
    $scope.data.tes="";
    $scope.operator="/";
  }
  
  $scope.calculate = function(){
    options();
    $scope.data.tes="";
    $scope.operator="";
    console.log("result: "+ $scope.result+" memory: "+$scope.memory);
  };
  var options=function(){
    if ($scope.operator == "+"){
      $scope.result = parseFloat($scope.memory) + parseFloat($scope.data.tes);
    }
    else if ($scope.operator == "-"){
      $scope.result = parseFloat($scope.memory) - parseFloat($scope.data.tes);
    }
    else if ($scope.operator == "*"){
      $scope.result = parseFloat($scope.memory) * parseFloat($scope.data.tes);
    }
    else if ($scope.operator == "/"){
      $scope.result = parseFloat($scope.memory) / parseFloat($scope.data.tes);
    } 
    $scope.memory = $scope.result;
  } 
$scope.clear = function(){
  $scope.data = {};
  $scope.result=null;
  $scope.memory=null;
  $scope.operator="";
  $scope.data.tes="";
}
$scope.Decimal=".";
$scope.changeToDecimal=function(){
  if($scope.Decimal==="."){
    $scope.data.tes=".";
  }
}
}]);
