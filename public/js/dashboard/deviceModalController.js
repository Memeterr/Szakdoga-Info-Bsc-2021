function cancelDeviceModal() {
	let lastDevice = blueprint.getLastDevice();
	lastDevice.isPlaced = false;
	lastDevice = null;

	$("#deviceModal").hide();

	$("#deviceNameInput").val("");
	$("#devicePwdInput").val("");
	$("#topicInput").val("");

	if($('#deviceNameError').hasClass('hidden') == false) {
		$('#deviceNameError').addClass('hidden');
	}
	if($('#devicePwdError').hasClass('hidden') == false) {
		$('#devicePwdError').addClass('hidden');
	}
	if($('#topicsError').hasClass('hidden') == false) {
		$('#topicsError').addClass('hidden');
	}
}

function validateParams() {
	const deviceName = $("#deviceNameInput").val();
	const devicePwd = $("#devicePwdInput").val();
	const topics = $("#topicInput").val();

	if ( validName(deviceName) && validPwd(devicePwd) && validTopic(topics) ) {
		let lastDevice = blueprint.getLastDevice();
		lastDevice.name = deviceName;
		lastDevice.password = devicePwd;
		lastDevice.topics = generateTopics();

		$("#deviceNameInput").val("");
		$("#devicePwdInput").val("");
		$("#topicInput").val("");
		$("#deviceModal").hide();
	}
}

function validName(deviceName) {
	if(deviceName === "" || deviceName === undefined) {
		$('#deviceNameError').removeClass("hidden");
		return false;
	} else {
		if($('#deviceNameError').hasClass('hidden') == false) {
			$('#deviceNameError').addClass('hidden');
		}
	}
	return true;
}

function validPwd(devicePwd) {
	if(devicePwd === "" || devicePwd === undefined) {
		$('#devicePwdError').removeClass("hidden");
		return false;
	} else {
		if($('#devicePwdError').hasClass('hidden') == false) {
			$('#devicePwdError').addClass('hidden');
		}
	}
	return true;
}

function validTopic(topics) {
	if(topics === "" || topics === undefined) {
		$('#topicsError').removeClass("hidden");
		return false;
	} else {
		if($('#topicsError').hasClass('hidden') == false) {
			$('#topicsError').addClass('hidden');
		}
	}
	return true;
}

function generateTopics() {
	const name = $("#deviceNameInput").val();
	let type;

	let generatedPrettyString;
	let generatedString;

	if (blueprint.getLastDevice() instanceof Light) {
		type = "light";
	}

	if (name === "" || name === undefined) {
		generatedPrettyString = "{ \"public/#\" : \"r\" }";
		generatedString = "public/#:r";
	} else {
		generatedPrettyString = "{ \"public/#\" : \"r\", \"/device/" + type + "/" + name + "\" : \"rw\" }";
		generatedString = "public/#:r,/device/" + type + "/" + name + ":rw";
	}

	$("#topicInput").val(generatedPrettyString);

	return generatedString;
}