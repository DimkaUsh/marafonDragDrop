// solution1 for one element

// const item = document.querySelector('.item');
// const placeholders = document.querySelectorAll('.placeholder');

// item.addEventListener('dragstart', dragstart);
// item.addEventListener('dragend', dragend);

// function dragstart(event) {
//   const target = event.target;
//   target.classList.add('dragged');

//   setTimeout(() => {
//     target.classList.add('hover');
//   }, 0);
// }

// function dragend(event) {
//   const target = event.target;
//   target.classList = 'item';
// }

// placeholders.forEach((placeholder) => {
//   placeholder.addEventListener('dragenter', dragenter);
//   placeholder.addEventListener('dragover', dragover);
//   placeholder.addEventListener('dragleave', dragleave);
//   placeholder.addEventListener('drop', dragdrop);
// });

// function dragenter(event) {
//   event.target.classList.add('select');
// }

// function dragover(event) {
//   event.preventDefault();
// }

// function dragleave(event) {
//   event.target.classList.remove('select');
// }

// function dragdrop(event) {
//   const target = event.target;
//   target.append(item);
//   target.classList.remove('select');
// }

// solution2 for two and more elements

const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');
let itemDragget = null;

placeholdersAddListners();
itemsAddListner();

function itemsAddListner() {
  items.forEach((item) => {
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);
  });

  function dragstart(event) {
    const target = event.target;
    itemDragget = target;
    target.classList.add('dragged');

    setTimeout(() => {
      target.classList.add('hover');
    }, 0);
  }

  function dragend(event) {
    const target = event.target;
    target.classList = 'item';
  }
}

function placeholdersAddListners() {
  placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', (event) => {
      dragdrop(event, itemDragget);
    });
  });

  function dragdrop(event, item) {
    const target = event.target;
    if (target.classList.contains('placeholder')) {
      target.append(item);
    }

    target.classList.remove('select');
  }

  function dragenter(event) {
    const target = event.target;
    if (target.classList.contains('placeholder')) {
      target.classList.add('select');
    }
  }

  function dragover(event) {
    event.preventDefault();
  }

  function dragleave(event) {
    const target = event.target;
    if (target.classList.contains('placeholder')) {
      target.classList.remove('select');
    }
  }
}
