import { makeAutoObservable } from "mobx";

class ConnectionStore{

    messagies=JSON.parse(localStorage.getItem('messages')) || [];
    emails=JSON.parse(localStorage.getItem('emails')) || [];
    
    constructor(){
        makeAutoObservable(this,undefined,{
            autoBind:true,
        })
    }

    addMessage(obj){
       console.log(obj)
        this.messagies.push(obj);
        localStorage.setItem('messages',JSON.stringify(this.messagies));
        
    }
    addEmails(email){
        this.emails.push(email);
        localStorage.setItem('emails',JSON.stringify(this.emails));
    }   
}


const connectionStore=new ConnectionStore();
export default connectionStore;