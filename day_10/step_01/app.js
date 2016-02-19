angular
	.module('app', [])
	.controller('AppController', function AppController (Notify) {
		var vm = this;
		vm.message = '';
		vm.addMessage = function() {
			Notify.addMessage(vm.message);
			vm.message = '';
		};
	})
	.service('Notify', function() {
		return {
			messages: [],
			addMessage: function(message) {
				this.messages.push({
					txt: message,
					date: (new Date()).getTime()
				});
			}
		};
	})
	.component('notifier', {
		template: ''+
			'<div style="border:1px solid black;">' +
				'<h3>Directive</h3>' +
				'<div ng-repeat="message in notifierCtrl.messages">{{message.txt}}</div>' +
			'</div>',
		controllerAs: 'notifierCtrl',
		controller: function (Notify) {
			var vm = this;
			vm.messages = Notify.messages;
		}
	});