import {TreeviewDirective} from './TreeviewDirective';
import {TreeviewToggleDirective} from './TreeviewToggleDirective';
import {TreeviewMenuDirective} from './TreeviewMenuDirective';
import {BoxBodyElementDirective} from './BoxBodyElementDirective';
import {BoxElementDirective} from './BoxElementDirective';

export let directivesModule = angular.module('angular-lte.directives', []);
directivesModule.directive('lteTreeview', TreeviewDirective);
directivesModule.directive('lteTreeviewToggle', TreeviewToggleDirective);
directivesModule.directive('lteTreeviewMenu', TreeviewMenuDirective);
directivesModule.directive('lteBoxBodyElement', BoxBodyElementDirective);
directivesModule.directive('lteBoxElement', BoxElementDirective);