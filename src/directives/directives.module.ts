import {TreeviewDirective} from './TreeviewDirective';
import {TreeviewToggleDirective} from './TreeviewToggleDirective';
import {TreeviewMenuDirective} from './TreeviewMenuDirective';
import {BoxBodyElementDirective} from './BoxBodyElementDirective';
import {BoxElementDirective} from './BoxElementDirective';
import {BodyDirective} from './BodyDirective';
import {SidebarToggleDirective} from './SidebarToggleDirective';
import {WrapperDirective} from './WrapperDirective';

export let directivesModule = angular.module('angular-lte.directives', []);
directivesModule.directive('lteTreeview', TreeviewDirective);
directivesModule.directive('lteTreeviewToggle', TreeviewToggleDirective);
directivesModule.directive('lteTreeviewMenu', TreeviewMenuDirective);
directivesModule.directive('lteBoxBodyElement', BoxBodyElementDirective);
directivesModule.directive('lteBoxElement', BoxElementDirective);
directivesModule.directive('lteBody', BodyDirective);
directivesModule.directive('lteSidebarToggle', SidebarToggleDirective);
directivesModule.directive('lteWrapper', WrapperDirective);