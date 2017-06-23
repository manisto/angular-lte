import {BodyDirective} from './BodyDirective';

export let bodyModule = angular.module('angular-lte.body', []);

bodyModule.directive('lteBody', BodyDirective);