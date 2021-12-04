const TarefasAPI = async () =>{
    // Pegando Tarefas da API e salvando no localStorage
    if(localStorage.length == 0){
        const url = "https://jsonplaceholder.typicode.com/todos/";
        
        const data = await fetch(url);
        const dataJson = await data.json();
        // console.log(dataJson); 

        let id = 1
        
        dataJson.map(element =>{

            localStorage.setItem(id, JSON.stringify(element));
            id++
            // console.log(id)
        }) 
    }
}

export default TarefasAPI;