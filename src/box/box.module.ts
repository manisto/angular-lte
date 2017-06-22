import {BoxComponent} from './BoxComponent';
import {BoxHeaderDirective} from './BoxHeaderDirective';
import {BoxHeaderContainerDirective} from './BoxHeaderContainerDirective';
import {BoxToolbarDirective} from './BoxToolbarDirective';
import {BoxToolbarContainerDirective} from './BoxToolbarContainerDirective';
import {BoxFooterDirective} from './BoxFooterDirective';
import {BoxFooterContainerDirective} from './BoxFooterContainerDirective';

export let boxModule = angular.module('angular-lte.box', []);

boxModule.component('lteBox', BoxComponent);
boxModule.directive('lteBoxHeader', BoxHeaderDirective);
boxModule.directive('lteBoxHeaderContainer', BoxHeaderContainerDirective);
boxModule.directive('lteBoxToolbar', BoxToolbarDirective);
boxModule.directive('lteBoxToolbarContainer', BoxToolbarContainerDirective);
boxModule.directive('lteBoxFooter', BoxFooterDirective);
boxModule.directive('lteBoxFooterContainer', BoxFooterContainerDirective);