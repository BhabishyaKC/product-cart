const productName = [
  {
    productName: "Apple iPhone 16 Pro Max",
    price: {
      original:  999.99,
      discounted: 899.99,
    },
    imageUrl: "https://www.dxomark.com/wp-content/uploads/drafts/post-178568/Apple-iPhone-16-Pro-Max_featured-image-packshot-review.png",
  },
  {
    productName: "Apple iPhone 15 Pro Max",
    price: {
      original: 799.99,
      discounted: 699.99,
    },
    imageUrl: "https://www.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg",
  },
  {
    productName: "Fantech MK875V2 ATOM 81",
    price: {
      original: 100.0,
      discounted: null,
    },
    imageUrl: "https://vibegaming.com.bd/wp-content/uploads/2024/09/White-11-9.png",
  },
  {
    productName: "Apple iPad M2 Pro",
    price: {
      original: 700,
      discounted: 650,
    },
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CLiS8Z8WOK1VElc29hYmYtzwV-pb_SAWK7ZiiatfvG3Yt7X-TzMKhUA65a75QoPf-Kk&usqp=CAU",
  },
  {
    productName: " Anker Soundcore Space A40",
    price: {
      original: 200,
      discounted: null,
    },
    imageUrl: "https://m.media-amazon.com/images/I/51NwZHYMyTL._AC_UF1000,1000_QL80_.jpg",
  },
    {
    productName: "MacBook Pro(14-inch, M4) ",
    price: {
      original: 1199.0,
      discounted: 1000.0,
    },
    imageUrl: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/mbp14-m4-2024.png",
  },

    {
    productName: "Apple Airpods Max",
    price: {
      original: 600.0,
      discounted: 500,
    },
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSHQDGB-4zV3_V3RgIXIuEW4YBL2z4k4lzA&s",
  },
    {
    productName: "Asus ROG Strix(G16)",
    price: {
      original: 1681.45,
      discounted: null,
    },
    imageUrl: "https://dlcdnwebimgs.asus.com/files/media/7307645F-321A-46F8-8DED-BEA6BFC2A968/v1/img/performance/engine-pd.png",
  },
   
];

// Updated to display discounted price if available
const ProductCart = (props) => {
  return (
    <div className='  bg-gray-200 mt-5 product-items rounded-lg shadow-2xs p-4 h-auto max-w-[90%] cursor-pointer hover:bg-gray-300 duration-500'>
      <img src={props.imageUrl}  alt="{productName}" className="max-w-[190px] h-auto object-cover" />
      <p className="font-semibold text-center  mt-6">{props.productName}</p>
      <p className=" text- text-center font-semibold text-green-600">
        {props.price.discounted ? (
          <>
            <span className="line-through mr-2 text-red-500">${props.price.original}</span>
            <span className="font-bold text-green-600 ">${props.price.discounted}</span>
          </>
        ) : (
          <span className="font-bold">${props.price.original}</span>
        )}
      </p>
      
      <div className="text-center mt-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 w-full">
          Add to Cart
        </button>
        </div>
    </div>
  );
};

const Ecom = () => {
  return (
     <section className="productContainer  max-w-auto mx-auto py-[1.3em]">
      <div>
        <h1 className="text-3xl font-semibold text-orange-600 text-center">Our products</h1>
      </div>
      <div className="flex-product-container flex  gap-6  justify-center  flex-wrap  w-[100%] mx-auto max-w-auto py-[1em]">
      {productName.map((item, id) => (
        <ProductCart
          key={id}
          productName={item.productName}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
    </section>
   
  );
};

export default Ecom;
