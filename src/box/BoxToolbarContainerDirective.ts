import {BoxController} from './BoxComponent';

export let BoxToolbarContainerDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        require: '^^lteBox',
        link: function($scope, $element, $attribute, boxController: BoxController) {
            $scope.$watch(() => boxController.toolbarElement, (toolbarElement: JQuery) => {
                if (!toolbarElement) {
                    return;
                }

                $element.empty();
                $element.append(toolbarElement);
            });
        }
    };

    return directive;
};
