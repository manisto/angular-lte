import {TreeviewDirective} from './TreeviewDirective';
import {TreeviewToggleDirective} from './TreeviewToggleDirective';
import {TreeviewMenuDirective} from './TreeviewMenuDirective';

export let treeviewModule = angular.module('angular-lte.treeview', []);
treeviewModule.directive('lteTreeview', TreeviewDirective);
treeviewModule.directive('lteTreeviewToggle', TreeviewToggleDirective);
treeviewModule.directive('lteTreeviewMenu', TreeviewMenuDirective);