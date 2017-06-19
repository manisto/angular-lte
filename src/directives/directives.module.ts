import {TreeviewDirective} from './TreeviewDirective';
import {TreeviewToggleDirective} from './TreeviewToggleDirective';
import {TreeviewMenuDirective} from './TreeviewMenuDirective';
import {BodyDirective} from './BodyDirective';
import {SidebarToggleDirective} from './SidebarToggleDirective';
import {WrapperDirective} from './WrapperDirective';
import {CollapseDirective} from './CollapseDirective';

export let directivesModule = angular.module('angular-lte.directives', []);
directivesModule.directive('lteTreeview', TreeviewDirective);
directivesModule.directive('lteTreeviewToggle', TreeviewToggleDirective);
directivesModule.directive('lteTreeviewMenu', TreeviewMenuDirective);
directivesModule.directive('lteBody', BodyDirective);
directivesModule.directive('lteSidebarToggle', SidebarToggleDirective);
directivesModule.directive('lteWrapper', WrapperDirective);
directivesModule.directive('lteCollapse', CollapseDirective);