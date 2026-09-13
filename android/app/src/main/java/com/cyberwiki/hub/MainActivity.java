package com.cyberwiki.hub;

import android.os.Bundle;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        disableWebViewCache();
        disableWebViewZoomAndBounce();
    }

    /**
     * The app ships all assets inside the bundle, so the WebView must always
     * read them fresh from the package. Otherwise an old HTTP cache can keep
     * showing a previous build's content after an update.
     */
    private void disableWebViewCache() {
        try {
            WebView webView = getBridge().getWebView();
            if (webView == null) return;
            webView.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
            webView.clearCache(true);
        } catch (Exception ignored) {
            // Bridge/WebView not ready yet; safe to skip.
        }
    }

    /**
     * App-like behaviour: no pinch/double-tap zoom and no rubber-band
     * overscroll glow at the edges. The page must feel fixed, not zoomable.
     */
    private void disableWebViewZoomAndBounce() {
        try {
            WebView webView = getBridge().getWebView();
            if (webView == null) return;
            WebSettings settings = webView.getSettings();
            settings.setSupportZoom(false);
            settings.setBuiltInZoomControls(false);
            settings.setDisplayZoomControls(false);
            settings.setTextZoom(100);
            webView.setOverScrollMode(View.OVER_SCROLL_NEVER);
        } catch (Exception ignored) {
            // Bridge/WebView not ready yet; safe to skip.
        }
    }
}
