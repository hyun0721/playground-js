export default () => {

    console.log(`Excercise Main Page...`);

}

/**
 * #Grid Options
 * 
 * @param {string} width : 너비
 * @param {string} height : 높이
 * @param {boolean} resize : 크기조정 여부
 * @param {boolean} scroll : 스크롤 여부
 */
export let GridArguments = {
    width  : '100%',
    height : '100%',
    resize : false,
    scroll : false
}

export class CustomGrid {

    #width;
    #height;
    #resize;
    #scroll;
    #backgroundColor;

    /**
     * 생성자
     * 
     * @param {GridArguments} args 
     */
    constructor(args){

        if(args != undefined){

            this.#width             = 'width'           in args ? args.width            : '' ;
            this.#height            = 'height'          in args ? args.height           : '' ;
            this.#resize            = 'resize'          in args ? args.resize           : '' ;
            this.#scroll            = 'scroll'          in args ? args.scroll           : '' ;
            this.#backgroundColor   = 'backgroundColor' in args ? args.backgroundColor  : 'black' ;

        }

    }

}