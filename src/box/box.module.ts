import {BoxComponent} from './BoxComponent';
import {BoxHeaderDirective} from './BoxHeaderDirective';
import {BoxHeaderContainerDirective} from './BoxHeaderContainerDirective';

export let boxModule = angular.module('angular-lte.box', []);

boxModule.component('lteBox', BoxComponent);
boxModule.directive('lteBoxHeader', BoxHeaderDirective);
boxModule.directive('lteBoxHeaderContainer', BoxHeaderContainerDirective);