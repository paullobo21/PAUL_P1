function calculateSGPA() {
    var marks = [];
    var credits = [4, 4, 3, 3, 3, 1, 1, 1];
    var totalGradePoints = 0;
    var totalCredits = 0;
    var result = document.getElementById("result");
  
    for (var i = 1; i <= 8; i++) {
      var mark = parseFloat(document.getElementById("subject" + i).value);
      marks.push(mark);
      totalGradePoints += calculateGradePoint(mark) * credits[i - 1];
      totalCredits += credits[i - 1];
    }
  
    var sgpa = totalGradePoints / totalCredits;
    result.innerHTML = "Your SGPA is: " + (sgpa.toFixed(2)*10);
  }
  
  function calculateGradePoint(mark) {
    if (mark >= 90) {
      return 1.0;
    } else if (mark >= 80) {
      return 0.9;
    } else if (mark >= 70) {
      return 0.8;
    } else if (mark >= 60) {
      return 0.7;
    } else if (mark >= 50) {
      return 0.6;
    } else if (mark >= 40) {
      return 0.5;
    } else {
      return 0;
    }
  }
  