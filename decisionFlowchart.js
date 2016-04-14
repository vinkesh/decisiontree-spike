var ask = function(question) {
    return function() {
        $("#questionText").text(questionBank[question].text);
        var list = $("#answers > ul");
        if(list) {
            list.remove();
        }
        var list = $("<ul/>").appendTo("#answers")
        questionBank[question].answers.forEach(function(answer) {
            var ans = $('<li/>').text(answer).appendTo(list);
        })
    }
}

var cond = function(func) {
    return func;
}