/**
 * Created by joe on 23.05.22.
 */
$(document).ready( function() {
    const queryString = window.location.search;
    // if only when category = 4 .... sonst mach gar nix ..... bessere performance .... !?
    //actually not needed in querys because JS is only loaded in xml at category 4
    //console.log("url: ", queryString); // ?wita_em=True
    const urlParams = new URLSearchParams(queryString);
    //console.log("Parametercheck: ", urlParams.has('wita_em')); // true
    if ( urlParams.has('wita_em') ) {
        const witaemParameter = urlParams.get('wita_em')
        //console.log("paramteronly: ", witaemParameter);
        if ( witaemParameter ) {
            //this class needs to be added in the "shopfields" at company web
            //document.querySelector('.company-web').style.display = 'none'
            //teurer als nur display none

            var element = document.getElementsByClassName("company-web")[0];
            //console.log("element:", element);
            //var element = $(this).find('.company-web');
            element.classList.add("hidden");
            //to unhide, really remove the class or better only display none or block .... for performance reasons?
            //this class needs to be added in the "shopfields" at company web
            //document.querySelector('.company-web').style.display = 'none'
            var element = document.getElementsByClassName("wita-em")[0];
            //var element = $(this).find('.wita-em');
            element.classList.remove("hidden");
        }
    }
});