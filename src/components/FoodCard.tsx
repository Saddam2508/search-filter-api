import Image from "next/image"


export interface Food {
    id: string
    dish_name: string
    category: string
    price: number
    image_link: string
}

interface FoodProps{
    food: Food
}

const FoodCard = ({food}: FoodProps) => {
    return (
       <div className="card bg-base-100 w-96 shadow-md rounded-lg">
  <figure className="px-10 pt-10">
    <Image
      src= {food.image_link}
      alt= {food.dish_name}
      width={250}
      height={250}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> {food.dish_name} </h2>
    <p> {} </p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;