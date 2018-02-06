/* global angular */
(function() {
    var app = angular.module('store', []);
    
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    var gems = [
        {
            name: "Dodecahedron",
            price: 2,
            description: "Dodecahedron Description",
            canPurchase: true,
            soldOut: true
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "Pentagonal Gem Description",
            canPurchase: false
        }
    ];
    
    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
})();