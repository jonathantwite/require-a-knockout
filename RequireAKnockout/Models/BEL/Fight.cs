using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RequireAKnockout.Models.BEL
{
    public class Fight
    {
        public DateTime Date { get; set; }
        public Location Location { get; set; }
        public Category Category { get; set; }
        public Fighter Winner { get; set; }
        public Fighter Looser { get; set; }
        public VictoryType VictoryType { get; set; }
        public int ScheduledRounds { get; set; }
        public int CompletedRounds { get; set; }
    }
}