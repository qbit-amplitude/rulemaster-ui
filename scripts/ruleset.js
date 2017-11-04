$(document).ready(function(){
    //save ruleset on click
    $('#saveRuleset').on('click', function(){

        var rulesetname = $('#rulesetname').val();
        var ruleset_type = $('#ruleset_type').val();
        var operator = $('#operator').val();
        var condition = $('#condition').val();
        var action = $('#action').val();
        console.log(JSON.parse('{'+condition+'}'));

        var obj= {}
        if (ruleset_type == 'state'){
            obj[rulesetname+'$state'] = {"start" : {operator: [{"m":JSON.parse('{'+condition+'}')}],run:action}} }
        else if (ruleset_type == 'None') {
            obj[rulesetname] =  {"start" : {operator: [{"m":JSON.parse('{'+condition+'}')}],run:action}}
        }

        console.log(obj);


        $.post({
        url: null
        })
        .done(function (resp, text, jqxhr){

            })

        .fail(function () {
            //window.location.replace(redirect_path);
            console.log('Health check failed');
        });

    });

});
