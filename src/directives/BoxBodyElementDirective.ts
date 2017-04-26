import {BoxController} from '../components/BoxComponent';

export let BoxBodyElementDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        require: '^^lteBox',
        link: function(scope, element: ng.IAugmentedJQuery, attributes, controller: BoxController) {
            controller.setBodyElement(element);
        }
    };

    return directive;
}
