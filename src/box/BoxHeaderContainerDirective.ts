import { BoxController } from "./BoxComponent";

export let BoxHeaderContainerDirective: ng.IDirectiveFactory = function() {
  let directive: ng.IDirective = {
    require: "^^lteBox",
    link: function($scope, $element, $attribute, boxController: BoxController) {
      $scope.$watch(
        () => boxController.headerElement,
        (headerElement: JQuery) => {
          if (!headerElement) {
            return;
          }

          $element.empty();
          $element.append(headerElement);
        }
      );
    }
  };

  return directive;
};
