using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web;

namespace AboutMe.Models
{
    public class Calculator
    {
        [Required(ErrorMessage = "*Required field")] //make sure it's entered
        [Range(0, 100, ErrorMessage = "Value must be between 0 and 100")] // this is here but the javascript won't let it be outside the range anyway
        public string Assignments { get; set; } //this won't display my error messages unless it's a string. why? how do i convert?
        [Required(ErrorMessage = "*Required field")]
        [Range(0, 100, ErrorMessage = "Value must be between 0 and 100")]
        public string GroupProjects { get; set; }
        [Required(ErrorMessage = "*Required field")]
        [Range(0, 100, ErrorMessage = "Value must be between 0 and 100")]
        public string Quizzes { get; set; }
        [Required(ErrorMessage = "*Required field")]
        [Range(0, 100, ErrorMessage = "Value must be between 0 and 100")]
        public string Exams { get; set; }
        [Required(ErrorMessage = "*Required field")]
        [Range(0, 100, ErrorMessage = "Value must be between 0 and 100")]
        public string Intex { get; set; }
    }
}
