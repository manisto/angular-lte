import {BoxController} from './BoxComponent';

export let BoxFooterContainerDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        require: '^^lteBox',
        link: function($scope, $element, $attribute, boxController: BoxController) {
            $scope.$watch(() => boxController.footerElement, (footerElement: JQuery) => {
                if (!footerElement) {
                    return;
                }

                $element.empty();
                $element.append(footerElement);
            });
        }
    };

    return directive;
};
