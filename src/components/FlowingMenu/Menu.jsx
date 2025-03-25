import FlowingMenu from './FLowingMenu';


const demoItems = [
    { link: '#', text: 'Innovación', image: './public/img/menu/hero.webp' },
    { link: '#', text: 'Desarrollo', image: './public/img/menu/Desarrollo.webp' },
    { link: '#', text: 'Progreso', image: './public/img/menu/Progreso.webp' },
    { link: '#', text: 'Excelencia', image: './public/img/menu/4.webp' },
    { link: '#', text: 'Transformación', image: './public/img/menu/Excavator.webp' },

];


const Menu = () => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
    <FlowingMenu items={demoItems} />
    </div>
  )
}

export default Menu
