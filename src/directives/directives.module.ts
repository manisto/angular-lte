import {TreeviewDirective} from './TreeviewDirective';
import {TreeviewToggleDirective} from './TreeviewToggleDirective';
import {TreeviewMenuDirective} from './TreeviewMenuDirective';
import {WrapperDirective} from './WrapperDirective';
import {CollapseDirective} from './CollapseDirective';

export let directivesModule = angular.module('angular-lte.directives', []);
directivesModule.directive('lteTreeview', TreeviewDirective);
directivesModule.directive('lteTreeviewToggle', TreeviewToggleDirective);
directivesModule.directive('lteTreeviewMenu', TreeviewMenuDirective);
directivesModule.directive('lteWrapper', WrapperDirective);
directivesModule.directive('lteCollapse', CollapseDirective);