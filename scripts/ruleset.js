$(document).ready(function(){
    //save ruleset on click
    $('#saveRuleset').on('click', function(){

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


        $.post({
        url: "http://52.77.80.70:5000/api/v1"+rulesetname+"/definition"
        data: JSON.stringify(obj)
        })
        .done(function (resp, text, jqxhr){

                console.log(resp);
                alert(resp);
            })

        .fail(function () {
            //window.location.replace(redirect_path);
            console.log('Health check failed');
        });

    });

});
