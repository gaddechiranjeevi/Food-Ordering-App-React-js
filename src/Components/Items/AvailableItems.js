import classes from './AvailableItems.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name:'IDLY',
        description:'Soft and Fluffy',
        price: 40
    },
    {
        id: 'm2',
        name: 'Masala Dosa',
        description:'South Indian served with flavorful spiced potato curry',
        price: 30
    },
    {
        id: 'm3',
        name:'Pongal',
        description:'An Indian rice dish',
        price: 40
    },
    {
        id:'m4',
        name:"Appam",
        description:'Made with fermented rice batter and coconut milk',
        price: 60
    },
    {
        id: 'm14',
        name:'Vaada',
        description:'savoury doughnuts',
        price: 20
    },
    {
        id: 'm5',
        name:'Rice',
        description:'Served with different type of curries',
        price: 150
    },
    {
        id:'m6',
        name:"Hyderabadi biryani",
        description:"Most famous and tastiest",
        price: 200
    },
    {
        id: 'm7',
        name:'Chicken Biryani',
        description:'Spicy and tasty',
        price: 250
    },
    {
        id: 'm8',
        name:'Mutton Biryani',
        description:'juicy, tender, flavourful mutton, fragrant rice',
        price: 40
    },
    {
        id: 'm9',
        name:'Fish Biryani',
        description:'Rice dish made with fish',
        price: 40
    },
    {
        id: 'm10',
        name:'Nattu Kodi Biryani',
        description:'Biryani made with desi chicken',
        price: 170
    },
    {
        id: 'm11',
        name:'Pulihora',
        description:'Rice based dish tastes exotic and sour',
        price: 30
    },
    {
        id: 'm12',
        name:'Parotta',
        description:'Subcontinental layered Indian flatbread made from Maida or Atta',
        price: 50
    },
    {
        id: 'm13',
        name:'Samosa',
        description:'Deep-fried savory pastry filled with either spiced mashed potatoes',
        price: 40
    }
]
const AvailableItems = () => {
    const ItemsList = DUMMY_MEALS.map((Item) => (
        <MealItem key ={Item.id}
          name={Item.name}
          description={Item.description}
          price={Item.price} 
        />
    ));
    return <section className={classes.Items}>
        <Card>
            <ul>{ItemsList}</ul>
        </Card>
    </section>
};
     
export default AvailableItems;