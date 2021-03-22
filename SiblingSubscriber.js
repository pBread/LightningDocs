({
  listenGetConfiguration: function (component, event) {
    // This listener will be called every time the configuraton is updated.
    const payload = event.getParam("payload");
    if (payload) component.set("v.configuration", event.getParam("payload"));
  },

  listenGetAttributes: function (component, event) {
    // This listener will be called every time the attributes are updated.
    const payload = event.getParam("payload");
    if (payload) component.set("v.attributes", event.getParam("payload"));
  },
});
