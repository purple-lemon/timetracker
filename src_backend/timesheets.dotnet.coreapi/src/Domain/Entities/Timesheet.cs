using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace timesheets.dotnet.coreapi.Domain.Entities;
public class Timesheet : BasePartitionedEntity
{
    public long Id { get; set; }
    public string ReporterId { get; set; }
    public DateTimeOffset WeekStartDate
    {
        get; set;
    }
}
