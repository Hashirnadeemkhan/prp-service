"use client";

import { useEffect } from "react";

const EMBED_SRC = "https://link.msgsndr.com/js/form_embed.js";

/**
 * GoHighLevel / LeadConnector "Quote Form" embed.
 * Leads submitted here sync directly into the client's CRM backend.
 *
 * The form_embed.js script must (re)run every time this component mounts so it
 * can find the iframe, manage its height, and handle the in-iframe submit/redirect.
 * With Next.js client-side navigation a <Script> won't re-execute, so we load a
 * fresh copy on mount and remove it on unmount to avoid double-binding.
 */
export default function QuoteForm() {
  useEffect(() => {
    // Drop any stale copy so the library re-scans the freshly mounted iframe.
    document.querySelectorAll(`script[src="${EMBED_SRC}"]`).forEach((s) => s.remove());

    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="rounded-sm p-8 shadow-sm border border-gray-100" style={{ backgroundColor: "#f4f6f9" }}>
      <h3 className="text-xl font-bold mb-6" style={{ color: "#1e3560" }}>
        Request a Free Quote
      </h3>

      <iframe
        src="https://api.leadconnectorhq.com/widget/form/RCxaD667bLsuxSo1DRej"
        style={{ width: "100%", height: "652px", border: "none", borderRadius: "4px" }}
        id="inline-RCxaD667bLsuxSo1DRej"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Quote Form"
        data-height="652"
        data-layout-iframe-id="inline-RCxaD667bLsuxSo1DRej"
        data-form-id="RCxaD667bLsuxSo1DRej"
        title="Quote Form"
      />
    </div>
  );
}
