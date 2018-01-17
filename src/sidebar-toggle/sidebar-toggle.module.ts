import { BodyDirective } from "./BodyDirective";
import { SidebarToggleComponent } from "./SidebarToggleComponent";
import { ContentWrapperDirective } from "./ContentWrapper";

export let sidebarToggleModule = angular.module(
  "angular-lte.sidebar-toggle",
  []
);

sidebarToggleModule.directive("lteBody", BodyDirective);
sidebarToggleModule.component("lteSidebarToggle", SidebarToggleComponent);
sidebarToggleModule.directive("lteContentWrapper", ContentWrapperDirective);
