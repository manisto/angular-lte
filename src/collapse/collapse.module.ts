import { CollapseDirective } from "./CollapseDirective";

export let collapseModule = angular.module("angular-lte.collapse", []);

collapseModule.directive("lteCollapse", CollapseDirective);
