angular
	.module("app.home", [
		"app.misc"
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'components/home/home.html',
				controller: 'HomeController',
				controllerAs: 'app'
			});
	})
	.controller("HomeController", function(AuthService, $http, $location, RoomService) {
		var app = this;

		var initRepo = function initRepo (repos) {
			app.repos = repos;
			repos.forEach(function (repo) {
				RoomService.getRoomByName(repo.name).then(function (res) {
					repo.exist = !(res.$value === null)
				});
			});
		};

		AuthService.$onAuth(function (authData) {
			app.authData = authData;
			if (app.authData) {
				$http.get(app.authData.github.cachedUserProfile.repos_url).success(function (repos) {
					initRepo(repos);
				});
			} else {
				initRepo([]);
			}
		});

		app.login = function () {
			AuthService.$authWithOAuthPopup("github").catch(function (error) {
				console.error('error occured : ' + error);
			});
		};

		app.logout = function () {
			AuthService.$unauth();
		};

		app.createRoom = function (repo) {
			RoomService.createRoom(repo.name).then(function (res) {
				console.log('Room created for ' + repo.name);
			});
		};

		app.goToRoom = function (repo) {
			$location.url('/chat/' + repo.name);
		};

	});