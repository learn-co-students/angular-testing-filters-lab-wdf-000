describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter by gender', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});

        $scope.vm.search = 'female';
        $scope.vm.changeFilter();

        expect($scope.vm.filteredList.length).toBe(71);
    });


});
