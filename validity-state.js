function monitorValidityState (formElement) {
  var reportValidityState = function (controlElement) {
    controlElement.setCustomValidity("");

    if (!controlElement.validity.valid) {
      for (var validityState in controlElement.validity) {
        if (controlElement.hasAttribute(validityState)) {
          controlElement.setCustomValidity(controlElement.getAttribute(validityState));
        }
      }
    }

    controlElement.nextElementSibling.textContent = controlElement.validationMessage;
  };

  // https://html.spec.whatwg.org/multipage/forms.html#category-submit
  var submittableElements = formElement.querySelectorAll("button,input,keygen,object,select,textarea");
  Array.from(submittableElements).forEach(function (inputElement) {
    if (!inputElement.nextElementSibling || !inputElement.nextElementSibling.classList.contains("validity")) {
      var validityElement = document.createElement("div");
      validityElement.classList.add("validity");
      validityElement.setAttribute("aria-live", "polite");
      inputElement.insertAdjacentHTML("afterend", validityElement.outerHTML);
    }

    inputElement.addEventListener("input", function (event) {
      reportValidityState(event.target);

      var submitElement = formElement.querySelector("[type=submit]");
      reportValidityState(submitElement);
    });

    inputElement.addEventListener("invalid", function (event) {
      event.preventDefault();
      reportValidityState(event.target);
    });
  });
};
