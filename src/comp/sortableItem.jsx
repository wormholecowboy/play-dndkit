import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "react-bootstrap";

export function SortableItem(props) {
    const { attributes,
        listeners,
        setNodeRef,
        transform,
        transition } = useSortable({ id: props.id }) // will get the id of the element

    const style = {
        transform: CSS.Transform.toString(transform), //let's us pick up cards
        transition // here for best practice
    }
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card body className="m-3" >{props.id}</Card>
        </div>
    )
}
