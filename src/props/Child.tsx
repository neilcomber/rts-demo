interface ChildProps {
  color: string;
  onClick: () => void; 
  children?: React.ReactNode;

  
}


export const Child = ({color, onClick}: ChildProps) => {
  return <div>
    <button onClick={onClick}>Click Me!</button>
    {color}</div>
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div>
    <button onClick={onClick}>Click Me!</button>
    {color}</div>;
}; 

