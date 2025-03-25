import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <div className='counter-body' ref={ref}>
      <h1 className='title title-count'>Nuestra <span>Trayectoria</span> en <span>Números</span></h1>
      <div className="counter-contain">
        <div className="counter-item">
          {inView && (
            <CountUp
              className='counter-number'
              start={0}
              end={6130}
              duration={5}
              prefix="+"
              separator="."
            />
          )}
          <p className='secondary-text'>Proyectos realizados</p>
        </div>
        <div className="counter-item">
          {inView && (
            <CountUp
              className='counter-number'
              start={0}
              end={12346}
              duration={5}
              separator="."
              prefix="+"
            />
          )}
          <p className='secondary-text'>Clientes satisfechos</p>
        </div>
        <div className="counter-item">
          {inView && (
            <CountUp
              className='counter-number'
              start={0}
              end={30}
              duration={5}
              separator="."
              prefix="+"
            />
          )}
          <p className='secondary-text'>Años de experiencia</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;