import {Container} from 'unstated-x'

const rawData = {
    data: [
        {
            type: "img",
            index: 0,
            linkImage: 'https://www.google.com/search?q=img+test&rlz=1C5CHFA_enVN896VN896&sxsrf=ALeKk02jJXvTmjg58Dav_8btvagMLsy1xQ:1588419245166&tbm=isch&source=iu&ictx=1&fir=Dd6UXRHiSMfBpM%253A%252C3WpOoADRXuLM-M%252C_&vet=1&usg=AI4_-kT3ouueuzKKHSPozvh-WsdqbPUR4w&sa=X&ved=2ahUKEwjd7vLmipXpAhX-yosBHXpqAN4Q9QEwAHoECAoQFA#imgrc=Dd6UXRHiSMfBpM:'
        },
        {type: 'text', index: 0, label: 'hiascascascacascascahi'},
        {
            type: "img",
            index: 1,
            linkImage: 'https://www.google.com/search?q=img+test&rlz=1C5CHFA_enVN896VN896&sxsrf=ALeKk02jJXvTmjg58Dav_8btvagMLsy1xQ:1588419245166&tbm=isch&source=iu&ictx=1&fir=WSGSnX9fIvmXGM%253A%252CYW6sx3jN-bNN1M%252C_&vet=1&usg=AI4_-kSoFo0LO7LooxTaBRkEyyHMfvewWg&sa=X&ved=2ahUKEwjd7vLmipXpAhX-yosBHXpqAN4Q9QEwAXoECAoQFg#imgrc=WSGSnX9fIvmXGM:'
        },
        {type: 'text', index: 1, label: 'cascascasc'},
        {
            type: "img",
            index: 2,
            linkImage: 'https://www.google.com/search?q=img+test&rlz=1C5CHFA_enVN896VN896&sxsrf=ALeKk02jJXvTmjg58Dav_8btvagMLsy1xQ:1588419245166&tbm=isch&source=iu&ictx=1&fir=q2su0MeVDFFPfM%253A%252C6OcYYymbZ_G_7M%252C_&vet=1&usg=AI4_-kS4vcgFWElqUHWExlmSLJ7hLPA0Yw&sa=X&ved=2ahUKEwjd7vLmipXpAhX-yosBHXpqAN4Q9QEwAnoECAoQGA#imgrc=q2su0MeVDFFPfM:'
        },
        {type: 'text', index: 2, label: 'hiscascaschi'},
        {
            type: "img",
            index: 3,
            linkImage: 'https://www.google.com/search?q=img+test&rlz=1C5CHFA_enVN896VN896&sxsrf=ALeKk02jJXvTmjg58Dav_8btvagMLsy1xQ:1588419245166&tbm=isch&source=iu&ictx=1&fir=eghaS1Idok7REM%253A%252CfrE7SQC4qfntuM%252C_&vet=1&usg=AI4_-kRpJvFhcosw3Y45iD1Y7V6xLBA3qw&sa=X&ved=2ahUKEwjd7vLmipXpAhX-yosBHXpqAN4Q9QEwBXoECAoQHg#imgrc=eghaS1Idok7REM:'
        },
        {type: 'text', index: 3, label: 'hascascascascasiascascashi'},
        {
            type: "img",
            index: 4,
            linkImage: 'https://www.google.com/search?q=img+test&rlz=1C5CHFA_enVN896VN896&sxsrf=ALeKk02jJXvTmjg58Dav_8btvagMLsy1xQ:1588419245166&tbm=isch&source=iu&ictx=1&fir=MspUEI3gAkDoeM%253A%252CWv7xVCDHf2j1BM%252C_&vet=1&usg=AI4_-kQCxSP04yedHzrvi9UitwzFrh2oqg&sa=X&ved=2ahUKEwjd7vLmipXpAhX-yosBHXpqAN4Q9QEwC3oECAoQKg#imgrc=MspUEI3gAkDoeM:'
        },
        {type: 'text', index: 4, label: 'cascascascascashihi'},
        {
            type: "img",
            index: 5,
            linkImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fa.storyblok.com%2Ff%2F51116%2F2016x1425%2F68fb8b739f%2Fd1.jpg&imgrefurl=https%3A%2F%2Fwww.practiceaptitudetests.com%2Faptitude-test-sample-questions-and-answers%2F&tbnid=ct8pY0eQh9Ca_M&vet=12ahUKEwiQiu_8ipXpAhUXg5QKHX9rBAgQMygOegUIARCJAg..i&docid=NEsCXb2j1r1cCM&w=2016&h=1425&q=img%20test&ved=2ahUKEwiQiu_8ipXpAhUXg5QKHX9rBAgQMygOegUIARCJAg'
        },
        {type: 'text', index: 5, label: 'cascvrtfgnghfnghnhihi'},
        {
            type: "img",
            index: 6,
            linkImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fskyvilletower.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fchon-tang-mat-bang-965x1024.jpg&imgrefurl=https%3A%2F%2Fskyvilletower.com%2Ftest-img-map%2F&tbnid=g2dhGT_GtdlpYM&vet=12ahUKEwiQiu_8ipXpAhUXg5QKHX9rBAgQMygZegQIARA6..i&docid=SQrkapfjxj39vM&w=965&h=1024&itg=1&q=img%20test&ved=2ahUKEwiQiu_8ipXpAhUXg5QKHX9rBAgQMygZegQIARA6'
        },
        {type: 'text', index: 6, label: '546456hnghnihghnghi'},
        {
            type: "img",
            index: 7,
            linkImage: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fi274.photobucket.com%2Falbums%2Fjj253%2Fbuihai_wru%2F1-84.jpg&imgrefurl=https%3A%2F%2Ftinhte.vn%2Fthread%2Ftest-your-english-phan-mem-kiem-tra-kien-thuc-tieng-anh-free.73229%2F&tbnid=xKCDE0vFyDnFTM&vet=12ahUKEwiQiu_8ipXpAhUXg5QKHX9rBAgQMyggegQIARBI..i&docid=CH-6tDXT6WlvcM&w=320&h=241&q=img%20test&ved=2ahUKEwiQiu_8ipXpAhUXg5QKHX9rBAgQMyggegQIARBI'
        },
        {type: 'text', index: 7, label: '34534ghbdfhihi'},
        {
            type: "img",
            index: 8,
            linkImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.kryteriononline.com%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2FCoronavirusHeroShot.jpg&imgrefurl=https%3A%2F%2Fwww.kryteriononline.com%2Fblog%2Fupdate-kryterion-testing-center-closures&tbnid=_WxaHRMWaEzdKM&vet=12ahUKEwiQiu_8ipXpAhUXg5QKHX9rBAgQMyglegQIARBS..i&docid=xKCyHlz1YDFLeM&w=1200&h=800&q=img%20test&ved=2ahUKEwiQiu_8ipXpAhUXg5QKHX9rBAgQMyglegQIARBS'
        },
        {type: 'text', index: 8, label: '534h2354345ihidfv'},
    ],
    count: 16
}

class BaseContainer extends Container<{ data: any, count: number }> {
    constructor(props) {
        super(props);
        console.log('props ', props)
        this.state = props
    }

}

export const gameContainer: any = new BaseContainer(rawData)
window['game'] = gameContainer
export default BaseContainer