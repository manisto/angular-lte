import { BoxController } from "./BoxComponent";

export let BoxToolbarDirective: ng.IDirectiveFactory = function() {
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
      boxController.setToolbarElement($transclude($scope, angular.noop));
    }
  };

  return directive;
};
