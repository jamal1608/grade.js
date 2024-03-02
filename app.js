
var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));

var totalMarks = prompt("Enter total marks:");


var totalObtainedMarks = subject1 + subject2 + subject3;

// Calculate percentage
var percentage = (totalObtainedMarks / totalMarks)* 100;


var grade;
if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}


var remarks = getRemarks(grade);

// Display the mark sheet
console.log("------------- Mark Sheet -------------");
console.log("Total Marks: " +   totalMarks);
console.log("Marks Obtained:" + totalObtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
console.log("Remarks: " + remarks);
console.log("-------------------------------------");

//Display on the browser
document.writeln("-------------Mark sheet-----------")
document.write("<br>");
document.writeln("Total Marks: " +   totalMarks);
document.write("<br>");
document.writeln("Marks Obtained:" + totalObtainedMarks);
document.write("<br>");
document.writeln("Percentage: " + percentage.toFixed(2) + "%");
document.write("<br>");
document.writeln("Grade: " + grade);
document.write("<br>");
document.writeln("Remarks: " + remarks);
document.write("<br>");
document.writeln("-------------------------------------");

function getRemarks(grade) {
    switch (grade) {
        case 'A':
            return 'Excellent! Keep it up.';
        case 'B':
            return 'Good. Work harder for better results.';
        case 'C':
            return 'Satisfactory. Improvement needed.';
        case 'D':
            return 'Barely passed. Focus on your studies.';
        case 'F':
            return 'Fail. You need to seriously improve your performance.';
        default:
            return 'Invalid grade';
    }
}
