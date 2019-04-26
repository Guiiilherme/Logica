/**
 * @author guilherme
 * Tabuada usando while ou do
 */

document.write("<h1>Tabuada usando While/Do</h1>")
let i = 0
let  j = 0
while (i < 200){
    i++
    document.write("<p> Tabuada do " + i +"</p>")
    while(j < 10){
        j++
        document.write("<p>"+ i + " x " + j + " = " + (i * j)+"</p>")
        
    } j = 0

} 