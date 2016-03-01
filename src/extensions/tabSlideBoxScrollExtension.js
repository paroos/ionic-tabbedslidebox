/*global angular*/
(function() {
  "use strict";
  var tabSlideBoxScrollExtension = [
    "$timeout", "$window", function($timeout, $window) {
      return {
        restrict: "E",
        link: function(scope, element) {
          $timeout(function() {

            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                x = w.innerWidth || e.clientWidth || g.clientWidth,
                y = w.innerHeight|| e.clientHeight|| g.clientHeight;

            // Get ion-slider
            var ionSlider = element[0].querySelector(".slider"),
                ionSliderOffset = ionSlider.getBoundingClientRect(),
                ionSliderStyle = window.getComputedStyle(ionSlider);

            // Get ion-scroll inside all ion-slides
            var ionScrolls = angular.element(element[0].querySelectorAll('ion-slide ion-scroll'));

            // Calculate scroll height
            var height = y - ionSliderOffset.top - (2*parseInt(ionSliderStyle.bottom));
            ionScrolls.css("height", height + "px");

            // Reset ion-slider bottom
            angular.element(ionSlider).css("bottom", "0px");

          }, 100);
        }
      };
    }
  ];
  return angular.module("tabSlideBoxScrollExtension", []).directive("tabSlideBox", tabSlideBoxScrollExtension);
})();