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
  
    let colors = [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#56a139",
        "#797a22",
        "#ffa62d",
        "#c829c8"
        ]
        
  let t1 = document.createElement('span');
  t1.classList.add('question-text');
  let t2 = document.createElement('span');
  t2.classList.add('question-special-text');

  let t3 = document.createElement('span');
  t3.classList.add('question-text');

  let t4 = document.createElement('span');
  t4.classList.add('question-special-text');

  let t5 = document.createElement('span');
  t5.classList.add('question-text');
  
  let txt = document.createElement('div');
  txt.classList.add('question-text');
  
  // Create button
  let btn = document.createElement('button');
  btn.classList.add('question-button');

  
  setCount(randomIdx(getQuestion()[0].length))
  setI(randomIdx(getQuestion()[1][getCount()].length));
  setJ(randomIdx(getQuestion()[3][getCount()].length));
  btn.innerHTML = `New question`


  // Handle button click
  btn.addEventListener('click', () => {
    
    let i = randomIdx(getQuestion()[0].length)
    setCount(i)
    setI(randomIdx(getQuestion()[1][i].length));
    setJ(randomIdx(getQuestion()[3][i].length));
    model.save_changes();
  });

  // Update text when count changes
  model.on('change:count', () => {
  t1.textContent = `${getQuestion()[0][getCount()]}`
  t2.textContent = `${getQuestion()[1][getCount()][getI()]}`
  t3.textContent = `${getQuestion()[2][getCount()]}`
  t4.textContent = `${getQuestion()[3][getCount()][getJ()]}`
  t5.textContent = `${getQuestion()[4][getCount()]}`

  Object.assign(t2.style, {
    color: colors[getI()]
    });
  Object.assign(t4.style, {
    color: colors[getJ()]
    });
  
  });
  
//   el.appendChild(img);
  // el.appendChild(txt);
  let div1 = document.createElement('div')
  div1.classList.add('div');
  div1.appendChild(t1)
  div1.appendChild(t2)
  div1.appendChild(t3)
  div1.appendChild(t4)
  div1.appendChild(t5)
  div1.appendChild(btn)
  
  el.appendChild(div1)

  // el.appendChild(t1);
  // el.appendChild(t2);
  // el.appendChild(t3);
  // el.appendChild(t4);
  // el.appendChild(t5);
  // el.appendChild(btn);

  // Destructor to clean-up when MyST is finished with us!
  return () => {
    btn.remove();
    t1.remove();
    t2.remove();
    t3.remove();
    t4.remove();
    t5.remove();
  }
}
export default { render };