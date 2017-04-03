import {SidebarTreeviewController} from './SidebarTreeviewDirective';

export let SidebarTreeviewToggleDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        require: '^^lteSidebarTreeview',
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, sidebarTreeviewController: SidebarTreeviewController) {
            element.on('click', () => {
                scope.$apply(() => {
                    sidebarTreeviewController.toggle();
                });
            });
        }
    };

    return directive;
};

SidebarTreeviewToggleDirective.$inject = [];