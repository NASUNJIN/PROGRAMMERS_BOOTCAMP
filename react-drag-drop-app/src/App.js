import './App.css';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed'
  },
  {
    id: 'Jhon',
    name: 'Jhon Najoa'
  },
  {
    id: 'Na',
    name: 'Na Sunjin'
  }
];

function App() {

  const [characters, setCharacters] = useState(finalSpaceCharacters)

  const handleEnd = (result) => {
    // result 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함.
    console.log(result);

    // 목적지가 없으면 이 함수 종료
    if (!result.destination) return;

    // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
    const items = Array.from(characters);
    console.log(items);

    // 1. 변경시키는 아이템을 배열에서 지워주기
    // 2. return 값으로 지워진 아이템 잡아주기
    const [reorderedItem] = items.splice(result.source.index, 1);
    console.log(reorderedItem);
    
    // 원하는 자리에 reorderedItem를 insert
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);
    setCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>

        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId='characters'>
            {(provided) => (
              <ul 
                className='characters'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li 
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
