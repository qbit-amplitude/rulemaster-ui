$(document).ready(function(){
    //save ruleset on click
    $('#saveRuleset').click(function(){

        var rulesetname = $('#rulesetname').val();
        var ruleset_type = $('#ruleset_type').val();
        var rule = $('#rule').val();
        rule = JSON.parse(rule);


        var obj= {}
        if (ruleset_type == 'state'){
            rulesetname = rulesetname+'$state';
            obj[rulesetname] = rule;
            }
        else if (ruleset_type == 'None') {
            obj[rulesetname] =   rule;
        }


        console.log(obj);


        $.ajax({
        type: "POST",
        url: "http://52.77.80.70/api/v1/"+rulesetname+"/definition",
        data: JSON.stringify(obj),
        success: function(json) { console.log(json); alert(json); console.log(json)}

        });


    });

});
