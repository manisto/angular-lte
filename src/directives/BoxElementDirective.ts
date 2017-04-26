import {BoxController} from '../components/BoxComponent';

export let BoxElementDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        require: '^^lteBox',
        link: function(scope, element: ng.IAugmentedJQuery, attributes, controller: BoxController) {
            controller.setElement(element);
        }
    };

    return directive;
}
