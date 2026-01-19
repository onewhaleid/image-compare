// Same-origin wrapper that loads the official gif.js worker from CDN.
// This avoids cross-origin Worker() restrictions when serving the app over HTTP.
(function(){
	var cdn = 'https://cdn.jsdelivr.net/npm/gif.js@0.2.0/dist/gif.worker.js';
	try {
		importScripts(cdn);
	} catch (e) {
		// Surface a meaningful error to the main thread
		self.postMessage({ __gifjs_worker_error: String(e && e.message || e) });
		throw e;
	}
})();
