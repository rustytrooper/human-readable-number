module.exports = function toReadable (number) {
  function toReadable(number) {
    console.log(number);
    let arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten']
    let strFromNum = String(number)
    let output
    for (let i in arr){
        if (strFromNum===i){
           output = arr[i]
        }
        if (strFromNum.length==2){// from 11 to 99
            // eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen
            //  11      12      13      14      15         16       17      18         19
            let arrFromNum = Array.from(strFromNum) // array ['1','2']
            // console.log(arrFromNum);
            for (let i in arrFromNum){
                if(arrFromNum[0]==1 && (arrFromNum[1]>=1 && arrFromNum[1]<=9)){
                    for (let j in arr) {
                        if (arrFromNum[1]==j){
                            output=String(arr[j])+'teen'
                        }
                        if(arrFromNum[1]==1){
                            output='eleven'
                        }
                        if(arrFromNum[1]==2){
                            output=String(arr[2]).slice(0,2)+'elve'
                        }
                        if(arrFromNum[1]==3){
                            output = String(arr[3]).slice(0,2)+'irteen'
                        }
                        if(arrFromNum[1]==5){
                            output = String(arr[5]).slice(0,2)+'fteen'
                        }
                        if(arrFromNum[1]==8){
                            output=String(arr[8])+'een'
                        }
                       
                    }
                }
                //from 20 to 99
                if(arrFromNum[0]>=2 && arrFromNum[0]<=9 &&(arrFromNum[1]>=0 && arrFromNum[1]<=9)){
                    for (let j in arr){
                        if(arrFromNum[0]==2){
                            arrFromNum[0]==2 && arrFromNum[1]==0 ? output = String(arr[arrFromNum[0]]).slice(0,2)+'enty' : 
                            output= String(arr[arrFromNum[0]]).slice(0,2)+'enty' + ' '+ String(arr[arrFromNum[1]]);
                        }
                        else if(arrFromNum[0]==3){
                            arrFromNum[0]==3 && arrFromNum[1]==0 ? output = String(arr[arrFromNum[0]]).slice(0,2)+'irty ' :
                            output = String(arr[arrFromNum[0]]).slice(0,2) + 'irty' + ' ' + String(arr[arrFromNum[1]])
                        } 
                        else if (arrFromNum[0]==4) {
                            arrFromNum[0]==4 && arrFromNum[1]==0 ? output = String(arr[arrFromNum[0]]).slice(0,2) + 'rty' :
                            output = String(arr[arrFromNum[0]]).slice(0,2) + 'rty' + ' ' + String(arr[arrFromNum[1]])
                        } 
                        else if(arrFromNum[0]==5) {
                            arrFromNum[0]==5 && arrFromNum[1]==0 ? output = String(arr[arrFromNum[0]]).slice(0,2) + 'fty' :
                            output = String(arr[arrFromNum[0]]).slice(0,2) + 'fty' + ' ' + String(arr[arrFromNum[1]])
                        } 
                        
                        if (arrFromNum[0]==8) {
                            arrFromNum[0]==8 && arrFromNum[1]==0 ? output = String(arr[arrFromNum[0]]) + 'y' :
                            output = String(arr[arrFromNum[0]]) + 'y'+ ' ' + String(arr[arrFromNum[1]])
                        }
                        if (arrFromNum[0]==6 || arrFromNum[0]==7 || arrFromNum[0]==9) {
                            arrFromNum[1]==0 ? output = String(arr[arrFromNum[0]]) + 'ty' :
                            output = String(arr[arrFromNum[0]]) + 'ty'+ ' ' + String(arr[arrFromNum[1]])
                        }
            
                    }
                }
            }
        }

        if (strFromNum.length==3) {
            let arrFromNum = Array.from(strFromNum)
            let hundreds = String(arr[arrFromNum[0]]) + ' hundred '
            if (arrFromNum[1]==0 && arrFromNum[2]==0) {
                output = hundreds
            }
            if (arrFromNum[2]>=1 && arrFromNum[2]<=9) {
                output = hundreds + String(arr[arrFromNum[2]])
            }
            if (arrFromNum[1]==2) {
                arrFromNum[2]==0 ? output = hundreds + 'twenty' :
                output = hundreds + 'twenty '+ String(arr[arrFromNum[2]])
            }
            if (arrFromNum[1]==3) {
                arrFromNum[2]==0 ? output = hundreds + 'thirty' :
                output = hundreds + 'thirty ' + String(arr[arrFromNum[2]])
            }
            if (arrFromNum[1]==4) {
                arrFromNum[2]==0 ? output = hundreds + 'forty' :
                output = hundreds + 'forty ' + String(arr[arrFromNum[2]])
            }
            if (arrFromNum[1]==5) {
                arrFromNum[2]==0 ? output = String(arr[arrFromNum[0]]) + ' hundred'+' fifty' :
                output = String(arr[arrFromNum[0]]) + ' hundred' + ' fifty ' + String(arr[arrFromNum[2]])
            }
            if (arrFromNum[1]==6 || arrFromNum[1]==7 || arrFromNum[1]==9) {
                arrFromNum[2]==0 ? output = String(arr[arrFromNum[0]]) + ' hundred ' + String(arr[arrFromNum[1]]) +'ty' :
                output = String(arr[arrFromNum[0]]) + ' hundred ' + String(arr[arrFromNum[1]]) +'ty ' + String(arr[arrFromNum[2]])
            }
            if (arrFromNum[1]==8) {
                arrFromNum[2]==0 ? output = String(arr[arrFromNum[0]]) + ' hundred eighty' :
                output = String(arr[arrFromNum[0]]) + ' hundred' + ' eighty ' + String(arr[arrFromNum[2]])
            }
        }
    }
    return output
}
}
