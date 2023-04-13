using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace timesheets.dotnet.coreapi.Domain.Common;
public class BasePartitionedEntity : BaseAuditableEntity
{
    public string PartitionKey { get; set; }
}
