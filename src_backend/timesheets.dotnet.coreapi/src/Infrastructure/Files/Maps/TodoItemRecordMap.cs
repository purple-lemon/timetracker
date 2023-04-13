using System.Globalization;
using timesheets.dotnet.coreapi.Application.TodoLists.Queries.ExportTodos;
using CsvHelper.Configuration;

namespace timesheets.dotnet.coreapi.Infrastructure.Files.Maps;

public class TodoItemRecordMap : ClassMap<TodoItemRecord>
{
    public TodoItemRecordMap()
    {
        AutoMap(CultureInfo.InvariantCulture);

        Map(m => m.Done).Convert(c => c.Value.Done ? "Yes" : "No");
    }
}
