import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import { SortableItem } from './comp/sortableItem'

function App() {
    const [guys, setGuys] = useState(["moe", "larry", "curly"])
    const handleDragEnd = (event) => {
        console.log('drag end fired')
        const { active, over } = event;

        if (active.id !== over.id) {
            setGuys(items => {
                const activeIndex = items.indexOf(active.id);
                const overIndex = items.indexOf(over.id);

                return arrayMove(items, activeIndex, overIndex);
            })
        }
    }

    return (
        <>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}>
                <Container className='p-3' style={{ "width": "80%" }} align="center">
                    <h3>Better Presidential Candidates</h3>
                    <SortableContext items={guys} strategy={verticalListSortingStrategy}>
                        {guys.map(guy => <SortableItem id={guy} key={guy} />)}

                    </SortableContext>
                </Container>

            </DndContext>
        </>
    )
}

export default App
