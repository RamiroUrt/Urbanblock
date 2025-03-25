import FlowingMenu from './FLowingMenu';


const demoItems = [
    { link: '#', text: 'Innovación', image: '/img/menu/hero.webp' },
    { link: '#', text: 'Desarrollo', image: '/img/menu/Desarrollo.webp' },
    { link: '#', text: 'Progreso', image: '/img/menu/Progreso.webp' },
    { link: '#', text: 'Excelencia', image: '/img/menu/4.webp' },
    { link: '#', text: 'Transformación', image: '/img/menu/Excavator.webp' },
];


const Menu = () => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
    <FlowingMenu items={demoItems} />
    </div>
  )
}

export default Menu
