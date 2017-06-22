import {BoxController} from './BoxComponent';

export let BoxFooterDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        transclude: 'element',
        require: '^^lteBox',
        link: function($scope, $element, $attributes, boxController: BoxController, $transclude: ng.ITranscludeFunction) {
            boxController.setFooterElement($transclude());
        }
    };

    return directive;
};
