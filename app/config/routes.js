function initStates($stateProvider, $ocLazyLoadProvider) {

    $stateProvider
        .state('index', {
            abstract: true,
            data: {isPublic: true},
            views: {
                'layout': {
                    controller: 'indexCtrl',
                    templateUrl: '/app/modules/index/views/layout.html',
                    resolve: resolveModule([ 'indexCtrlModule' ])
                }
            }
        })
        .state('home', {
            url: '/:imgIndex',
            parent: 'index',
            views: {
                'content': {
                    controller: 'mainPageCtrl',
                    templateUrl: '/app/modules/main/views/layout.html',
                    resolve: resolveModule([ 'homePageCtrl' ])
                }
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            parent: 'index',
            views: {
                'content': {
                    controller: 'dashboardCtrl',
                    templateUrl: '/app/modules/dashboard/views/layout.html',
                    resolve: resolveModule([ 'dashboardCtrl' ])
                }
            }
        });
    //.state('administration', {
    //    parent:'inner',
    //    data: {
    //        isPublic: false
    //    },
    //    url: '/administration',
    //    view: {
    //        content: {
    //            templateUrl: '/app/view/inner/pages/admin.html'
    //        }
    //    }
    //});
    function resolveModule(moduleName) {
        return {
            loadModules: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(moduleName);
            }]
        }
    }
}
