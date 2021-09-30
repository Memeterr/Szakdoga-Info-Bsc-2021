// Create a client instance
let clientID = "Smarthome" + new Date().getTime();

//client = new Paho.MQTT.Client('127.0.0.1', Number(8080), clientID);
//console.log(lights);

// WORKS
client = new Paho.MQTT.Client('test.mosquitto.org', Number(8081), clientID); 

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.onMessageDelivered = onMessageDelivered;

// connect the client
client.connect({
	onSuccess: onConnect,
	onFailure: doFail,
  reconnect: true,
	userName : "Smarthome-dmtr",
	password : "asd123"
});

function doFail(err) {
	console.log("Connection failed with: " + err.errorMessage + ", code: " + err.errorCode);
}

// called when the client connects
function onConnect() {
  // Once a connection has been made, make the subscriptions.
  console.log("Succesfully connected!");

  // Subscribe to the topics
  if (lights?.length) {
    lights.forEach(light => {
      console.log('Subscribing to ' + light.name);
      let topics_raw = light.topics.split(",");
      let topics = topics_raw[topics_raw.length - 1].split(":");

      client.subscribe(topics[0]);
    });
  }

}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("Lost connection, reconnecting.. ");
  }
}

// called when a message arrives
function onMessageArrived(message) {
  if (lights?.length) {
    lights.forEach(light => {
      let topics_raw = light.topics.split(",");
      let topics = topics_raw[topics_raw.length - 1].split(":");

      if(topics[0] === message.destinationName) {
        const convertedMessage = JSON.parse(message.payloadString);
        blueprint.lights.forEach(b_light => {
          if(b_light.name === light.name) {
            if(convertedMessage.status === "on") {
              b_light.isOn = true;
            } else if (convertedMessage.status === "off") {
              b_light.isOn = false;
            }
          }
        });
      }
    });
  }
}

function onMessageDelivered(message) {
  console.log("onMessageDelivered:"+message.payloadString);
}