import {CalloutComponent} from './CalloutComponent';
import {InfoBoxComponent} from './InfoBoxComponent';
import {ProgressBoxComponent} from './ProgressBoxComponent';
import {SmallBoxComponent} from './SmallBoxComponent';
import {BoxComponent} from './BoxComponent';

export let componentsModule = angular.module('angular-lte.components', []);
componentsModule.component('lteCallout', CalloutComponent);
componentsModule.component('lteInfoBox', InfoBoxComponent);
componentsModule.component('lteProgressBox', ProgressBoxComponent);
componentsModule.component('lteSmallBox', SmallBoxComponent);
componentsModule.component('lteBox', BoxComponent);
