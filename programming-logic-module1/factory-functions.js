
function newUser(name, lastname, age) {
  
  return {  
    name, lastname, age,

    // Getter
    get fullname() {
      return `${name} ${lastname}`
    },

    // Setter
    set fullnameSet(fullname) {
      fullname = fullname.split(' ');
      this.nome = fullname.shift();
      this.lastname = fullname.join(' ');
    },
  
    





  };
};


const firstUser = newUser("Luan", "Bertozzi", 19);

console.log(firstUser.fullname);