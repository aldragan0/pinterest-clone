import { RuntimeGlobals } from 'webpack';
import '../styles/Pin.css';

export const Pin = (props: {
  imageSrc: string,
  backgroundColor: string
}) => {
  return (
    <div className='pin'>
      <img src={props.imageSrc} />
      <div className='background' style={{
        backgroundColor: props.backgroundColor
      }} />
    </div>
  );
}