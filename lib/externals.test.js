const externals = require( './externals' );

describe( 'externals', () => {

	it( 'contains entries for all core WordPress JS global members' , () => {
		expect( externals ).toEqual( {
			'@wordpress/a11y':                               'wp.a11y',
			'@wordpress/annotations':                        'wp.annotations',
			'@wordpress/api-fetch':                          'wp.apiFetch',
			'@wordpress/autop':                              'wp.autop',
			'@wordpress/blob':                               'wp.blob',
			'@wordpress/block-library':                      'wp.blockLibrary',
			'@wordpress/block-serialization-default-parser': 'wp.blockSerializationDefaultParser',
			'@wordpress/block-serialization-spec-parser':    'wp.blockSerializationSpecParser',
			'@wordpress/blocks':                             'wp.blocks',
			'@wordpress/components':                         'wp.components',
			'@wordpress/compose':                            'wp.compose',
			'@wordpress/core-data':                          'wp.coreData',
			'@wordpress/data':                               'wp.data',
			'@wordpress/date':                               'wp.date',
			'@wordpress/deprecated':                         'wp.deprecated',
			'@wordpress/dom':                                'wp.dom',
			'@wordpress/dom-ready':                          'wp.domReady',
			'@wordpress/edit-post':                          'wp.editPost',
			'@wordpress/editor':                             'wp.editor',
			'@wordpress/element':                            'wp.element',
			'@wordpress/escape-html':                        'wp.escapeHtml',
			'@wordpress/format-library':                     'wp.formatLibrary',
			'@wordpress/hooks':                              'wp.hooks',
			'@wordpress/html-entities':                      'wp.htmlEntities',
			'@wordpress/i18n':                               'wp.i18n',
			'@wordpress/is-shallow-equal':                   'wp.isShallowEqual',
			'@wordpress/keycodes':                           'wp.keycodes',
			'@wordpress/list-reusable-blocks':               'wp.listReusableBlocks',
			'@wordpress/notices':                            'wp.notices',
			'@wordpress/nux':                                'wp.nux',
			'@wordpress/plugins':                            'wp.plugins',
			'@wordpress/redux-routine':                      'wp.reduxRoutine',
			'@wordpress/rich-text':                          'wp.richText',
			'@wordpress/shortcode':                          'wp.shortcode',
			'@wordpress/token-list':                         'wp.tokenList',
			'@wordpress/url':                                'wp.url',
			'@wordpress/viewport':                           'wp.viewport',
			'@wordpress/wordcount':                          'wp.wordcount',
			'wp':                                            'wp',
			'jquery':                                        'jQuery',
		} );
	} );
} );