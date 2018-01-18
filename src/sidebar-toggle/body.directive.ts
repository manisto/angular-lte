import { IOptions } from "../options";

const sidebarCollapseClass = "sidebar-collapse";
const sidebarOpenClass = "sidebar-open";

export class BodyController implements ng.IController {
  static $inject: string[] = ["$window", "$element", "lteOptions"];

  $window: ng.IWindowService;
  $element: ng.IAugmentedJQuery;
  options: IOptions;

  constructor(
    $window: ng.IWindowService,
    $element: ng.IAugmentedJQuery,
    lteOptions: IOptions
  ) {
    this.$window = $window;
    this.$element = $element;
    this.options = lteOptions;
  }

  $onInit(): void {}

  toggleSidebar(): void {
    if (this.isSmall()) {
      this.$element.removeClass(sidebarCollapseClass);
      this.$element.toggleClass(sidebarOpenClass);
    } else {
      this.$element.removeClass(sidebarOpenClass);
      this.$element.toggleClass(sidebarCollapseClass);
    }
  }

  private isSmall(): boolean {
    return this.$window.innerWidth < this.options.screenSizes.sm;
  }

  contentClicked(): void {
    if (this.isSmall()) {
      this.$element.removeClass(sidebarOpenClass);
    }
  }
}

export let BodyDirective: ng.IDirectiveFactory = function() {
  let directive: ng.IDirective = {
    restrict: "A",
    controller: BodyController,
    bindToController: {}
  };

  return directive;
};
