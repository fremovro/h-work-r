import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
    didInsertElement() {
        this._super(...arguments);
        // return $(function () {
		// 	$('.datepicker').datepicker({
		// 		clearBtn: true,
		// 		format: "dd.mm.yyyy",
		// 		language: "ru",
    	// 		autoclose: true
		// 	});
        // })
    }
});
