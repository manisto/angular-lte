import {WrapperDirective} from './WrapperDirective';
import {CollapseDirective} from './CollapseDirective';

export let directivesModule = angular.module('angular-lte.directives', []);
directivesModule.directive('lteWrapper', WrapperDirective);
directivesModule.directive('lteCollapse', CollapseDirective);