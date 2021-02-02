// 笔记草稿
const biji = (str) =>{
  var resault = []
  var myarr = str.split("")
  for(let i=0; i<myarr.length; i++) {
    if(myarr[i] === ')'){
      for(let j = i-1; j>=0; j--){
        if(myarr[j] ==='('){
          resault.splice(j,1)
          break;
        }else{
          resault.splice(j, 1)
        }
      }
    }else if(myarr[i] === "<"){
      resault.pop()
    }else{
      resault.push(myarr[i])
    }
  }
  console.log(resault.join(''))
}

biji('Corona(Trump)USA<<<Virus')
biji('a(12345678909987654321234567890987654321)bkdasgtj<ufighs<jhgyu<<<<<<<<<')
