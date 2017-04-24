import {SidebarTreeviewController} from './SidebarTreeviewDirective';

export let SidebarTreeviewToggleDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        require: '^^lteSidebarTreeview',
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, sidebarTreeviewController: SidebarTreeviewController) {
            sidebarTreeviewController.toggleElement = element;

            let toggleTreeview = function(event: JQueryEventObject) {
                event.preventDefault();

                scope.$apply(() => {
                    sidebarTreeviewController.toggle();
                });
            };

            element.on('click', toggleTreeview);

            scope.$on('$destroy', () => {
                element.off('click', toggleTreeview);
            });
        }
    };

    return directive;
};

SidebarTreeviewToggleDirective.$inject = [];