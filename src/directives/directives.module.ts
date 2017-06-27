import {CollapseDirective} from './CollapseDirective';

export let directivesModule = angular.module('angular-lte.directives', []);

directivesModule.directive('lteCollapse', CollapseDirective);