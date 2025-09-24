let count = 0
loops.everyInterval(1000, function () {
    if (input.lightLevel() > 25) {
        count += 1
    } else if (false) {
    	
    } else {
    	
    }
})
loops.everyInterval(2000, function () {
    serial.writeValue("light level", input.lightLevel())
})
