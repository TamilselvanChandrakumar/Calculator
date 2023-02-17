// input numbers to be calculated.
function button(a)
        {	
            document.getElementById("ans").value=document.getElementById("ans").value+a;
        }
        // mathematical function happend.
        function che(){
                var res = [];
                if(document.getElementById("ans").value.includes("+")){
                res = document.getElementById("ans").value.split('+');
                let answer=0;
                for(i=0;res[i];i++){
                    answer=answer+ parseInt(res[i]);
                }
            return answer;
                }
                
                else if(document.getElementById("ans").value.includes("-")){
                res = document.getElementById("ans").value.split('-');
                return parseInt(res[0]) - parseInt(res[1]);
                }
                
                else if(document.getElementById("ans").value.includes("/")){
                res = document.getElementById("ans").value.split('/');
                return parseInt(res[0]) / parseInt(res[1]);
                }
                
                else{
                res = document.getElementById("ans").value.split('*');
                // return parseInt(res[0]) * parseInt(res[1]);
                let answer=1;
                for(i=0;res[i];i++){
                    answer=answer* parseInt(res[i]);
                }
            return answer;
                }
                
            }
            
        // = button to show the result of manipulation
        function button1(){	
        var a = che()
        document.getElementById('ans').value = a; 
        }
            // to clear the screan.
        function buttonclear()
            {
                document.getElementById('ans').value=" ";	
            }
            