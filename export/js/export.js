
var applic = angular.module("myapp", []);
// SaveAs Function
applic.controller("exportcontroller", function ($scope, $http) {
    $scope.fnExcelReport = function () {
        //applic.controller("exportcontroller", function ($scope, $http) {
        //   $scope.fnExcelReport = function () {
        //       var data = new Blob([document.getElementById('dataTableDiv').innerHTML], {
        //           type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        //       });
        //       saveAs(data, "Sample.xls");
        //   }                                                                   
        //});

        var a = document.createElement('a');
        //getting data from our div that contains the HTML table
        var data_type = 'data:application/vnd.ms-excel';
        var table_div = document.getElementById('dataTableDiv');
        var table_html = table_div.outerHTML.replace(/ /g, '%20');
        a.href = data_type + ', ' + table_html;
        //setting the file name
        a.download = 'Samples.xls';
        a.click();
        //a.preventDefault();
    }
});
