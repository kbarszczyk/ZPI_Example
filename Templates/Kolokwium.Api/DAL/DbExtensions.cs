using Microsoft.Extensions.DependencyInjection;

namespace Kolokwium.Api.DAL {
    public static class DbExtensions {
        public static void SeedData (this IServiceCollection serviceCollection) {
            var serviceProvider = serviceCollection.BuildServiceProvider ();
            var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext> ();
            dbContext.AddRange (
                // example of adding in memory data
                // new Person () {
                //     Id = 1,
                //         FirstName = "AA",
                //         LastName = "BB"
                // },
                // new Person () {
                //     Id = 2,
                //         FirstName = "CCCAA",
                //         LastName = "CCCBB"
                // }

                new Student(){
                    Id=1,
                    FirstName="Konrad",
                    LastName="Barszczyk",
                    Age=23
                }
            );
            dbContext.SaveChanges ();
        }
    }
}