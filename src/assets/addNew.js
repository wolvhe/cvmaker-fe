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


var options = {
  placeholder: 'Waiting for your precious content',
  theme: 'snow'
};

var editor = new Quill('#quillEditor', options);
var preciousContent = document.getElementById('myPrecious');
var justTextContent = document.getElementById('justText');
var justHtmlContent = document.getElementById('justHtml');

editor.on('text-change', function() {
  var delta = editor.getContents();
  var text = editor.getText();
  var justHtml = editor.root.innerHTML;
  preciousContent.innerHTML = JSON.stringify(delta);
  justTextContent.innerHTML = text;
  justHtmlContent.innerHTML = justHtml;
});