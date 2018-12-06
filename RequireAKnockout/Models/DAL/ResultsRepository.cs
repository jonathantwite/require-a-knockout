using RequireAKnockout.Models.BEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RequireAKnockout.Models.DAL
{
    public class ResultsRepository
    {
        private Category LightHeavyweight = new Category() { Name = "Light Heavyweight" };
        private Category Heavyweight = new Category() { Name = "Heavyweight" };
        private Category Welterweight = new Category() { Name = "Welterweight" };

        private Location Quebec = new Location() { Name = "Centre Videotron", City = "Quebec City", Country = "Canada" };

        private IEnumerable<Fight> AllFights;

        public ResultsRepository()
        {
            AllFights = new List<Fight>() {
                new Fight() {
                    Date = new DateTime(2018, 12, 01),
                    Location = Quebec,
                    Category = LightHeavyweight,
                    Winner = new Fighter(){ Name = "Oleksandr Gvozdyk" },
                    Looser = new Fighter(){ Name = "Adonis Stevenson" },
                    CompletedRounds = 11,
                    ScheduledRounds = 12,
                    VictoryType = VictoryType.KnockOut
                },
                new Fight() {
                    Date = new DateTime(2018, 12, 01),
                    Location = Quebec,
                    Category = Welterweight,
                    Winner = new Fighter(){ Name = "Mikael Zewski" },
                    Looser = new Fighter(){ Name = "Aaron Herrera" },
                    CompletedRounds = 10,
                    ScheduledRounds = 10,
                    VictoryType = VictoryType.UnanimousDecision
                },
                new Fight() {
                    Date = new DateTime(2018, 12, 01),
                    Location = Quebec,
                    Category = Welterweight,
                    Winner = new Fighter(){ Name = "Sebastien Bouchard" },
                    Looser = new Fighter(){ Name = "Vitor Jones Freitas" },
                    CompletedRounds = 3,
                    ScheduledRounds = 10,
                    VictoryType = VictoryType.TechnicalKnockOut
                },
                new Fight() {
                    Date = new DateTime(2018, 12, 01),
                    Location = Quebec,
                    Category = LightHeavyweight,
                    Winner = new Fighter(){ Name = "Oscar Rivas" },
                    Looser = new Fighter(){ Name = "Fabio Maldonado" },
                    CompletedRounds = 10,
                    ScheduledRounds = 10,
                    VictoryType = VictoryType.UnanimousDecision
                }
            };
        }

        public IEnumerable<Fight> GetAllFights()
        {
            return AllFights;
        }
    }
}


//http://fightnights.com/boxing-results

//Sat, Dec 01 2018  Centre Videotron, Quebec City, Quebec, Canada
//Adonis Stevenson 174lbs L Oleksandr Gvozdyk 174lbs W KO 11/12 -       World Boxing Council World Light Heavyweight Title
//Mikael Zewski 147lbs W Aaron Herrera 144lbs L UD 10/10 -              World Boxing Council International Welterweight Title - Richard DeCarufel 100-90 | Nicolas Esnault 100-90 | Guido Cavalleri 100-90
//Sebastien Bouchard 147lbs W Vitor Jones Freitas 143¼lbs L TKO 3/10 -  vacant World Boxing Council Continental Americas Welterweight Title
//Fabio Maldonado 237lbs L Oscar Rivas 241lbs W UD 10/10 -              NABF Heavyweight Title - Mike Ross 99-90 | Marie-Josee Guerin 100-89 | Guy Girard 99-90