# validity-state
Monitor the validity state of form fields and provide informative messages on invalidation.

For any submittable element on a form, the following attributes can be added,
the value of which being the message displayed on state invalidation:

* _badInput_: the user has provided input that the browser is unable to convert.
* _patternMismatch_: the value does not match the specified pattern.
* _rangeOverflow_: the value is greater than the maximum specified by the max attribute.
* _rangeUnderflow_: the value is less than the minimum specified by the min attribute.
* _stepMismatch_: the value does not fit the rules determined by the step attribute (that is, it's not evenly divisible by the step value).
* _tooLong_: the value exceeds the specified maxlength for HTMLInputElement or HTMLTextAreaElement objects.
* _typeMismatch_: the value is not in the required syntax (when type is email or url).
* _valueMissing_: the element has a required attribute, but no value.
