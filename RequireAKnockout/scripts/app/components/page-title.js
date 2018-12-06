define(['knockout', 'text!./page-title.html'], function (ko, htmlString) {
    var PageTitleViewModel = function (params) {
        this.pageTitle = params.pageTitle;
    };

    return { viewModel: PageTitleViewModel, template: htmlString };
});