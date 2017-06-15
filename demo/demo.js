let demoModule = angular.module('demo', [
    'ngAnimate',
    'ui.bootstrap',
    'ui.router',
    'angular-lte'
]);


demoModule.config(($stateProvider, $urlServiceProvider) => {
    $urlServiceProvider.rules.otherwise('/dashboard/v1');

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        abstract: true
    });

    $stateProvider.state('dashboard.v1', {
        url: '/v1',
        component: 'dashboardV1'
    });

    $stateProvider.state('forms', {
        url: '/forms',
        abstract: true
    });

    $stateProvider.state('forms.general-elements', {
        url: '/general-elements',
        component: 'formsGeneralElements'
    });
});

demoModule.component('sidebar', {
    templateUrl: '/components/sidebar.html',
    controller: function($state) {
        this.$state = $state;
    }
});

demoModule.component('dashboardV1', {
    templateUrl: '/pages/dashboard/dashboard-v1.html'
});

demoModule.component('formsGeneralElements', {
    templateUrl: '/pages/forms/general-elements.html'
});