const resizeEvent = 'resize';

export let WrapperDirective: ng.IDirectiveFactory = function ($window: ng.IWindowService) {
    let directive: ng.IDirective = {
        restrict: 'A',
        scope: {},
        link: function ($scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {
            let running = false;
            let window = angular.element($window);
            let wrapper: HTMLElement = element[0];
            let mainHeader: HTMLElement = wrapper.querySelector('.main-header') as HTMLElement;
            let mainSidebar: HTMLElement = wrapper.querySelector('.main-sidebar') as HTMLElement;
            let contentWrapper: HTMLElement = wrapper.querySelector('.content-wrapper') as HTMLElement;
            let mainFooter: HTMLElement = wrapper.querySelector('.main-footer') as HTMLElement;

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