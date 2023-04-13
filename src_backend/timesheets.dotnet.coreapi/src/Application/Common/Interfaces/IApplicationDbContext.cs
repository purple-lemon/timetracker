using timesheets.dotnet.coreapi.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace timesheets.dotnet.coreapi.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<TodoList> TodoLists { get; }

    DbSet<TodoItem> TodoItems { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
