const items = [
    {
        id: 0,
        title: 'chair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam tenetur deleniti, dicta ipsa, distinctio nemo architecto nostrum nihil, rerum nulla obcaecati natus quae corrupti quia voluptatum voluptatibus sed exercitationem!',
        price: 10,
        img: 'https://picsum.photos/id/230/150/100'
    },
    {
        id: 1,
        title: 'table',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam tenetur deleniti, dicta ipsa, distinctio nemo architecto nostrum nihil, rerum nulla obcaecati natus quae corrupti quia voluptatum voluptatibus sed exercitationem!',
        price: 100,
        img: 'https://picsum.photos/id/231/150/100'
    },
    {
        id: 2,
        title: 'desk',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam tenetur deleniti, dicta ipsa, distinctio nemo architecto nostrum nihil, rerum nulla obcaecati natus quae corrupti quia voluptatum voluptatibus sed exercitationem!',
        price: 150,
        img: 'https://picsum.photos/id/232/150/100'
    },
    {
        id: 3,
        title: 'bed',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam tenetur deleniti, dicta ipsa, distinctio nemo architecto nostrum nihil, rerum nulla obcaecati natus quae corrupti quia voluptatum voluptatibus sed exercitationem!',
        price: 500,
        img: 'https://picsum.photos/id/233/150/100'
    },
    {
        id: 4,
        title: 'tv',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam tenetur deleniti, dicta ipsa, distinctio nemo architecto nostrum nihil, rerum nulla obcaecati natus quae corrupti quia voluptatum voluptatibus sed exercitationem!',
        price: 850,
        img: 'https://picsum.photos/id/234/150/100'
    },
    {
        id: 5,
        title: 'bbq',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magnam tenetur deleniti, dicta ipsa, distinctio nemo architecto nostrum nihil, rerum nulla obcaecati natus quae corrupti quia voluptatum voluptatibus sed exercitationem!',
        price: 1000,
        img: 'https://picsum.photos/id/235/150/100'
    }
]


const initialState = {
    items: items
}

const productReducer = (state = initialState, action) => {
    return state
}

export default productReducer
