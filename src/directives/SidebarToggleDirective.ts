import { BodyController } from './BodyDirective';

export let SidebarToggleDirective: ng.IDirectiveFactory = function () {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        require: '^^lteBody',
        link: function ($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes, body: BodyController) {
            

            function toggleSidebar(event: JQueryEventObject) {
                event.preventDefault();

                $scope.$apply(() => {
                    body.toggleSidebar();
                });
            }

            element.on('click', toggleSidebar);

            $scope.$on('$destroy', () => {
                element.off('click', toggleSidebar);
            });
        }
    };

    return directive;
};
