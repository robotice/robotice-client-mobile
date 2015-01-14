angular.module('robotice-control.controllers', [])
.controller('AppCtrl', ['$scope','$http', function($scope,$http){
    $scope.apiUrl=null;
    $scope.currentUser=null;
    $scope.setCurrentUser = function (user){$scope.currentUser=user;};
    $scope.setApiURL = function(apiUrl){$scope.apiUrl=apiUrl;}
    $scope.authorizedAPIRequest = function(method,url,data,headers){
        if($scope.currentUser!=null){
         angular.extend(headers,{'Authorization':'  Token '+$scope.currentUser.token});
         var req = {
            method: method,
            url: $scope.apiUrl+'/'+url,
            headers: headers,
            data:data
            };
            return $http(req);
        }else{
            return false;
        }
    };

}])

.controller('ActionsCtrl', ['$scope',function($scope) {
    $scope.actions=[];
   (function(){
        if($scope.currentUser!=null){
            $scope.authorizedAPIRequest('GET','action/list',{},{'Location': 'hklab01'}).success(function(response){
                $scope.actions=response;
            });
        }else{
            alert("no user!");
        }
   })();
   $scope.doAction = function(actionID){
    $scope.authorizedAPIRequest('POST','action/'+actionID+'/do',{},{'Location': 'hklab01'}).success(function(response){
        alert(JSON.stringify(response));
    });
   }
   
}])

.controller('TasksCtrl', ['$scope',function($scope) {
}])

.controller('AccountCtrl', ['$scope','$rootScope','$http','$state',function($scope,$rootScope,$http,$state) {
    $scope.login = function(credentials){
        $http.post(credentials.host+'/auth',{username:credentials.username,password:credentials.password}).success(function(response){
            alert(JSON.stringify(response));
            $scope.setApiURL(credentials.host);
            $scope.setCurrentUser({token:response.token});
            $state.go("tab.actions");
        });
    };
}]);
