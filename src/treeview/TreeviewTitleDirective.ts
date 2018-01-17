import { TreeviewController } from "./TreeviewDirective";

class TreeviewTitleController {}

export let TreeviewTitleDirective: ng.IDirectiveFactory = function() {
  let directive: ng.IDirective = {
    restrict: "A",
    scope: {},
    transclude: true,
    templateUrl: "angular-lte/treeview/TreeviewTitleDirective.html",
    controller: TreeviewTitleController,
    controllerAs: "$ctrl",
    bindToController: {
      icon: "@",
      header: "@"
    },
    require: "^^lteTreeview",
    link: function(
      scope: ng.IScope,
      element: ng.IAugmentedJQuery,
      attrs: ng.IAttributes,
      treeviewController: TreeviewController
    ) {
      if (!element.attr("href")) {
        element.attr("href", "");
      }

      function titleClicked(event: JQueryEventObject) {
        scope.$apply(() => {
          treeviewController.titleClicked();
        });
      }

      element.on("click", titleClicked);

      scope.$on("$destroy", () => {
        element.off("click", titleClicked);
      });
    }
  };

  return directive;
};

TreeviewTitleDirective.$inject = [];
