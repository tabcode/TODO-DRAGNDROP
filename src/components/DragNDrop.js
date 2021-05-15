import { useState, useRef, useEffect } from 'react';
import Modal from './Modal';
import useModal from './useModal';

function DragNDrop({ tasks }) {
    const [list, setList] = useState([]);
    const [drawing, setDrawing] = useState(true);
    const dragItem = useRef();
    const dragNode = useRef();
    const { toggle, visible, id } = useModal();

    useEffect(() => {
        setList(tasks);
    }, [tasks]);

    const handleDragStart = (e, params) => {
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setDrawing(true);
    }

    const handleDragEnd = () => {
        setDrawing(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
    }

    const handleDragEnter = (e, params) => {
        const currentItem = dragItem.current;
        list[params.indexGroup].tasks.splice(params.index, 0, list[currentItem.indexGroup].tasks.splice(currentItem.index, 1)[0]);
        setList(list);
        dragItem.current = params;
    }

    return (
        <>
            {
                list.map(({ group, tasks }, indexGroup) => (
                    <div className="card" key={group}>
                        {
                            tasks.map(({ _id, task, priority }, index) => {
                                return (
                                    <div
                                        draggable
                                        key={_id}
                                        onDragStart={(e) => { handleDragStart(e, { indexGroup, index }) }}
                                        onDragEnter={drawing ? (e) => { handleDragEnter(e, { indexGroup, index }) } : null}
                                    >
                                        <span><b>Task: </b>{task}</span>
                                        <span><b>Priority: </b>{priority}</span>
                                        <span>
                                            <button type="button" onClick={(e) => toggle(index)}>Change Task</button>
                                        </span>
                                    </div>

                                )
                            })
                        }
                    </div>
                ))
            }
            <Modal visible={visible} toggle={toggle} id={id} />
        </>
    );
}

export default DragNDrop;