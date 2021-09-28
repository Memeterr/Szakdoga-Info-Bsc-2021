// Create a client instance
let clientID = "web" + new Date().getTime();
//client = new Paho.MQTT.Client('127.0.0.1', Number(8080), clientID);

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
	userName : "Smarthome-dmtr",
	password : "asd123"
});

function doFail(err) {
	console.log("Connection failed with: " + err.errorMessage + ", code: " + err.errorCode);
}

// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("device/#");
  
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

function onMessageDelivered(message) {
  console.log("onMessageDelivered:"+message.payloadString);
}