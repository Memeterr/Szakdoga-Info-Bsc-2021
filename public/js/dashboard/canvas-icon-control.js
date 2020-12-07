$( function() {
    $("#deviceModal").hide();
    

    let countEditmode = 0;
    let countLiner = 0;
    let countWindowframeRotate = 0;
    let countDoorRotate = 0;

    // Door Button
    $("#door").click(function(e) {
        if(blueprint.referenceDoor.clickCount % 2 == 1) {
            blueprint.referenceDoor.isFollowing = false;
        } else {
            blueprint.referenceDoor.isFollowing = true;

            // Disable other ongoing drawing functions and sync their on/off status
            if(blueprint.referenceWindowFrame.isFollowing) {
                blueprint.referenceWindowFrame.isFollowing = false;
                blueprint.referenceWindowFrame.addClick();
            }
            if(blueprint.referenceLight.isFollowing) {
                blueprint.referenceLight.isFollowing = false;
                blueprint.referenceLight.addClick();
            }
            if(blueprint.linerStatus) {
                blueprint.linerStatus = false;
                countLiner++;
            }
            if(blueprint.editmode) {
                blueprint.editmode = false;
                countEditmode++;
            }
        }
        blueprint.referenceDoor.addClick();
    });

    // Wall Button
    $("#wall").click(function(e) {
        if(countLiner % 2 == 1) {
            blueprint.linerStatus = false;
        } else {
            blueprint.linerStatus = true;

            // Disable other ongoing drawing functions and sync their on/off status
            if(blueprint.referenceWindowFrame.isFollowing) {
                blueprint.referenceWindowFrame.isFollowing = false;
                blueprint.referenceWindowFrame.addClick();
            }
            if(blueprint.referenceDoor.isFollowing) {
                blueprint.referenceDoor.isFollowing = false;
                blueprint.referenceDoor.addClick();
            }
            if(blueprint.referenceLight.isFollowing) {
                blueprint.referenceLight.isFollowing = false;
                blueprint.referenceLight.addClick();
            }
            if(blueprint.editmode) {
                blueprint.editmode = false;
                countEditmode++;
            }
        }
        countLiner++;
    });

    // Window Button
    $("#window").click(function(e) {
        if(blueprint.referenceWindowFrame.clickCount % 2 == 1) {
            blueprint.referenceWindowFrame.isFollowing = false;
        } else {
            blueprint.referenceWindowFrame.isFollowing = true;

            // Disable other ongoing drawing functions and sync their on/off status
            if(blueprint.referenceDoor.isFollowing) {
                blueprint.referenceDoor.isFollowing = false;
                blueprint.referenceDoor.addClick();
            }
            if(blueprint.referenceLight.isFollowing) {
                blueprint.referenceLight.isFollowing = false;
                blueprint.referenceLight.addClick();
            }
            if(blueprint.linerStatus) {
                blueprint.linerStatus = false;
                countLiner++;
            }
            if(blueprint.editmode) {
                blueprint.editmode = false;
                countEditmode++;
            }
            
        }
        blueprint.referenceWindowFrame.addClick();
    });

    // Light Button
    $("#light").click(function(e) {
        if(blueprint.referenceLight.clickCount % 2 == 1) {
            blueprint.referenceLight.isFollowing = false;
        } else {
            blueprint.referenceLight.isFollowing = true;

            // Disable other ongoing drawing functions and sync their on/off status
            if(blueprint.referenceDoor.isFollowing) {
                blueprint.referenceDoor.isFollowing = false;
                blueprint.referenceDoor.addClick();
            }
            if(blueprint.referenceWindowFrame.isFollowing) {
                blueprint.referenceWindowFrame.isFollowing = false;
                blueprint.referenceWindowFrame.addClick();
            }
            if(blueprint.linerStatus) {
                blueprint.linerStatus = false;
                countLiner++;
            }
            if(blueprint.editmode) {
                blueprint.editmode = false;
                countEditmode++;
            }
            
        }
        blueprint.referenceLight.addClick();
    });
    
    // Delete Button
    $("#delete").click(function(e) {
        blueprint.windowFrames.forEach(blueprint.deleteObject);
        blueprint.walls.forEach(blueprint.deleteObject);
        blueprint.doors.forEach(blueprint.deleteObject);
        blueprint.lights.forEach(blueprint.deleteObject);

        if(blueprint.referenceWindowFrame.isFollowing) {
            blueprint.referenceWindowFrame.isFollowing = false;
            blueprint.referenceWindowFrame.addClick();
        }
        if(blueprint.referenceDoor.isFollowing) {
            blueprint.referenceDoor.isFollowing = false;
            blueprint.referenceDoor.addClick();
        }
        if(blueprint.referenceLight.isFollowing) {
                blueprint.referenceLight.isFollowing = false;
                blueprint.referenceLight.addClick();
        }
    });

    // Edit Button
    $("#edit").click(function(e) {
        if(countEditmode % 2 == 1) {
            blueprint.editmode = false;
        } else {
            blueprint.editmode = true;

            // Disable other ongoing drawing functions and sync their on/off status
            if(blueprint.referenceWindowFrame.isFollowing) {
                blueprint.referenceWindowFrame.isFollowing = false;
                blueprint.referenceWindowFrame.addClick();
            }
            if(blueprint.referenceDoor.isFollowing) {
                blueprint.referenceDoor.isFollowing = false;
                blueprint.referenceDoor.addClick();
            }
            if(blueprint.referenceLight.isFollowing) {
                blueprint.referenceLight.isFollowing = false;
                blueprint.referenceLight.addClick();
            }
            if(blueprint.linerStatus) {
                blueprint.linerStatus = false;
                countLiner++;
            }
        }
        countEditmode++;
    });

    // Rotate Button
    $("#rotate").click(function(e) {
        if(countWindowframeRotate % 2 == 1) {
            blueprint.referenceWindowFrame.isRotated = false;
        } else {
            blueprint.referenceWindowFrame.isRotated = true;
        }
        countWindowframeRotate++;
        if(countDoorRotate % 2 == 1) {
            blueprint.referenceDoor.isRotated = false;
        } else {
            blueprint.referenceDoor.isRotated = true;
        }
        countDoorRotate++;
    });

} );