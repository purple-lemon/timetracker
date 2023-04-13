using System.Globalization;
using timesheets.dotnet.coreapi.Application.Common.Interfaces;
using timesheets.dotnet.coreapi.Application.TodoLists.Queries.ExportTodos;
using timesheets.dotnet.coreapi.Infrastructure.Files.Maps;
using CsvHelper;

namespace timesheets.dotnet.coreapi.Infrastructure.Files;

public class CsvFileBuilder : ICsvFileBuilder
{
    public byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records)
    {
        using var memoryStream = new MemoryStream();
        using (var streamWriter = new StreamWriter(memoryStream))
        {
            using var csvWriter = new CsvWriter(streamWriter, CultureInfo.InvariantCulture);

            csvWriter.Context.RegisterClassMap<TodoItemRecordMap>();
            csvWriter.WriteRecords(records);
        }

        return memoryStream.ToArray();
    }
}
