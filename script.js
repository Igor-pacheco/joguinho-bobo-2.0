let nomeDaWaifu = document.getElementById("titulo")
let fraseDaWaifu = document.getElementById("subtitulo")
let image = document.getElementById("imagemDaWaifu")
let result = document.getElementById("resultado")
let audio = document.getElementById("audioDaWaifu")





adicionarWaifu = function(nome, frase, imagem, fala){this.nome=nome,
this.frase=frase,
this.imagem=imagem,
this.fala=fala}

waifus = [new adicionarWaifu("Genji Shimada"," ''Mada mada'' ", "./waifus/genjiquente.jpg", "./audios/genjiFrase.mpeg"),
new adicionarWaifu("Cole Cacete", " ''Hora de acertar as contas'' ", "./waifus/colequente.jpg", "./audios/coleCaceteFrase.mpeg"),
new adicionarWaifu("Torb Jorn", "''Experimente minhas almôndegas''", "./waifus/tobjornquente.jpg", "./audios/torbFrase.mpeg"),
new adicionarWaifu("GAYbe (Reaper)", "''Não sou um psicopata''", "./waifus/reaperquente.jpg", "./audios/reaperFrase.mpeg"),
new adicionarWaifu("Spring trap", "''I always come back''", "./waifus/willquente.jpg", "./audios/willFrase.mp3"),
new adicionarWaifu("Vi", "''Que tal um chá''", "./waifus/vihot.jpg", "./audios/ViFrase.mp3")





]

roleta = function (){image.src=waifus[Math.round(Math.random()*5)].imagem}

comecarRoleta = setInterval(roleta,1)

encontrar = function(){ 
    
let a = Math.round(Math.random()*5)

audio.src=waifus[a].fala
audio.play()
    
clearInterval(comecarRoleta)
image.style="display:none"

result.src=waifus[a].imagem
result.style="display:block"
  
nomeDaWaifu.innerHTML=waifus[a].nome
fraseDaWaifu.style="font-style:italic"
fraseDaWaifu.style="font-family:Comforter"
fraseDaWaifu.innerHTML=waifus[a].frase}
    
