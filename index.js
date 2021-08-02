function StopWatch(){

    let startTime, endTime, running, duration =0;

    this.start = function(){
        if(running) throw new Error("Stopwatch is already running/started.");
        startTime = new Date();
        running =true;
    };

    this.stop = function(){
        if(!running) throw new Error("Stopwatch is already not-running/stopped. ");
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) /1000 ;
        duration+=seconds;
    };

    this.reset = function(){
        running = false;
        endTime = startTime = null;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {get: function(){return duration;}});


}