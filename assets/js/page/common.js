requirejs.config({
    baseUrl: "assets/js",
    paths: {
	jQuery: {
	   '//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
           'lib/jquery-3.4.1.min'
	}
	modernizr: {
	    '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js',
	    'lib/modernizr-2.8.3.min.js'
	}
    }
});