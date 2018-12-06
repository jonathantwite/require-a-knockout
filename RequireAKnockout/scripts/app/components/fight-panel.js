define(['knockout', 'text!./fight-panel.html'], function (ko, htmlString) {
    var FightPanelViewModel = function (params) {
        this.category = params.fight.Category;
        this.completedRounds = params.fight.CompletedRounds;
        this.date = params.fight.Date;
        this.location = params.fight.Location;
        this.looser = params.fight.Looser;
        this.scheduledRounds = params.fight.ScheduledRounds;
        this.winner = params.fight.Winner;
        this.victoryType = params.fight.VictoryType;
    };

    return { viewModel: FightPanelViewModel, template: htmlString };
});