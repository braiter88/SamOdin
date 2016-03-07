function initModules($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [

            /* Modules */
            {
                name: 'indexCtrlModule',
                files: ['/app/modules/index/controllers/indexCtrl.js' ]
            },
            {
                name: 'homePageCtrl',
                files: ['/app/modules/main/controllers/mainPageCtrl.js' ]
            },
            {
                name: 'dashboardCtrl',
                files: ['/app/modules/dashboard/controllers/dashboardCtrl.js' ]
            }
        ]
    });
}
