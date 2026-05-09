function render({ model, el }) {

  // Setup quick-access to state

  const getQuestion = () => model.get('question');
  const setQuestion = (question) => model.set('question', question);

  const getField1 = () => model.get('field1');
//   const getField2 = () => model.get('field2');
  
  const getCount = () => model.get('count');
  const setCount = (count) => model.set('count', count);
  
  const getI = () => model.get('i');
  const setI = (i) => model.set('i', i);

  const getJ = () => model.get('j');
  const setJ = (j) => model.set('j', j);
  
  
  let txt = document.createElement('div');
  txt.textContent = "?";

  
  // Create button
  let btn = document.createElement('button');
  btn.classList.add('counter-button');

  setCount(Math.floor(Math.random() * getQuestion().length))
  setI(Math.floor(Math.random() * getField1().length));
  setJ(Math.floor(Math.random() * getField1().length));
  btn.innerHTML = `Generate!`
//   txt.textContent = `${getQuestion()[0]} ${getField1()[getI()]} to ${getField1()[getJ()]}`;


  // Handle button click
  btn.addEventListener('click', () => {
    setCount(Math.floor(Math.random() * getQuestion().length))
    setI(Math.floor(Math.random() * getField1().length));
    setJ(Math.floor(Math.random() * getField1().length));
    model.save_changes();
  });

  // Update text when count changes
  model.on('change:count', () => {
  txt.textContent = `${getQuestion()[getCount()]} ${getField1()[getI()]} to ${getField1()[getJ()]}`;

  });
  
  el.appendChild(txt);
  el.appendChild(btn);

  // Destructor to clean-up when MyST is finished with us!
  return () => btn.remove();
}
export default { render };