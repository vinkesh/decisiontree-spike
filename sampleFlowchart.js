var SampleFlowchart = function(person) {
    return [
        ask("question one"),
        ask("question two"),
        cond(function() {
            if(answerOf["question two"] == "Yes") {
                return [
                    ask("question Three"),
                    ask("question Six"),
                    cond(function() {
                        if(answerOf["question Six"] == "Yes") {
                            return [ask("question two")]
                        }
                    })
                ]
            }
        }),
        ask("question Four"),
        cond(function() {
            if(answerOf["question Four"] == "Yes") {
                return [ask("question Five")]
            }
        }),
    ]
}