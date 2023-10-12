import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={ ()=> console.log('click')
  } >
    Gamma Gamma Gamma
  </ChildAsFC>
};

export default Parent;