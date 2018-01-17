import { BoxController } from "./BoxComponent";

export let BoxHeaderDirective: ng.IDirectiveFactory = function() {
  let directive: ng.IDirective = {
    transclude: "element",
    require: "^^lteBox",
    link: function(
      $scope,
      $element,
      $attributes,
      boxController: BoxController,
      $transclude: ng.ITranscludeFunction
    ) {
      boxController.setHeaderElement($transclude($scope, angular.noop));
    }
  };

  return directive;
};
