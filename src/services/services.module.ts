import {AnimateService} from './AnimateService';

export let servicesModule = angular.module('angular-lte.services', []);

servicesModule.service('lteAnimateService', AnimateService);