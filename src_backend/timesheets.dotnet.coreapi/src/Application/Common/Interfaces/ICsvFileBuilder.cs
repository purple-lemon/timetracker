using timesheets.dotnet.coreapi.Application.TodoLists.Queries.ExportTodos;

namespace timesheets.dotnet.coreapi.Application.Common.Interfaces;

public interface ICsvFileBuilder
{
    byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
}
