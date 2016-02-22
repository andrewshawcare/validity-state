# validity-state
Monitor the validity state of form fields and provide informative messages on invalidation.

For any submittable element on a form, the following attributes can be added,
the value of which being the message displayed on state invalidation:

* **badInput**: the user has provided input that the browser is unable to convert.
* **patternMismatch**: the value does not match the specified pattern.
* **rangeOverflow**: the value is greater than the maximum specified by the max attribute.
* **rangeUnderflow**: the value is less than the minimum specified by the min attribute.
* **stepMismatch**: the value does not fit the rules determined by the step attribute (that is, it's not evenly divisible by the step value).
* **tooLong**: the value exceeds the specified maxlength for HTMLInputElement or HTMLTextAreaElement objects.
* **typeMismatch**: the value is not in the required syntax (when type is email or url).
* **valueMissing**: the element has a required attribute, but no value.
