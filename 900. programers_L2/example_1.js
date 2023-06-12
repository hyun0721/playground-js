export default (s) => {

    let question = String(s).trim().split(' ');
    let answer = '';

    question = question.map( dt => {

        dt = dt.toLowerCase();

        if(Number.isNaN(Number(dt.slice(0,1)))){
            dt = `${dt.slice(0,1).toUpperCase()}${dt.slice(1, dt.length)}`
        }

        return dt;
    });

    answer = question.join(' ');

    return answer;

}