function solution(diffs, times, limit) {
    var answer = 0;   
    let level = 0;
    let result = 0;       

    limit = limit > Math.pow(10, 15) ? Math.pow(10, 15) : limit;
    limit = limit < 0 ? 1 : limit;
    
    function calcTotalTime (level, diffs, times, limit) {   
        let time_total = 0;
        
        for(let i=0; i < diffs.length; i++){
            let time_curr = times[i];
            let time_prev = i == 0 ? 0 : times[i-1];
            let diff = diffs[i] > 100000 ? 100000 : diffs[i];
            
            time_curr = time_curr > 10000 ? 10000 : time_curr;
            time_curr = time_curr < 0 ? 1 : time_curr;
            time_prev = time_prev > 10000 ? 10000 : time_prev;               
            time_prev = time_prev < 0 ? 1 : time_prev;
            diff = i == 0 ? 1 : diff;
            diff = diff < 0 ? 1 : diff;

            if(diff <= level){
                time_total += time_curr;
            }                
            else{
                time_total += ((time_curr + time_prev) * (diff - level)) + time_curr;
            }
            
            if(time_total > limit) {
                return time_total;
            }
        }   
        
        return time_total;
    }
    
    // limit = limit < 0 ? 1 : limit ;
    // limit = limit > Math.pow(10, 15) ? Math.pow(10, 15) : limit;     
    
    while (true) {
        result = calcTotalTime(level, diffs, times, limit);        
        if(result <= limit) {
            break;    
        }
        
        level++;
    }
    
    answer = level == 0 ? 1 : level;  
    
    return answer;
}