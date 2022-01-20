using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Diagnostics.Contracts;
using System.Collections.Generic;

namespace Kolokwium.Api.Controllers
{

    [ApiController]
    [Produces("application/json")]
    [Route("student")]
    public class StudentController : ControllerBase
    {
        private ApplicationDbContext DbContext;

        public StudentController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetStudents()
        {
            try
            {
                var students = await DbContext.Students.ToListAsync();
                if (students == null)
                {
                    return NotFound("Couldn`t find students");
                }
                else
                {
                    return Ok(students);
                }
            }
            catch
            {
                return this.Problem(detail: "error", title: "error");
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddStudent(Student student)
        {
            try
            {
                DbContext.Students.Add(student);
                await DbContext.SaveChangesAsync();
                return Ok(student);
            }
            catch
            {
                return this.Problem(detail: "error", title: "error");
            }
        }

        [HttpPut]
        public async Task<IActionResult> EditStudent(Student student)
        {
            try
            {
                var studentToChange = DbContext.Students.First(item => item.Id == student.Id);
                studentToChange.FirstName = student.FirstName;
                studentToChange.LastName = student.LastName;
                studentToChange.Age = student.Age;

                await DbContext.SaveChangesAsync();

                return Ok(studentToChange);
            }
            catch
            {
                return this.Problem(detail: "error", title: "error");
            }
        }

    }
}