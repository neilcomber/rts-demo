const EventComponent: React.FC = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement> | undefined) => {
    console.log(event);
  };

  return (
    <div>
    <input onChange={onChange}>

      </input>
      <div draggable onDragStart={onDragStart}>Drag Me!</div>
      </div>);
}

export default EventComponent;