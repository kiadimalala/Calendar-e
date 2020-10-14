export function randomColor(){
    let color ='#'
    let randomHex = "0123456789ABCDEF"
    for(var i = 0; i<6;i++){
        color+= randomHex[Math.floor(Math.random()* 16)]
    }
   return color

}