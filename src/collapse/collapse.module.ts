import { CollapseDirective } from "./collapse.directive";

export let collapseModule = angular.module("angular-lte.collapse", []);

collapseModule.directive("lteCollapse", CollapseDirective);
