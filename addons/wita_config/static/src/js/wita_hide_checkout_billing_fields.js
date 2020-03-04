$(document).ready(function () {

    // Init
    var billing_input_fields_to_hide = {
        'birthdate': 'input',
        'phone': 'input',
        'street': 'input',
        'street_number_web': 'input',
        'zip': 'input',
        'city': 'input',
        'country_id': 'select',
        };
    var billing_input_fields_to_hide_mandatory = [
        'birthdate',
        'street',
        'zip',
        'city',
        ];
    for (var cif in billing_input_fields_to_hide) {
        billing_input_fields_to_hide[cif] = $(".billing-fields "+billing_input_fields_to_hide[cif]+"[name='"+cif+"']");
    }
    var $donation_deduction_optout_web = $(".billing-fields input[name='donation_deduction_optout_web']");


    function wita_hide_billing(fields, mandatory_fields, $checkbox) {

        if ($checkbox.is(":checked")) {
            // Show the fields
            for (var f_name in fields) {

                // enable mandatory for some fields
                if (f_name in mandatory_fields) {
                  fields[f_name].attr('required', 'True');
                  fields[f_name].attr('aria-required', 'True');
                  var $f_label = fields[f_name].closest(".billing-fields label[for='"+f_name+"']");
                  $f_label.addClass('mandatory');
                }

                // show form-roup
                fields[f_name].closest('.form-group').show();
            }

        } else {
            // Hide the fields
            for (var f_name in fields) {

                // disable mandatory
                if (f_name in mandatory_fields) {
                  fields[f_name].removeAttr('required');
                  fields[f_name].removeAttr('aria-required');
                  var $f_label = fields[f_name].closest(".billing-fields label[for='"+f_name+"']");
                  $f_label.removeClass('mandatory');
                }

                // hide form-group
                fields[f_name].closest('.form-group').hide();
            }

        }
    }

    // First run
    wita_hide_billing(billing_input_fields_to_hide, billing_input_fields_to_hide_mandatory, $donation_deduction_optout_web);

    // Run on onchange of the checkbox
    $donation_deduction_optout_web.on("change", function (ev) {
        wita_hide_billing(billing_input_fields_to_hide, billing_input_fields_to_hide_mandatory, $donation_deduction_optout_web);
    });

});