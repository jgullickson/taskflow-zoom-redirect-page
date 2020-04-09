let code = window.location.search;

if (window.interop){
    console.log(code)
    console.log('there is interop')
    window.interop.setAuthCode(code);
}