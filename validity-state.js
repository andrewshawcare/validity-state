function monitorValidityState (formElement) {
  var reportValidityState = function (controlElement) {
    controlElement.setCustomValidity("");

    if (!controlElement.validity.valid) {
      for (var validityState in controlElement.validity) {
        if (controlElement.validity[validityState] && controlElement.hasAttribute(validityState)) {
          controlElement.setCustomValidity(controlElement.getAttribute(validityState));
        }
      }
    }

    controlElement.nextElementSibling.textContent = controlElement.validationMessage;
  };

  // https://html.spec.whatwg.org/multipage/forms.html#category-submit
  var submittableElementsSelector = "button,input,keygen,object,select,textarea";

  var submittableElements = formElement.querySelectorAll(submittableElementsSelector);
  Array.from(submittableElements).forEach(function (submittableElement) {
    if (!submittableElement.nextElementSibling || !submittableElement.nextElementSibling.classList.contains("validity")) {
      var validityElement = document.createElement("div");
      validityElement.classList.add("validity");
      validityElement.setAttribute("aria-live", "polite");
      submittableElement.insertAdjacentHTML("afterend", validityElement.outerHTML);
    }

    formElement.addEventListener("submit", function (event) {
      event.preventDefault();
      var submittableElements = formElement.querySelectorAll(submittableElementsSelector);
      Array.from(submittableElements).forEach(reportValidityState);
    });

    submittableElement.addEventListener("input", function (event) {
      event.preventDefault();
      var submittableElements = formElement.querySelectorAll(submittableElementsSelector);
      Array.from(submittableElements).forEach(reportValidityState);
    });

    submittableElement.addEventListener("invalid", function (event) {
      event.preventDefault();
      var submittableElements = formElement.querySelectorAll(submittableElementsSelector);
      Array.from(submittableElements).forEach(reportValidityState);
    });
  });
};
