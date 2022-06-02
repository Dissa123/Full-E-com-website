import DOMPurify from "dompurify";

import React from "react";

function trustedsecuritypolicies() {
  var clean = DOMPurify.sanitize(dirty);
  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    // Feature testing
    window.trustedTypes.createPolicy("default", {
      createHTML: (string) =>
        DOMPurify.sanitize(string, { RETURN_TRUSTED_TYPE: true }),
      createScriptURL: (string) => string, // warning: this is unsafe!
      createScript: (string) => string, // warning: this is unsafe!
    });
  }
  return <div></div>;
}

export default trustedsecuritypolicies;
