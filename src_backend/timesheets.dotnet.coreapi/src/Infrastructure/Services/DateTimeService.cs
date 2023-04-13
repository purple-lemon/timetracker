using timesheets.dotnet.coreapi.Application.Common.Interfaces;

namespace timesheets.dotnet.coreapi.Infrastructure.Services;

public class DateTimeService : IDateTime
{
    public DateTime Now => DateTime.UtcNow;
}
