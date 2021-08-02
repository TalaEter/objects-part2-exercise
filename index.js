function StopWatch(){

    let startTime, endTime, running, duration =0;

    Object.defineProperty(this, 'running', {get: function(){return running;}})
    Object.defineProperty(this, 'startTime', {get: function(){return startTime;}})
    Object.defineProperty(this, 'endTime', {get: function(){return endTime;}})
    Object.defineProperty(this, 'duration', {
        get: function(){return duration;},
        set: function(value){duration = value;},
        //writable:false
    });


}

StopWatch.prototype.start = function(){
    if(this.running) throw new Error("Stopwatch is already running/started.");
    this.startTime = new Date();
    this.running =true;
};

StopWatch.prototype.stop = function(){
    if(!this.running) throw new Error("Stopwatch is already not-running/stopped. ");
    this.running = false;
    this.endTime = new Date();
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) /1000 ;
    this.duration+=seconds;
};

StopWatch.prototype.reset = function(){
    this.running = false;
    this.endTime = this.startTime = null;
    this.duration = 0;
};