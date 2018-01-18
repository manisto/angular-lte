import { TreeviewDirective } from "./treeview.directive";
import { TreeviewTitleDirective } from "./treeview-title.directive";
import { TreeviewMenuDirective } from "./treeview-menu.directive";

export let treeviewModule = angular.module("angular-lte.treeview", []);
treeviewModule.directive("lteTreeview", TreeviewDirective);
treeviewModule.directive("lteTreeviewTitle", TreeviewTitleDirective);
treeviewModule.directive("lteTreeviewMenu", TreeviewMenuDirective);
