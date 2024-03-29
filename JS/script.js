const {createApp} = Vue
const app = createApp({
   data(){
    return  {
        tasks :[
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' }
          ],
          newTask:'',
    }
   },
   computed:{
   },
   methods:{
    //CREO FUNZIONE CHE RIMUOVE I TASK
    deleteToDo(id){
      const newTaskArray = this.tasks.filter((task)=>{
        if(id !==task.id){
          return true;
        }else return false;
      })
      this.tasks = newTaskArray
      console.log(this.tasks)
    },

    //CREO FUNZIONE CHE AGGIUNGE UN OGGETTO ALL'ARRAY TASKS
    addNewTask(){
     const newTask = {
       id:5,
       done:false,
       text:this.newTask,
     };
     this.tasks.push(newTask)
    }
   },

})
app.mount('#root');

