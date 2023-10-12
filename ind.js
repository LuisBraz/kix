console.log(navigator.connection)
console.log(navigator.languages)
//document.write(navigator.userAgent)
console.log(navigator.appCodeName)
console.log(navigator.appName)
console.log(navigator.platform)
console.log(navigator.getInstalledRelatedApps)


setTimeout(function intro(){
  var logo=document.getElementById("logo")
  var kalix=document.getElementById("ka")
  
  logo.style.display="block"
  kalix.style.display="block"
},2000)

setTimeout(function dblock(){
  var logo=document.getElementById("logo")
  var kalix=document.getElementById("ka")
  var caixa=document.getElementById("kalix")
  logo.style.display="none"
  kalix.style.display="none"
  caixa.style.display="none"
},6000)

setTimeout(function esm(){
  var agent=document.getElementById("agent")
  var lang=document.getElementById("langu")
  var conection=document.getElementById("cone")
  var appname=document.getElementById("app")
  var network=document.getElementById("net")
  var getm=document.getElementById("get")
  agent.innerHTML=navigator.userAgent
  langu.innerHTML="Idiomas encontrados: "+(navigator.languages)
  conection.innerHTML="Plataforma: "+(navigator.platform)
  appname.innerHTML="Nome(AppName): "+navigator.appCodeName

  if(navigator.onLine=== true){
  network.style.color="green"
  network.innerHTML="Conexão com a internet: "+navigator.onLine
  }else{
    network.style.color="red"
    network.innerHTML="Conexão com a internet: "+navigator.onLine
  }
  
  getm.innerHTML="UserMedia: "+navigator.getUserMedia
  
},7500)