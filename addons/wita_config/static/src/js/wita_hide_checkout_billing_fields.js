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
        billing_input_fields_to_hide[cif] = $(".billing-fields " + billing_input_fields_to_hide[cif] + "[name='" + cif + "']");
    }

    // CREATE THE BOOLEAN INPUT TO SHOW THE ADDITIONAL FIELDS


    var $wita_show_donation_deduction_billing_fields = $(".billing-fields input[name='wita_show_donation_deduction_billing_fields']");


    function wita_hide_billing(fields, mandatory_fields, $checkbox) {

        if ($checkbox.is(":checked")) {
            // Show the fields
            for (var f_name in fields) {

                // enable mandatory for some fields
                if (mandatory_fields.includes(f_name)) {
                    fields[f_name].attr('required', 'True');
                    fields[f_name].attr('aria-required', 'true');
                    var $f_label = $(".billing-fields label[for='" + f_name + "']");
                    $f_label.addClass('mandatory text-danger');
                }

                // show form-roup
                fields[f_name].closest('.form-group').show();
            }

        } else {
            // Hide the fields
            for (var f_name in fields) {

                // disable mandatory
                if (mandatory_fields.includes(f_name)) {
                    fields[f_name].removeAttr('required');
                    fields[f_name].removeAttr('aria-required');
                    var $f_label = $(".billing-fields label[for='" + f_name + "']");
                    $f_label.removeClass('mandatory text-danger');
                }

                // hide form-group
                fields[f_name].closest('.form-group').hide();
            }

        }
    }

    // First run
    wita_hide_billing(billing_input_fields_to_hide, billing_input_fields_to_hide_mandatory, $wita_show_donation_deduction_billing_fields);

    // Run on onchange of the checkbox
    $wita_show_donation_deduction_billing_fields.on("change", function (ev) {
        wita_hide_billing(billing_input_fields_to_hide, billing_input_fields_to_hide_mandatory, $wita_show_donation_deduction_billing_fields);
    });

});