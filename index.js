function writeCards(names, adjective) {
    var messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${adjective} gift!`);
    }
    return messages;
}

function countDown(count) {
    while ( count != -1) {
        console.log(count);
        count = count -1;
    }
}