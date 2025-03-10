const MenuItem = ({ item }) => {
    const { name, image, price, recipe,  } = item;
   
     
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt={name} />
            <div>
                <h3>{name}----------</h3>
                <p>Price: ${recipe}</p>
                
            </div>
            <p className="text-yellow-500"> {price}$</p>
        </div>
    );
};

export default MenuItem;
