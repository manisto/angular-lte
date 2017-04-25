const DURATION: number = .4;

export class TreeviewController implements ng.IController {
    expanded: boolean;
    toggleElement: ng.IAugmentedJQuery;
    menuElement: ng.IAugmentedJQuery;

    $onInit() {
        this.expanded = false;
    }

    toggle() {
        this.expanded = !this.expanded;
    }
}

export let TreeviewDirective: ng.IDirectiveFactory = function($animateCss: ng.animate.IAnimateCssService) {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        controller: TreeviewController,
        controllerAs: 'vm',
        bindToController: true,
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: TreeviewController) {
            ctrl.menuElement.css({
                display: 'block',
                overflow: 'hidden',
                height: '0'
            });

            function expand() {
                if (element.hasClass('active')) {
                    return;
                }

                $animateCss(ctrl.menuElement, {
                    duration: DURATION,
                    easing: 'ease',
                    from: {
                        height: '0'
                    },
                    to: {
                        height: ctrl.menuElement[0].scrollHeight + 'px'
                    }
                }).start().finally(() => {
                    element.addClass('active');
                    ctrl.menuElement.addClass('menu-open');
                });
            }

            function collapse() {
                if (!element.hasClass('active')) {
                    return;
                }

                $animateCss(ctrl.menuElement, {
                    duration: DURATION,
                    easing: 'ease',
                    from: {
                        height: ctrl.menuElement[0].scrollHeight + 'px'
                    },
                    to: {
                        height: '0'
                    }
                }).start().finally(() => {
                    ctrl.menuElement.removeClass('menu-open');
                });

                element.removeClass('active');
            }

            scope.$watch('vm.expanded', (shouldExpand: boolean) => {
                let settings: ng.animate.IAnimationOptions;

                if (shouldExpand) {
                    expand();
                } else {
                    collapse();
                }
            });
        }
    };

    return directive;
};

TreeviewDirective.$inject = ['$animateCss'];