// arquivo de estilo

import MyComponents from "./MyComponent";

const FirtsComponent = () => {
    //essa função faz isso

    /*
        multi line
    */
    return(
        <div>
            {/* Algum comentário */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponents />
        </div>
    );
};

export default FirtsComponent;