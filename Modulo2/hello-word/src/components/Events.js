const Events = () => {
   
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o envento!");
    };
      
    const renderSomenthing = (x) => {
       if(x){
        return <h1>Rederizando isso!</h1>;
       } else{
        return <h1>Também posso renderizar isso</h1>;
       }
    };
    
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>

            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
                
                <button onClick={() => {
                    if(true){
                        console.log("Isso não deveria acontecer");
                    }
                }}>Clica aqui por favor!</button>
            </div>
            {renderSomenthing(true)}
            {renderSomenthing(false)}
        </div>
    )
};

export default Events;