using Microsoft.EntityFrameworkCore;
using ProductService.Data;

var builder = WebApplication.CreateBuilder(args);

// 1. Register the database — tells .NET to use SQLite with this file
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=shopsphere.db"));

// 2. Register controllers — enables our ProductsController
builder.Services.AddControllers();

// 3. Enable CORS — allows React (5173) and Angular (4200) to call this API
// Without this the browser blocks cross-origin requests
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontends", policy =>
        policy.WithOrigins(
            "http://localhost:5173",  // React
            "http://localhost:4200"   // Angular
        )
        .AllowAnyHeader()
        .AllowAnyMethod());
});

var app = builder.Build();

// 4. Auto-create and seed the database on startup
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated(); // Creates tables + runs seed data
}

// 5. Use CORS before routing
app.UseCors("AllowFrontends");

app.UseAuthorization();
app.MapControllers();

// 6. Start listening on port 5000
app.Run("http://localhost:5000");