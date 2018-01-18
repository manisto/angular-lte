import { WrapperDirective } from "./wrapper.directive";

export let wrapperModule = angular.module("angular-lte.wrapper", []);

wrapperModule.directive("lteWrapper", WrapperDirective);
