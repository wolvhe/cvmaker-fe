// (function () {
//   "use strict";
//   var DemoController = function ($scope) {
//     $scope.selectData = [
//       {
//         name: "Rasmus Lerdorf",
//         lang: "PHP",
//       },
//       {
//         name: "James Gosling & Patrick Naughton",
//         lang: "Java",
//       },
//       {
//         name: "Miško Hevery & Adam Abronsw",
//         lang: "Angular",
//       },
//       {
//         name: "Brendan Eich",
//         lang: "Javascript",
//       },
//     ];
//     $scope.informations = [
//       {
//         inputName: "",
//         inputSelect: "",
//         inputCheckbox: "",
//         optionsRadios: "",
//       },
//     ];
//     $scope.cloneItem = function () {
//       var itemToClone = {
//         inputName: "",
//         inputSelect: "",
//         inputCheckbox: "",
//         optionsRadios: "",
//       };
//       $scope.informations.push(itemToClone);
//     };

//     $scope.removeItem = function (itemIndex) {
//       $scope.informations.splice(itemIndex, 1);
//     };
//     $scope.submitForm = function () {};
//   };

//   angular.module("app", []).controller("DemoController", DemoController);
//   DemoController.$inject = ["$scope"];
// })();




function name(){
   alert("I am Lucifer");
 }

 function myFunction() {
  var itm = document.getElementById("myList2").lastChild;
  var cln = itm.cloneNode(true);
  document.getElementById("myList1").appendChild(cln);
}