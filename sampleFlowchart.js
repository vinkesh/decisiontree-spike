var SampleFlowchart = function(person) {
    return [
        "question one",
        "question two",
        function() {
            if(answerOf["question two"] == "Yes") {
                return [
                    "question Three",
                    "question Six",
                    function() {
                        if(answerOf["question Six"] == "Yes") {
                            return ["question two"]
                        }
                    }
                ]
            }
        },
        "question Four",
        function() {
            if(answerOf["question Four"] == "Yes") {
                return ["question Five"]
            }
        },
    ]
}