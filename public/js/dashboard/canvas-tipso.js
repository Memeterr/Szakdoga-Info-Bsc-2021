$(window).on('load', function() {
    $('#thermometer').tipso({
        useTitle : false,
        position: 'top',
        delay: 100,
        background: '#55b555',
        color: 'eee',
        content: 'Sensor to measure temperature.',
        width: 200
    });
    $('#light').tipso({
        useTitle : false,
        position: 'top',
        delay: 100,
        background: '#55b555',
        color: '#eee',
        content: 'Any source of light etc. lamp, lightbulb.',
        width: 200
    });
    $('#edit').tipso({
        useTitle : false,
        position: 'bottom',
        delay: 100,
        background: '#55b555',
        color: '#eee',
        content: 'To select and delete devices/objects.',
        width: 200
    });

    // Remove the default style
    $("#thermometer").removeClass("tipso_style");
    $("#light").removeClass("tipso_style");
    $("#edit").removeClass("tipso_style");
});
