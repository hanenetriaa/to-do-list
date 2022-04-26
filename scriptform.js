/** @format */
const Component = {
  data() {
    return {
      arrayTask: [],
      array2: [],
      listFin: [],
      information: "",
      show1: true,
      show2: true,
      show3: true,
    };
  },

  methods: {
    addTask() {
      this.arrayTask.push(this.information);
      this.information = "";
    },

    addList(valeur, index) {
      this.array2.push(this.arrayTask[(valeur, index)]);
      this.arrayTask.splice(index, 1);
    },

    addListCour(valeur1, index) {
      this.listFin.push(this.array2[(valeur1, index)]);
      this.array2.splice(index, 1);
    },

    suprimList(index) {
      this.listFin.splice(index, 1);
    },
  },

  template: `
  
  <!--section formulaire v-Model-->
  <div class="container">
<h1> TO DO LIST </h1>

<input v-model="information" placeholder="liste des taches">
<button @click="addTask(index)">ajout tache</button>

<h2>LISTE SAISIE</h2>
<button @click="show1 = !show1">{{ show1 ? "Masquer" : "Afficher"}}</button>
<ul v-show = "show1">
<li v-for="(valeur, index) in arrayTask">{{valeur}}-{{index}}<button @click="addList(valeur, index)">marquer en cour</button></li>
</ul>


<h2>LISTE EN COUR</h2>
<button @click="show2 = !show2">{{ show2 ? "Masquer" : "Afficher"}}</button>
<ul v-show = "show2">
<li v-for="(valeur1, index) in array2">{{valeur1}}-{{index}}<button @click="addListCour(valeur1, index)">marque fini</button></li>
</ul>


<h2>LISTE FINI</h2>
<button @click="show3 = !show3">{{ show3 ? "Masquer" : "Afficher"}}</button>
<ul v-show = "show3">
<li  v-for="(list, index) in listFin ">{{list}}-{{index}}<button @click="suprimList(index)">supprime</button></li>
</ul>

</div>

  `,
};
Vue.createApp(Component).mount("#root");
