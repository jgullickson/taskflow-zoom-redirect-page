let code = window.location.search;
console.log('udpated')

if (window.interop){
    console.log(code)
    console.log('there is interop')
    window.interop.setAuthCode(code);
} else {
    console.log(code)
    console.log('no interop')
}