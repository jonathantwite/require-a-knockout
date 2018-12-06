requirejs.config({
    baseUrl: 'scripts/app',
    paths: {
        "knockout": "../vendor/knockout-3.3.0",
        "text": "../vendor/text",
    }
});

require(['knockout'], function (ko) {
    ko.components.register('page-title', { require: 'components/page-title' });

    var ViewModel = function () {
        var self = this;

        self.pageTitle = ko.observable('Require a knockout');
    }

    var vm = new ViewModel();
    ko.applyBindings(vm);
    
    return vm;
});