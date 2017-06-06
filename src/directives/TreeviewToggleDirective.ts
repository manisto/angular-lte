import {TreeviewController} from './TreeviewDirective';

export let TreeviewToggleDirective: ng.IDirectiveFactory = function() {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        require: '^^lteTreeview',
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, treeviewController: TreeviewController) {
            treeviewController.toggleElement = element;

            function toggleTreeview(event: JQueryEventObject) {
                event.preventDefault();

                scope.$apply(() => {
                    treeviewController.toggle();
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

TreeviewToggleDirective.$inject = [];