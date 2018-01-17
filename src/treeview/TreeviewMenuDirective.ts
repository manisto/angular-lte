import { TreeviewController } from "./TreeviewDirective";
import { CollapseController } from "../collapse/CollapseDirective";

export class TreeviewMenuController extends CollapseController
  implements ng.IOnInit {
  static $inject = ["$element", "$animateCss"];

  treeview: TreeviewController;

  constructor(
    $element: ng.IAugmentedJQuery,
    $animateCss: ng.animate.IAnimateCssService
  ) {
    super($element, $animateCss);
  }

  $onInit() {
    this.treeview.setMenu(this);
  }
}

export let TreeviewMenuDirective: ng.IDirectiveFactory = function() {
  let directive: ng.IDirective = {
    restrict: "A",
    scope: {},
    require: {
      treeview: "^^lteTreeview"
    },
    controller: TreeviewMenuController,
    bindToController: {}
  };

  return directive;
};

TreeviewMenuDirective.$inject = [];
