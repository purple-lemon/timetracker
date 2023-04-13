using timesheets.dotnet.coreapi.Application.Common.Mappings;
using timesheets.dotnet.coreapi.Domain.Entities;

namespace timesheets.dotnet.coreapi.Application.TodoLists.Queries.ExportTodos;

public class TodoItemRecord : IMapFrom<TodoItem>
{
    public string? Title { get; set; }

    public bool Done { get; set; }
}
