function WinnerIdentifyer(userItem,computerItem){
    if(userItem==="scissors"&&computerItem==="rock"){
        return(
            <div>
                <h1>You loss!</h1>
            </div>
        );   
    }else if(userItem==="rock"&&computerItem==="scissors"){
        return(
            <div>
                <h1>You won!</h1>
            </div>
        );  
    }else if(userItem==="paper"&&computerItem==="scissors"){
        return(
            <div>
                <h1>You loss!</h1>
            </div>
        ); 
    }else if(userItem==="scissors"&&computerItem==="paper"){
        return(
            <div>
                <h1>You won!</h1>
            </div>
        );  
    }else if(userItem==="rock"&&computerItem==="paper"){
        return(
            <div>
                <h1>You loss!</h1>
            </div>
        ); 
    }else if(userItem==="paper"&&computerItem==="rock"){
        return(
            <div>
                <h1>You won!</h1>
            </div>
        );  
    }
}

export default WinnerIdentifyer;