/* global angular */
(function(){
    var app = angular.module('store', []);
    
    app.controller('RentalController', function($scope){
        this.products = cars;
        
        $scope.cars = cars;
        $scope.decreaseNumAvail = function(product) {
            console.log(--product.numAvailable);
            if(product.numAvailable <= 0 ){
                product.unavailable = !product.unavailable;
            }
        };
    
    });
    
    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
        
    });
    
    var cars = [
    {
        year: 2018,
        make: 'Dodge',
        model: 'Challenger',
        type: 'Coupe',
        description: 'Everyone will tell you not to mess with an icon. But the Dodge Brand has never listened to the “everyones” of the world.\nSo they took this model of muscle—the Dodge Challenger—and, in true Dodge Brand fashion, made it even better.',
        price: 69.99,
        available: true,
        unavailable: false,
        unavailableText: 'UNAVAILABLE',
        numAvailable: 10,
        numBooked: 0,
        images: [
            {
             full: 'images/cars/2018-Dodge-Challenger.png'
            }
            ],
        specs: [
            {
            transmission: 'Automatic',
            drivetrain: 'Rear Wheel Drive 3.6L',
            mpg: '19 mpg City / 30 mpg Hwy'
            }
            ]
    },
    {
        year: 2018,
        make: 'Chevy',
        model: 'Camaro',
        type: 'Coupe',
        description: 'With a profile that harkens back to the 1967 original, the all-newsixth-generation Camaro looks pleasingly familiar, marking\na subtle styling evolution over the previous model. But don’t let that fool you. The new Camaro is a delight to drive, with dynamic\nprowess that can give even snooty European sportsters a run for their money. But as a daily driver, you might want to think twice\nbecause outward visibility is atrocious.',
        price: 79.99,
        available: true,
        unavailable: false,
        unavailableText: 'UNAVAILABLE',
        numAvailable: 7,
        numBooked: 0,
        images: [
            {
                full: 'images/cars/2018-chevy-camaro.png'
            }
            ],
        specs: [
            {
            transmission: 'Manual',
            drivetrain: 'Rear Wheel Drive 2.0L',
            mpg: '20 mpg City / 30 mpg Hwy'
            }
            ]
    }
    ];
    
})();