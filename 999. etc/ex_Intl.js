export default () => {


    console.log('Start Intl ...');

    /*
        new Intl.DateTimeFormat()
        new Intl.DateTimeFormat(locales)
        new Intl.DateTimeFormat(locales, options)


        * locales : BCP47 언어, IETF 언어태그

            1) nu

            2) ca

            3) hc

        * options

            1) dateStyle
                - full
                - long
                - medium
                - short

            2) timeStyle

    */

    const defaultObj = new Intl.DateTimeFormat();

    
    
    /* 날짜 */
    console.log('=====');
    console.log(new Intl.DateTimeFormat().format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { dateStyle: 'full'     } ).format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { dateStyle: 'long'     } ).format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { dateStyle: 'medium'   } ).format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { dateStyle: 'short'    } ).format(new Date()));
    
    /* 시간 */
    console.log('=====');
    console.log(new Intl.DateTimeFormat( 'ko', { timeStyle: 'full'     } ).format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { timeStyle: 'long'     } ).format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { timeStyle: 'medium'   } ).format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { timeStyle: 'short'    } ).format(new Date()));

    /* 날짜 & 시간 */
    console.log('=====');
    console.log(new Intl.DateTimeFormat( 'ko', { dateStyle: 'full'  , timeStyle: 'full'    } ).format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { dateStyle: 'long'  , timeStyle: 'long'    } ).format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { dateStyle: 'medium', timeStyle: 'medium'  } ).format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { dateStyle: 'short' , timeStyle: 'short'   } ).format(new Date()));



    /* 24시간제 or 12시간제 : timeStyle과 함께 사용*/
    
    console.log(new Intl.DateTimeFormat( 'ko', { timeStyle: 'medium'  , hour12: true    } ).format(new Date()));
    console.log(new Intl.DateTimeFormat( 'ko', { timeStyle: 'medium'  , hour12: false   } ).format(new Date()));
    console.log('\n');
    
    console.log(new Intl.DateTimeFormat( 'ko', { timeStyle: 'medium'  , hourCycle: 'h11'} ).format(new Date('2023-02-14 12:00:00')));
    console.log(new Intl.DateTimeFormat( 'ko', { timeStyle: 'medium'  , hourCycle: 'h12'} ).format(new Date('2023-02-14 12:00:00')));
    console.log(new Intl.DateTimeFormat( 'ko', { timeStyle: 'medium'  , hourCycle: 'h23'} ).format(new Date('2023-02-14 24:00:00')));
    console.log(new Intl.DateTimeFormat( 'ko', { timeStyle: 'medium'  , hourCycle: 'h24'} ).format(new Date('2023-02-14 24:00:00')));
    console.log('\n');
    console.log(new Intl.DateTimeFormat( 'ko', { dayPeriod: 'narrow' } ).format(new Date('2023-02-14 9:00:00')));
    console.log(new Intl.DateTimeFormat( 'ko', { dayPeriod: 'short'  } ).format(new Date('2023-02-14 13:00:00')));
    console.log(new Intl.DateTimeFormat( 'ko', { dayPeriod: 'long'   } ).format(new Date('2023-02-14 23:00:00')));

    console.log(
        new Intl.DateTimeFormat("ko", {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
            second:'numeric'
        }).format(new Date("2023-02-14 24:00:00"))
    );

}