const DURATION: number = .4;

export class SidebarTreeviewController implements ng.IController {
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

export let SidebarTreeviewDirective: ng.IDirectiveFactory = function($animateCss: ng.animate.IAnimateCssService) {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        controller: SidebarTreeviewController,
        controllerAs: 'vm',
        bindToController: true,
        link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: SidebarTreeviewController) {
            function expand() {
                if (element.hasClass('active')) {
                    return;
                }

                element.addClass('active');

                $animateCss(ctrl.menuElement, {
                    addClass: 'menu-open',
                    cleanupStyles: true,
                    duration: DURATION,
                    from: {
                        overflow: 'hidden',
                        height: '0'
                    },
                    to: {
                        height: ctrl.menuElement[0].scrollHeight + 'px'
                    }
                }).start();
            }

            function collapse() {
                if (!element.hasClass('active')) {
                    return;
                }

                $animateCss(ctrl.menuElement, {
                    removeClass: 'menu-open',
                    cleanupStyles: true,
                    duration: DURATION,
                    from: {
                        overflow: 'hidden',
                        height: ctrl.menuElement[0].scrollHeight + 'px'
                    },
                    to: {
                        height: '0'
                    }
                }).start().finally(() => {
                    element.removeClass('active');
                })
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

SidebarTreeviewDirective.$inject = ['$animateCss'];