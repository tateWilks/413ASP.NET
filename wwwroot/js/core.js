const getLetterGrade = (score) => {  // y'all really docked 10 (!?) points from assignment 1 for not including this? the disrespect...
    if (score >= 94)
        return 'A';
    else if (score < 94 && score >= 90)
        return 'A-';
    else if (score < 90 && score >= 87)
        return 'B+';
    else if (score < 87 && score >= 84)
        return 'B';
    else if (score < 84 && score >= 80)
        return 'B-';
    else if (score < 80 && score >= 77)
        return 'C+';
    else if (score < 77 && score >= 74)
        return 'C';
    else if (score < 74 && score >= 70)
        return 'C-';
    else if (score < 70 && score >= 67)
        return 'D+';
    else if (score < 67 && score >= 64)
        return 'D';
    else if (score < 64 && score >= 60)
        return 'D-';
    else
        return 'E';
}

const sumEstimate = () => {
    let values = []; //values pulled from the page
    const weights = [.5, .1, .1, .2, .1]; //grading weights
    let total = 0; //total score

    //for each element with this class name get the element value
    $('.num-input').each(function (index, ele) {
        values.push(Number(ele.value));
    });

    //calculate the weighted score given the percents entered
    for (let i in values) {
        if (values[i] > 100)
            total += 100 * weights[i];
        else if (values[i] < 0)
            total += 0 * weights[i];
        else
            total += values[i] * weights[i];
    }

    let sGrade = getLetterGrade(total);

    //change the html page
    $('#total-grade-estimate').text(`${total.toFixed(1)}% ${sGrade}`);
}

//on change this function will run
$('.num-input').change(sumEstimate);

//js function that won't let the value be lower than 0 or greater than 100
$('.num-input').focusout(function() {
    if (Number($(this).val()) > 100) {
        $(this).val('100');
    } else if (Number($(this).val()) < 0) {
        $(this).val('0');
    }
});