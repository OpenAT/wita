// CKEditor Settings
(function () {
    'use strict';
    // Overwrite class method of website/static/src/js/website.editor.js@839
    // to append/set/override CKEDITOR.config for wrapwrap editor
    openerp.website.RTE = openerp.website.RTE.extend({
        _config: function () {
            // Run the original method to modify it's result
            var config =  this._super();

            // Set custom toolbar
            // https://docs.ckeditor.com/ckeditor4/latest/guide/dev_toolbar.html
            config.toolbar = [{
                name: 'insert', items: [
                    "PrintField"
                ]
            }, {
                name: 'basicstyles', items: [
                    "Bold", "Italic", "Underline", "Strike", "Subscript",
                    "Superscript", "TextColor", "BGColor", "RemoveFormat"
                ]
            }, {
                name: 'span', items: [
                    "Link", "Blockquote", "BulletedList",
                    "NumberedList", "Indent", "Outdent"
                ]
            }, {
                name: 'justify', items: [
                    "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"
                ]
            }, {
                name: 'special', items: [
                    "Image"
                ]
            }, {
                name: 'styles', items: [
                    "Styles",
                ]
            }
            ];

            // Add Custom font and font background colors
            config.colorButton_colors = 'ffffff,333333,666666,97a7b0,72848d,394b53,f7a600,ef7c00,e74406,c22b02,9b0600';
            // config.colorButton_colorsPerRow = 3;
            config.colorButton_enableAutomatic = true;


            // styles dropdown in toolbar
            config.stylesSet = [
                {name: 'p Normal', element: 'p'},
                {name: 'H1', element: 'h1'},
                {name: 'H2', element: 'h2'},
                {name: 'H3', element: 'h3'},
                {name: 'H4', element: 'h4'},
                {name: 'H5', element: 'h5'},
                {name: 'H6', element: 'h6'},
                {name: 'H1-OS', element: 'h1' , attributes : { 'class' : 'h1-os' } },
                {name: 'H2-OS', element: 'h2' , attributes : { 'class' : 'h2-os' } },
                {name: 'H3-OS', element: 'h3' , attributes : { 'class' : 'h3-os' } },
                {name: 'H4-OS', element: 'h4' , attributes : { 'class' : 'h4-os' } },
                {name: 'H5-OS', element: 'h5' , attributes : { 'class' : 'h5-os' } },
                {name: 'H6-OS', element: 'h6' , attributes : { 'class' : 'h6-os' } },
                {name: 'Formatted', element: 'pre'},
                {name: 'Address', element: 'address'},
            ];

            // return the config
            return config;
        }
    });
})();





