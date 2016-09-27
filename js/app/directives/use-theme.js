'use strict';

/**
 * @ngdoc directive
 * @name passmanApp.directive:passwordGen
 * @description
 * # passwordGen
 */
angular.module('passmanApp')
	.directive('useTheme', ['$window', function ($window) {

		function invertColor(hexTripletColor) {
			var color = hexTripletColor;
			color = color.substring(1);           // remove #
			color = parseInt(color, 16);          // convert to integer
			color = 0xFFFFFF ^ color;             // invert three bytes
			color = color.toString(16);           // convert to hex
			color = ("000000" + color).slice(-6); // pad with leading zeros
			color = "#" + color;                  // prepend #
			return color;
		}
		return {
			restrict: 'A',
			scope:{
				type: '=type',
				color: '='
			},
			link: function (scope, el, attr, ctrl) {
				var _color = $('#header').css('background-color');

				if(!scope.type) {
					$(el).css('background-color', _color);
				} else {
					$(el).css(scope.type, _color);
				}
				if(scope.color){

					$(el).css('color', invertColor(_color));
				}
			}
		};
	}]);
