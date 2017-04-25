import {TreeviewDirective} from './TreeviewDirective';
import {TreeviewToggleDirective} from './TreeviewToggleDirective';
import {TreeviewMenuDirective} from './TreeviewMenuDirective';

export let directivesModule = angular.module('angular-lte.directives', []);
directivesModule.directive('lteTreeview', TreeviewDirective);
directivesModule.directive('lteTreeviewToggle', TreeviewToggleDirective);
directivesModule.directive('lteTreeviewMenu', TreeviewMenuDirective);