function Person (name){
    this.name = name
    this.walk = function (){
        return "andando"
    }
}
const Gustavo = new Person("Gustavo")
const Pedro = new Person("Pedro")
console.log(Gustavo)
console.log(Pedro)