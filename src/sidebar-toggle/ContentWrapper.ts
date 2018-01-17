import { BodyController } from "./BodyDirective";

export let ContentWrapperDirective: ng.IDirectiveFactory = function() {
  let directive: ng.IDirective = {
    restrict: "A",
    scope: {},
    require: "^^lteBody",
    link: function($scope, $element, attributes, body: BodyController) {
      function handleClick() {
        body.contentClicked();
      }

      $element.on("click", handleClick);

      $scope.$on("$destroy", () => {
        $element.off("click", handleClick);
      });
    }
  };

  return directive;
};

ContentWrapperDirective.$inject = [];
