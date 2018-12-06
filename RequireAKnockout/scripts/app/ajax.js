define(['axios'], function (axios) {
    var ajax = {};

    ajax.getAllResults = function () {
        return axios.get('/api/Results/GetAllResults').catch(function (error) {
            console.log(error);
        });
    };

    return ajax;
});