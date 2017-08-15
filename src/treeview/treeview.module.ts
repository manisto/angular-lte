import {TreeviewDirective} from './TreeviewDirective';
import {TreeviewTitleDirective} from './TreeviewTitleDirective';
import {TreeviewMenuDirective} from './TreeviewMenuDirective';

export let treeviewModule = angular.module('angular-lte.treeview', []);
treeviewModule.directive('lteTreeview', TreeviewDirective);
treeviewModule.directive('lteTreeviewTitle', TreeviewTitleDirective);
treeviewModule.directive('lteTreeviewMenu', TreeviewMenuDirective);