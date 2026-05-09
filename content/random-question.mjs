function randomIdx(max){
  return Math.floor(Math.random() * max)
}


function render({ model, el }) {

  // Setup quick-access to state

  const getQuestion = () => model.get('question');
  const setQuestion = (question) => model.set('question', question);

  const getField1 = () => model.get('field1');
  
  const getCount = () => model.get('count');
  const setCount = (count) => model.set('count', count);
  
  const getI = () => model.get('i');
  const setI = (i) => model.set('i', i);

  const getJ = () => model.get('j');
  const setJ = (j) => model.set('j', j);
  

//   var img = document.createElement('img')

//   img.setAttribute("src", 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png');
//   img.setAttribute("width", "304");
//   img.setAttribute("height", "228");
//   img.setAttribute("alt", "The Image");
  
  
//   fetch('./PythonScroll.png')
//     .then(response => response.blob()) 
//     .then(blob => {
//         let imgURL = URL.createObjectURL(blob);
//         img.setAttribute("src", imgURL);
//     })
//     .catch(error => console.error("Error fetching image:", error));

    let colors = [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#56a139",
        "#797a22",
        "#ffa62d",
        "#c829c8"
        ]
        


  let txt = document.createElement('div');
  txt.classList.add('question-text');
  
  // Create button
  let btn = document.createElement('button');
  btn.classList.add('question-button');

  setCount(randomIdx(getQuestion().length))
  setI(randomIdx(getField1().length));
  setJ(randomIdx(getField1().length));
  btn.innerHTML = `New question`


  // Handle button click
  btn.addEventListener('click', () => {
    
    setCount(randomIdx(getQuestion().length))
    setI(randomIdx(getField1().length));
    setJ(randomIdx(getField1().length));
    model.save_changes();
  });

  // Update text when count changes
  model.on('change:count', () => {
  txt.textContent = `${getQuestion()[getCount()]} ${getField1()[randomIdx(getField1().length)]} to ${getField1()[getJ()]}`;
  // txt.setHTMLUnsafe("`${getQuestion()[getCount()]} <span style="color:red">${getField1()[randomIdx(getField1().length)]}</span> to ${getField1()[getJ()]}`;")
  Object.assign(txt.style, {
    color: colors[randomIdx(colors.length)]
    });
  
  });
  
//   el.appendChild(img);
  el.appendChild(txt);
  el.appendChild(btn);

  // Destructor to clean-up when MyST is finished with us!
  return () => {
    btn.remove();
    txt.remove();
  }
}
export default { render };