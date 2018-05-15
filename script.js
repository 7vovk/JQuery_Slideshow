//Radio buttons checked:
jQuery.fn.reverse = [].reverse;

$('#radio').change(function () {
    $('input').each(function (i, elem) {
        if ($('.radio')[i].checked) {
            $(".block\\[" + i + "\\]").show('fade', {
                direction: "left"
            }, 400);
        } else {
            $(".block\\[" + i + "\\]").hide('fade', {
                direction: "left"
            }, 400);
        }
    })
})


//Right arrow key:
$('#right').click(function () {
    $('input').each(function (i, elem) {
        if ($('.radio')[i].checked) {
            if ($('.radio')[2].checked) {
                $('.radio')[0].checked = "true"
                $(".block\\[" + 0 + "\\]").show('drop', {
                    direction: "right"
                }, 500);
                $(".block\\[" + 2 + "\\]").hide('drop', {
                    direction: "left"
                }, 500);
                return false;
            } else {
                $('.radio')[i + 1].checked = "true";
                $(".block\\[" + [i] + "\\]").hide('drop', {
                    direction: "left"
                }, 500);
                $(".block\\[" + [i + 1] + "\\]").show('drop', {
                    direction: "right"
                }, 500);
                return false;
            }
        }
    })
})


//Left arrow key:
$('#left').click(function () {
    $('input').reverse().each(function (i, elem) {
        if ($('.radio')[i].checked) {
            if ($('.radio')[0].checked) {
                $('.radio')[2].checked = "true"
                $(".block\\[" + 2 + "\\]").show('drop', {
                    direction: "left"
                }, 500);
                $(".block\\[" + 0 + "\\]").hide('drop', {
                    direction: "right"
                }, 500);
                return false;
            } else {
                $('.radio')[i - 1].checked = "true";
                $(".block\\[" + [i] + "\\]").hide('drop', {
                    direction: "right"
                }, 500);
                $(".block\\[" + [i - 1] + "\\]").show('drop', {
                    direction: "left"
                }, 500);
                return false;
            }
        }
    })
})
