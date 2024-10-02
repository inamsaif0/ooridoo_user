import PropTypes from "prop-types";

import Swiper, { SwiperSlide } from "../../components/swiper";
import BaseUrl from "../../BaseUrl";

const ProductImageGallerySlider = ({ product,productdetailstate }) => {
  // swiper slider settings
  const gallerySwiperParams2 = {
    spaceBetween: 15,
    slidesPerView: 3,
    // slidesPerView: productdetailstate?.media?.length < 3 ? productdetailstate?.media?.length : 3, // Dynamically set slidesPerView
    loop: true,
    navigation: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
        // slidesPerView: mediaImages.length < 2 ? mediaImages.length : 2, 
        // slidesPerView: productdetailstate?.media?.length < 3 ? productdetailstate?.media?.length : 3, // 
      },
      1024: {
        // slidesPerView: mediaImages.length < 3 ? mediaImages.length : 3, 
        // slidesPerView: productdetailstate?.media?.length < 3 ? productdetailstate?.media?.length : 3, // 
        slidesPerView: 3
      }
    }
  };

  const gallerySwiperParams = {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    navigation: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  };

  // Get the media images
  const mediaImages = productdetailstate?.media || [];

  // If the number of images is less than slidesPerView, fill the empty slots by duplicating the last image
  const filledMediaImages = mediaImages?.length < gallerySwiperParams.slidesPerView
    ? [...mediaImages, ...Array(gallerySwiperParams?.slidesPerView - mediaImages?.length).fill(mediaImages[mediaImages?.length - 1])]
    : mediaImages;


  const DemoProduct = [
    {
      id: "1",
      image: "/assets/img/image-slider/book1.jpg",
      subtitle: "2 Products",
      title: "Book & Media",
      link: "/shop/1"
    },
    {
      id: "2",
      image: "/assets/img/image-slider/book2.jpg",
      subtitle: "3 Products",
      title: "Health & Beauty",
      link: "/shop/2"
    },
    {
      id: "3",
      image: "/assets/img/image-slider/book6.jpg",
      subtitle: "6 Products",
      title: "Kids Corner",
      link: "/shop/3"
    },
    {
      id: "4",
      image: "/assets/img/image-slider/book5.jpg",
      subtitle: "5 Products",
      title: "Hajji & Umrah",
      link: "/shop/4"
    },
    {
      id: "5",
      image: "/assets/img/image-slider/book3.jpg",
      subtitle: "3 Products",
      title: "Home Decor",
      link: "/shop/5"
    },
    {
      id: "6",
      image: "/assets/img/image-slider/book7.jpg",
      subtitle: "3 Products",
      title: "Clothing",
      link: "/shop/6"
    }
  ];

  console.log('product==>image==>Galery', product)




  return (
    <div className="product-large-image-wrapper product-large-image-wrapper--slider mx-auto text-center ">
      {/* {product?.image?.length ? ( */}
      {productdetailstate?.media?.length ? (
      // {filledMediaImages?.length ? (
        <Swiper options={gallerySwiperParams}>
                    {productdetailstate?.media?.map((single, key) => (
          //  {filledMediaImages?.map((single, key) => (
            <SwiperSlide key={key}>
              <div className="single-image">
                <img
                  src={`${BaseUrl.baseurl}${'/'}${single?.file} `}
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "5px", width: "95%" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
};

ProductImageGallerySlider.propTypes = {
  product: PropTypes.shape({})
};

export default ProductImageGallerySlider;




// import PropTypes from "prop-types";
// import Swiper, { SwiperSlide } from "../../components/swiper";
// import BaseUrl from "../../BaseUrl";

// const ProductImageGallerySlider = ({ product, productdetailstate }) => {
//   // swiper slider settings
//   const gallerySwiperParams = {
//     spaceBetween: 15,
//     slidesPerView: 3,
//     loop: true,
//     navigation: true,
//     breakpoints: {
//       320: {
//         slidesPerView: 1
//       },
//       640: {
//         slidesPerView: 2
//       },
//       768: {
//         slidesPerView: 2
//       },
//       1024: {
//         slidesPerView: 3
//       }
//     }
//   };

//   // Get the media images
//   const mediaImages = productdetailstate?.media || [];

//   // If the number of images is less than slidesPerView, fill the empty slots by duplicating the last image
//   const filledMediaImages = mediaImages.length < gallerySwiperParams.slidesPerView
//     ? [...mediaImages, ...Array(gallerySwiperParams.slidesPerView - mediaImages.length).fill(mediaImages[mediaImages.length - 1])]
//     : mediaImages;

//   return (
//     <div className="product-large-image-wrapper product-large-image-wrapper--slider mx-auto text-center">
//       {filledMediaImages?.length ? (
//         <Swiper options={gallerySwiperParams}>
//           {filledMediaImages?.map((single, key) => (
//             <SwiperSlide key={key}>
//               <div className="single-image">
//                 <img
//                   src={`${BaseUrl.baseurl}/${single?.file}`}
//                   className="img-fluid"
//                   alt=""
//                   style={{ borderRadius: "5px", width: "95%" }}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : null}
//     </div>
//   );
// };

// ProductImageGallerySlider.propTypes = {
//   product: PropTypes.shape({}),
//   productdetailstate: PropTypes.shape({
//     media: PropTypes.arrayOf(
//       PropTypes.shape({
//         file: PropTypes.string
//       })
//     )
//   })
// };

// export default ProductImageGallerySlider;
