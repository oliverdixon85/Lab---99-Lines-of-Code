var friends = ['John', 'Jack', 'Jimmy', 'Jones', 'Joey'];

for (var i = 0; i < friends.length; i++) {
    console.log(friends[i])
    for (var x = 99; x > 0; x--) {

        if (x === 1) {
            console.log(x + " lines of code in the file, " + x + " lines of code " + friends[i] + " strikes one out, clears it all out, " + "no more lines of code in the file")
        } else {
            console.log(x + " lines of code in the file, " + x + " lines of code " + friends[i] + " strikes one out, clears it all out, " + (x - 1) + " lines of code in the file ")
        }
    }
}

//99 lines of code in the file, 99 lines of code; John strikes one out, clears it all out, 98 lines of code in the file
//1 line of code in the file, 1 line of code; John strikes one out, clears it all out, no more lines of code in the file 