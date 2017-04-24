import {SidebarTreeviewDirective} from './SidebarTreeviewDirective';
import {SidebarTreeviewToggleDirective} from './SidebarTreeviewToggleDirective';
import {SidebarTreeviewMenuDirective} from './SidebarTreeviewMenuDirective';

export let directivesModule = angular.module('angular-lte.directives', []);
directivesModule.directive('lteSidebarTreeview', SidebarTreeviewDirective);
directivesModule.directive('lteSidebarTreeviewToggle', SidebarTreeviewToggleDirective);
directivesModule.directive('lteSidebarTreeviewMenu', SidebarTreeviewMenuDirective);