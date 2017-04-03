import {CalloutComponent} from './CalloutComponent';
import {InfoBoxComponent} from './InfoBoxComponent';
import {SidebarTreeviewDirective} from './SidebarTreeviewDirective';
import {SidebarTreeviewToggleDirective} from './SidebarTreeviewToggleDirective';
import {SidebarTreeviewMenuDirective} from './SidebarTreeviewMenuDirective';

export let componentsModule = angular.module('angular-lte.components', []);
componentsModule.component('lteCallout', CalloutComponent);
componentsModule.component('lteInfoBox', InfoBoxComponent);
componentsModule.directive('lteSidebarTreeview', SidebarTreeviewDirective);
componentsModule.directive('lteSidebarTreeviewToggle', SidebarTreeviewToggleDirective);
componentsModule.directive('lteSidebarTreeviewMenu', SidebarTreeviewMenuDirective);