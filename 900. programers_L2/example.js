export default (s) => {

    let answer = '';

    let spt = new Array();
    let str = new String();

    str = s;
    spt = str.split(' ');

    answer = `${Math.min(...spt)} ${Math.max(...spt)}`


    return answer;

}