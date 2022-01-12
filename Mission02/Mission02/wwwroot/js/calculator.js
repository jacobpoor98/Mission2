$("#btnSend").click(function () {
    var assignments = parseFloat($("#assignments").val());
    var groupprojects = parseFloat($("#groupprojects").val());
    var quizzes = parseFloat($("#quizzes").val());
    var exams = parseFloat($("#exams").val());
    var intex = parseFloat($("#intex").val());

    var weightedAssignment = assignments * 0.55;
    var weightedProjects = groupprojects * 0.05;
    var weightedQuizzes = quizzes * 0.1;
    var weightedExams = exams * 0.2;
    var weightedIntex = intex * 0.1;

    var finalGrade = weightedAssignment + weightedProjects +
        weightedQuizzes + weightedExams + weightedIntex;

    finalGrade = finalGrade * 100;
    finalGrade = finalGrade.toFixed(2);

    var letterGrade;

    if (finalGrade >= 94) {
        letterGrade = "A";
    } else if (finalGrade >= 90) {
        letterGrade = "A-";
    } else if (finalGrade >= 87) {
        letterGrade = "B+";
    } else if (finalGrade >= 84) {
        letterGrade = "B";
    } else if (finalGrade >= 80) {
        letterGrade = "B-";
    } else if (finalGrade >= 77) {
        letterGrade = "C+";
    } else if (finalGrade >= 74) {
        letterGrade = "C";
    } else if (finalGrade >= 70) {
        letterGrade = "C-";
    } else if (finalGrade >= 67) {
        letterGrade = "D+";
    } else if (finalGrade >= 64) {
        letterGrade = "D";
    } else if (finalGrade >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }

    alert("You scored a " + finalGrade + "%. You get a " + letterGrade + "!");
})