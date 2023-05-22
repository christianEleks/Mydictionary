const input = document.querySelector("input");
const btn = document.querySelector("button");
const content = document.querySelector(".content");

async function myApi(word){
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json());
    return res[0]
}



   btn.addEventListener("click", myFun)


   async function myFun(){
    const down = await myApi(input.value);
    console.log(down);

    let partOfSpeechArray =[]
    for(let i=0; i<down.meanings.length-1; i++){
        partOfSpeechArray.push(down.meanings[i].partOfSpeech)   
    }

    content.innerHTML = `
    <div class="card">
      
    <div class="property">
     <span>WORD:</span>
     <span>${down.word}</span>
    </div>

   <div class="property">
     <span>PHONETICS(a):</span>
     <span>${down.phonetics[0].text}</span>
    </div>

    <div class="property">
     <span>PHONETICS(b):</span>
     <span>${down.phonetics[1].text}</span>
    </div>

    <div class="property">
     <span>
     <audio controls src="${down.phonetics[0].audio}"></audio>
     </span>
    </div>

    <div class="property">
     <span>DEFINITION(a):</span>
     <span>${down.meanings[0].definitions[0].definition}</span> <br>
    </div>

    <div class="property">
     <span>DEFINITION(b):</span>
     <span>${down.meanings[1].definitions[0].definition}</span> <br>
    </div>

    <div class="property">
     <span>EXAMPLE(a):</span>
     <span>${down.meanings[0].definitions[0].example}</span>
    </div>

    <div class="property">
     <span>EXAMPLE(b):</span>
     <span>${down.meanings[1].definitions[0].example}</span>
    </div>

    <div class="property">
    <span>PARTS OF SPEECH(a):</>
     <span>${down.meanings[0].partOfSpeech}</span>
    </div>

    <div class="property">
    <span>PARTS OF SPEECH(b):</>
     <span>${down.meanings[1].partOfSpeech}</span>
    </div>

   </div>
    `
   }
