angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$rootScope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };



  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('HomeCtrl', function($scope,$rootScope){

})

.controller('ProfileCtrl', function($scope,$rootScope){
  console.log($rootScope.user);
//  console.log(user);
})

.controller('LoginCtrl',function($scope){
  console.log("Test");
  $scope.loginUser = function() {
    //console.log('loggdin');
    //alert("close")
    console.log("loginPressed");
  }

  //console.log($scope.loginUser());

})

.controller('RegisterCtrl',function($ionicSlideBoxDelegate, $ionicPopover, $ionicModal, $scope,$rootScope,$state, $ionicActionSheet, $ionicLoading

){



  $ionicPopover.fromTemplateUrl('templates/my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $ionicModal.fromTemplateUrl('templates/my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.next = function(){
    console.log('herer');
    $ionicSlideBoxDelegate.next();
  }

  $scope.previous = function(){
    $ionicSlideBoxDelegate.previous();
  }

  $scope.showMoadal = function($event){
    $scope.popover.show($event);
  }

  $scope.hideModal = function(argument) {
    $scope.modal.hide();
  }
  $scope.items = [];
  for (var i = 0; i <= 10; i++) {
    $scope.items.push(Math.random());
  }
  
  $scope.loadData = function() {
    console.log('inside refresh');
    for (var i = 0; i <= 10; i++) {
      $scope.items.push(Math.random());
    }  

    $scope.$broadcast('scroll.infiniteScrollComplete');
  }



  $scope.showSheet = function(){
     var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Button 1' },
       { text: 'Button 2' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
         alert('action sheet cancelled');
        },
     buttonClicked: function(index) {
        if(index === 0)
        {
          alert('button 1 clicked');
        }

        if(index == 1)
        {
           alert('button 2 clicked');
        }
        
       return true;
     }
   });
  }

  $scope.user={};
  console.log("Test");

  $scope.Register = function(){
  console.log("TEST2");
  $rootScope.user=$scope.user;
  $rootScope.loggdin=true;
  $state.go("app.home");

  //  $rootScope.loggdin = ture;
  console.log($rootScope.user);
    // $scope.calme=function(){alert("you call me")};
  }

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
