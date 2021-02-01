/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import Vue from 'vue';
import CKEditorComponent from './ckeditor.js';

const CKEditor = {
	/**
	 * Installs the plugin, registering the `<ckeditor>` component.
	 *
	 * @param {Vue} app The application instance.
	 */
	install( app ) {
		app.component( 'ckeditor', CKEditorComponent );
	},
	component: CKEditorComponent
};

export default CKEditor;
