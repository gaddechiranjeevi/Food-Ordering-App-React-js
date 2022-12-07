import classes from './AvailableItems.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name:'IDLY',
        imageUrl: 'https://gaddechiranjeevi.github.io/Images/idli1.jpg',
        description:'Soft and Fluffy                                   ',
        price: 40
    },
    {
        id: 'm2',
        name: 'Dosa',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/masala%20dosa1.jpg',
        description:'South Indian served with flavorful spiced potato curry',
        price: 30
    },
    {
        id: 'm3',
        name:'Pongal',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/Pongal1.jpg',
        description:'An Indian rice dish',
        price: 40
    },
    {
        id:'m4',
        name:"Appam",
        description:'Made with fermented rice batter and coconut milk',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/Appam1.jpg',
        price: 60
    },
    {
        id: 'm14',
        name:'Vaada',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/vada1.jpg',
        description:'savoury doughnuts',
        price: 20
    },
    {
        id: 'm5',
        name:'Rice',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/Biryani1.jpg',
        description:'Served with different type of curries',
        price: 150
    },
    {
        id:'m6',
        name:"Hyderabadi biryani",
        imageUrl:'https://gaddechiranjeevi.github.io/Images/Hyd%20biryani.jpg',
        description:"Most famous and tastiest",
        price: 200
    },
    {
        id: 'm7',
        name:'Chicken Biryani',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/Biryani1.jpg',
        description:'Spicy and tasty',
        price: 250
    },
    {
        id: 'm8',
        name:'Mutton Biryani',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/Mutton%20biryani1.jpg',
        description:'juicy, tender, flavourful mutton, fragrant rice',
        price: 350
    },
    {
        id: 'm9',
        name:'Fish Biryani',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/fish%20biryani1.jpg',
        description:'Rice dish made with fish',
        price: 240
    },
    {
        id: 'm10',
        name:'Nattu Kodi Biryani',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/Natu%20kodi1.jpg',
        description:'Biryani made with desi chicken',
        price: 170
    },
    {
        id: 'm11',
        name:'Pulihora',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/pulihora1.jpg',
        description:'Rice based dish tastes exotic and sour',
        price: 30
    },
    {
        id: 'm12',
        name:'Parota',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/parota1.jpg',
        description:'Subcontinental layered Indian flatbread made from Maida or Atta',
        price: 50
    },
    {
        id: 'm13',
        name:'Samosa',
        imageUrl:'https://gaddechiranjeevi.github.io/Images/samosa1.jpg',
        description:'Deep-fried savory pastry filled with spiced mashed potatoes',
        price: 40
    }
]
const AvailableItems = () => {
    const ItemsList = DUMMY_MEALS.map((Item) => (
        <MealItem 
          imageUrl ={Item.imageUrl}
          key ={Item.id}
          id ={Item.id}
          name={Item.name}
          description={Item.description}
          price={Item.price} 
        />
    ));
    
    return (
    <section className={classes.Items}>
        <Card>
            <ul>{ItemsList}</ul>
        </Card>
    </section>
    );
};
     
export default AvailableItems;