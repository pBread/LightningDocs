({
  fireSetConfiguration: function (component, event) {
    // Get the attribute name & value from the target
    const target = event.currentTarget;
    const attribute = target.dataset.attribute;
    const value = target.dataset.value;

    // Get the setConfiguration event object
    const tkEvent = $A.get("e.TKB2B:setConfiguration");

    // Dispatch the configuration update as a stringified JSON object
    tkEvent.setParams({
      payload: JSON.stringify({ [attribute]: value }),
      type: "setConfiguration",
    });
    tkEvent.fire();
  },
});
