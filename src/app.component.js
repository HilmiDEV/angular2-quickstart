(function(app) {
    app.AppComponent =
        ng.core.Component({
                selector: 'my-app',
                template: '<h1>My First Angular 2 App</h1><br><b>Look I am here !</b>'
            })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));