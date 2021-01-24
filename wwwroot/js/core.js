const sumEstimate = () => {
    let values = []; //values pulled from the page
    const weights = [.5, .1, .1, .2, .1]; //grading weights
    let total = 0; //total score

    //for each element with this class name get the element value
    $('.num-input').each(function (index, ele) {
        values.push(ele.value);
    });

    //calculate the weighted score given the percents entered
    for (let i in values) {
        total += (values[i] != null) ?
            (Number(values[i]) > 100) ?
                100 * weights[i] : Number(values[i]) * weights[i]
            : 0;
    }

    //change the html page
    $('#total-grade-estimate').text(`${total.toFixed(1)}%`);
}

//on change this function will run
$('.num-input').change(sumEstimate);

$('.num-input').focusout(function() {
    if (Number($(this).val()) > 100) {
        $(this).val('100');
    }
});