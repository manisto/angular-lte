import { WrapperDirective } from "./WrapperDirective";

export let wrapperModule = angular.module("angular-lte.wrapper", []);

wrapperModule.directive("lteWrapper", WrapperDirective);
