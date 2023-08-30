const dropTarget = document.querySelector('.drop-target');
const dragItems = document.querySelectorAll('.drag-item');

dragItems.forEach((item) => {
  item.addEventListener('dragstart', () => {
    setTimeout(() => {    // 이후 드래그 된 항목에 클래스 추가하도록 예약 이벤트가 끝난 후에 실행되도록 해서 시각적 부드러움을 향상
      item.classList.add('dragging')
    },0)
  })

  item.addEventListener('dragend', () => item.classList.remove('dragging'))
})

function handleDragOver(e) {
  e.preventDefault();
  const draggingItem = dropTarget.querySelector('.dragging');
  //들고있는 대상
  const notDraggingItems = Array.from(dropTarget.querySelectorAll('.drag-item:not(.dragging)'));
  //나머지 대상들 배열로

  const nextItem = notDraggingItems.find((item) => {   
    /* 
      clientY : 뷰포트 내 마우스 y좌표
      offsetTop: 뷰포트에서 요소까지의 y좌표
      offsetHeight: 요소의 높이(border 포함)
    */
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
    // console.log('clientY: ', e.clientY, '/ offsetTop: ', item.offsetTop, '/ offsetHeight', item.offsetHeight);
  })
  // console.log(nextItem);
  dropTarget.insertBefore(draggingItem, nextItem);
  //부모노드.insertBefore(삽입 할 노드, 기준 점 노드);
  //반환값은 삽입된 노드
}

dropTarget.addEventListener('dragover', handleDragOver)
dropTarget.addEventListener('dragenter', (e)=> e.preventDefault())//마우스가 대상 객체의 위로 처음 진입할 때 발생