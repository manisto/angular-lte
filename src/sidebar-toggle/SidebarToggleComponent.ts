import { BodyController } from "./BodyDirective";

const sidebarCollapseClass = "sidebar-collapse";
const sidebarOpenClass = "sidebar-open";

class SidebarToggleController implements ng.IOnInit {
  static $inject: string[] = [];

  body: BodyController;
  screenReaderHint: string;

  $onInit() {
    this.screenReaderHint = this.screenReaderHint || "Toggle navigation";
  }

  toggleSidebar(): void {
    this.body.toggleSidebar();
  }
}

export let SidebarToggleComponent: ng.IComponentOptions = {
  require: {
    body: "^^lteBody"
  },
  bindings: {
    screenReaderHint: "@"
  },
  templateUrl: "angular-lte/sidebar-toggle/SidebarToggleComponent.html",
  controller: SidebarToggleController
};
