const items = document.querySelectorAll('.item');

// solution1

items.forEach((item) => {
  item.addEventListener('dragstart', dragstart);
  item.addEventListener('dragend', dragend);
});

function dragstart(event) {
  const target = event.target;
  target.classList.add('dragged');
  setTimeout(() => {
    target.classList.add('hover');
  }, 0);
}

function dragend(event) {
  event.target.classList = 'item';
}

const placeholders = document.querySelectorAll('.placeholder');

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
});

function dragenter(event) {
  console.log(event.target);
}

function dragover(event) {
  console.log(event.target);
}

function dragleave(event) {
  console.log(event.target);
}

function dragdrop(event) {
  console.log(event.target);
}
