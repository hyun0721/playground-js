/**
 * 연필 1다스 (12자루)입니다. 학생 1인당 연필 1자루씩 나누어 준다고 할 때 N명이 학생수를
 * 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
 * 
 * [입력]
 * 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
 * 
 * [출력]
 * 첫 번째 줄에 필요한 다스 수를 출력합니다.
 */



export default function(students){

    let dozen = 12;

    return Math.ceil(students/dozen);

}