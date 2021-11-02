

       const cacheKey = "NUMBER";
       if (typeof(Storage) !== "undefined") {
 
           // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
           if (sessionStorage.getItem(cacheKey) === "undefined") {
               // Jika belum maka akan atur dengan nilai awal yakni 0
               sessionStorage.setItem(cacheKey, 0);
           }
 
           const button = document.querySelector("#button");
           const count = document.querySelector("#count");
           button.addEventListener('click', function(event) {
               let number = sessionStorage.getItem(cacheKey);
               number++;
               sessionStorage.setItem(cacheKey, number);
               count.innerText = sessionStorage.getItem(cacheKey);
           })
       } else {
           alert("Tidak mendukung Web Storage")
       }

