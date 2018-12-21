requirejs.config({
    baseUrl: 'scripts/app',
    paths: {
        'knockout': '../vendor/knockout-3.3.0',
        'knockout-mapping': '../vendor/knockout.mapping-latest',
        'text': '../vendor/text',
        'axios': '../vendor/axios.min'
    }
});

require(['knockout', 'knockout-mapping', 'ajax', 'components/page-title', 'components/fight-panel'], function (ko, komapping, ajax) {
    ko.components.register('page-title', { require: 'components/page-title' });
    ko.components.register('fight-panel', { require: 'components/fight-panel' });

    ko.mapping = komapping;

    var ViewModel = function () {
        var self = this;

        self.pageTitle = ko.observable('Require a knockout');
        self.fights = ko.observableArray();

        ajax.getAllResults().then(function (data) {
            console.log(data);
            //data.data.forEach(function (fight) {
            //    self.fights.push(fight);
            //});
            var fights = ko.mapping.fromJS(data.data);
            self.fights(fights());

        });
    };

    var vm = new ViewModel();
    ko.applyBindings(vm);
    
    return vm;
});