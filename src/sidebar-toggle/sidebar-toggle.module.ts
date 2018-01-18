import { BodyDirective } from "./body.directive";
import { SidebarToggleComponent } from "./sidebar-toggle.component";
import { ContentWrapperDirective } from "./content-wrapper.directive";

export let sidebarToggleModule = angular.module(
  "angular-lte.sidebar-toggle",
  []
);

sidebarToggleModule.directive("lteBody", BodyDirective);
sidebarToggleModule.component("lteSidebarToggle", SidebarToggleComponent);
sidebarToggleModule.directive("lteContentWrapper", ContentWrapperDirective);
