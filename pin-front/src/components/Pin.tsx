import '../styles/Pin.css';

export const Pin = (props: { imageSrc: string }) => {
  return (
    <div className='pin'>
      <img src={props.imageSrc} />
      <div className='background' style={{
        backgroundImage: `url(${props.imageSrc})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }} />
    </div >
  );
}