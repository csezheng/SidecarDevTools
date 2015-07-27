(function() {
    var BDT = window.BDT;

    BDT.views.Repair = Backbone.View.extend({

        className: 'repair',
        template: BDT.templates['repair'],

        /**
         * Sets the available modules and call render.
         */
        initialize: function() {
            this.modules = [];
            this.subpanels = [];
            this.useCurrentContext = false;
            /**
             * Indicates if we should show the help panel or not.
             *
             * @property {boolean} displayHelp
             */
            this.displayHelp = false;

            var self = this;
            chrome.devtools.inspectedWindow.eval(
                'App.metadata.getModuleNames(\'enabled\')',
                function(result, isException) {
                    if (isException) {
                    }
                    else {
                        if (result) {
                            self.modules = result;
                            self.render();
                        }
                    }
                }
            );
        },


        /**
         * Renders the form.
         *
         * @return {window.BDT.views.Structure}
         */
        render: function() {
            this.$el.empty().append(this.template(this));

            return this;
        }

    });
})();
/**
 * Created by ezheng on 7/27/15.
 */
