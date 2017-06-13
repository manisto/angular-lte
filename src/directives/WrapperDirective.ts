const resizeEvent = 'resize';

export let WrapperDirective: ng.IDirectiveFactory = function ($window: ng.IWindowService) {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        link: function ($scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {
            let running = false;
            let window = angular.element($window);
            let wrapper: HTMLElement = element[0];
            let mainHeader: HTMLElement = <HTMLElement>wrapper.children[0];
            let mainSidebar: HTMLElement = <HTMLElement>wrapper.children[1];
            let contentWrapper: HTMLElement = <HTMLElement>wrapper.children[2];
            let mainFooter: HTMLElement = <HTMLElement>wrapper.children[3];

            let watches: any[] = [];
            watches.push(() => wrapper.offsetHeight);
            watches.push(() => mainSidebar.offsetHeight);

            function requestHeightAdjustment() {
                if (running) {
                    return;
                }

                running = true;

                $window.requestAnimationFrame(() => {
                    $scope.$apply(() => {
                        adjustHeight();
                        running = false;
                    });
                });
            }

            function adjustHeight() {
                let wrapperHeight = wrapper.offsetHeight;
                let sidebarHeight = mainSidebar.offsetHeight;
                let offset: number = mainHeader.offsetHeight + mainFooter.offsetHeight;

                if (wrapperHeight > sidebarHeight) {
                    contentWrapper.style.minHeight = (wrapperHeight - offset) + 'px';
                } else {
                    contentWrapper.style.minHeight = (sidebarHeight - offset) + 'px';
                }
            }

            $scope.$watchGroup(watches, () => {
                requestHeightAdjustment();
            });

            window.on(resizeEvent, requestHeightAdjustment);

            $scope.$on('$destroy', () => {
                window.off(resizeEvent, requestHeightAdjustment);
            });
        }
    };

    return directive;
};

WrapperDirective.$inject = ['$window'];