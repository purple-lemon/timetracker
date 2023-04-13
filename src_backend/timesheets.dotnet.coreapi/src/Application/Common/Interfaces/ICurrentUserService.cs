namespace timesheets.dotnet.coreapi.Application.Common.Interfaces;

public interface ICurrentUserService
{
    string? UserId { get; }
}
