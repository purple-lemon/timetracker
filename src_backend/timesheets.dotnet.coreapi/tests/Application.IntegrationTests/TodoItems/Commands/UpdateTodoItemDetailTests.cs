using timesheets.dotnet.coreapi.Application.Common.Exceptions;
using timesheets.dotnet.coreapi.Application.TodoItems.Commands.CreateTodoItem;
using timesheets.dotnet.coreapi.Application.TodoItems.Commands.UpdateTodoItem;
using timesheets.dotnet.coreapi.Application.TodoItems.Commands.UpdateTodoItemDetail;
using timesheets.dotnet.coreapi.Application.TodoLists.Commands.CreateTodoList;
using timesheets.dotnet.coreapi.Domain.Entities;
using timesheets.dotnet.coreapi.Domain.Enums;
using FluentAssertions;
using NUnit.Framework;

namespace timesheets.dotnet.coreapi.Application.IntegrationTests.TodoItems.Commands;

using static Testing;

public class UpdateTodoItemDetailTests : BaseTestFixture
{
    [Test]
    public async Task ShouldRequireValidTodoItemId()
    {
        var command = new UpdateTodoItemCommand { Id = 99, Title = "New Title" };
        await FluentActions.Invoking(() => SendAsync(command)).Should().ThrowAsync<NotFoundException>();
    }

    [Test]
    public async Task ShouldUpdateTodoItem()
    {
        var userId = await RunAsDefaultUserAsync();

        var listId = await SendAsync(new CreateTodoListCommand
        {
            Title = "New List"
        });

        var itemId = await SendAsync(new CreateTodoItemCommand
        {
            ListId = listId,
            Title = "New Item"
        });

        var command = new UpdateTodoItemDetailCommand
        {
            Id = itemId,
            ListId = listId,
            Note = "This is the note.",
            Priority = PriorityLevel.High
        };

        await SendAsync(command);

        var item = await FindAsync<TodoItem>(itemId);

        item.Should().NotBeNull();
        item!.ListId.Should().Be(command.ListId);
        item.Note.Should().Be(command.Note);
        item.Priority.Should().Be(command.Priority);
        item.LastModifiedBy.Should().NotBeNull();
        item.LastModifiedBy.Should().Be(userId);
        item.LastModified.Should().NotBeNull();
        item.LastModified.Should().BeCloseTo(DateTime.Now, TimeSpan.FromMilliseconds(10000));
    }
}
