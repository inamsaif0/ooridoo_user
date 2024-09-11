import PropTypes from "prop-types";

import Swiper, { SwiperSlide } from "../../components/swiper";
import BaseUrl from "../../BaseUrl";

const ProductImageGallerySlider = ({ product }) => {
  // swiper slider settings
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

  console.log('product==>image==>Galery',product)
  

  

  return (
    <div className="product-large-image-wrapper product-large-image-wrapper--slider">
      {/* {product?.image?.length ? ( */}
        {product?.media?.length ? (
        <Swiper options={gallerySwiperParams}>
          {product?.media?.map((single, key) => (
            <SwiperSlide key={key}>
              <div className="single-image">
                <img
                  src={`${BaseUrl.baseurl}${'/'}${single.file} `}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ): null}
    </div>
  );
};

ProductImageGallerySlider.propTypes = {
  product: PropTypes.shape({})
};

export default ProductImageGallerySlider;
