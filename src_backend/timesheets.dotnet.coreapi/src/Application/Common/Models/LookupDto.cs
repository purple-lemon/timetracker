using timesheets.dotnet.coreapi.Application.Common.Mappings;
using timesheets.dotnet.coreapi.Domain.Entities;

namespace timesheets.dotnet.coreapi.Application.Common.Models;

// Note: This is currently just used to demonstrate applying multiple IMapFrom attributes.
public class LookupDto : IMapFrom<TodoList>, IMapFrom<TodoItem>
{
    public int Id { get; set; }

    public string? Title { get; set; }
}
