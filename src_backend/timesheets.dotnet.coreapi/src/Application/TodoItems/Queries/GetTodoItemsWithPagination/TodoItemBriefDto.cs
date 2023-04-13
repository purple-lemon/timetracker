using timesheets.dotnet.coreapi.Application.Common.Mappings;
using timesheets.dotnet.coreapi.Domain.Entities;

namespace timesheets.dotnet.coreapi.Application.TodoItems.Queries.GetTodoItemsWithPagination;

public class TodoItemBriefDto : IMapFrom<TodoItem>
{
    public int Id { get; set; }

    public int ListId { get; set; }

    public string? Title { get; set; }

    public bool Done { get; set; }
}
