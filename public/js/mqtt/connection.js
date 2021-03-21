console.log('mqtt loaded');
// Create a client instance
let clientID = "web" + new Date().getTime();
client = new Paho.MQTT.Client('localhost', Number(9001), clientID);

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({
	onSuccess:onConnect,
	onFailure: doFail,
	userName : "iottest",
	password : "iottest"
});

function doFail(err) {
	console.log(err.errorMessage);
	console.log(err.errorCode);
	console.log(err.message);
}

// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("World");
  message = new Paho.MQTT.Message("Hello");
  message.destinationName = "World";
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}