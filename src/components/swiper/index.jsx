import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperSlider = forwardRef(
    ({ options, prevIcon, nextIcon, children, className, navClass }, ref) => {
        const modules = options?.modules !== undefined ? options.modules : [];
        const prevClass = `prev-${navClass || "swiper-nav"}`;
        const nextClass = `next-${navClass || "swiper-nav"}`;

        const sliderOptions = {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            autoplay: options?.autoplay
                ? {
                    delay: 2500,
                    disableOnInteraction: false,
                }
                : false,
            watchSlidesProgress: true,
            autoHeight: true,
            breakpoints: {},
            ...options,
            modules: [Navigation, Pagination, A11y, Autoplay, ...modules],
            navigation: options?.navigation
                ? {
                    prevEl: `.${prevClass}`,
                    nextEl: `.${nextClass}`,
                }
                : false,
            pagination: options?.pagination
                ? {
                    clickable: true,
                }
                : false,
        };

        return (
            <div className={cn("swiper-wrap", className)} ref={ref} style={{ position: "relative" }}>
                <Swiper {...sliderOptions}>{children}</Swiper>

                {sliderOptions?.navigation && (
                    <>
                        {/* Custom Previous Button */}
                        <button
                            type="button"
                            className={prevClass}
                            style={{
                                backgroundColor: "orange",
                                border: "none",
                                fontSize: "20px",
                                color: "white",
                                borderRadius: "50%", // Make the button rounded
                                width: "40px", // Set button size
                                height: "40px", // Set button size
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "absolute", // Use absolute positioning
                                top: "50%", // Center vertically
                                left: "10px", // Align to the left side
                                transform: "translateY(-50%)", // Adjust for perfect centering
                                zIndex: 10, // Ensure the button is on top
                            }}
                        >
                            &lt;
                        </button>

                        {/* Custom Next Button */}
                        <button
                            type="button"
                            className={nextClass}
                            style={{
                                backgroundColor: "orange",
                                border: "none",
                                fontSize: "20px",
                                color: "white",
                                borderRadius: "50%", // Make the button rounded
                                width: "40px", // Set button size
                                height: "40px", // Set button size
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "absolute", // Use absolute positioning
                                top: "50%", // Center vertically
                                right: "10px", // Align to the right side
                                transform: "translateY(-50%)", // Adjust for perfect centering
                                zIndex: 10, // Ensure the button is on top
                            }}
                        >
                            &gt;
                        </button>
                    </>
                )}
            </div>
        );
    }
);

export { SwiperSlide };

SwiperSlider.propTypes = {
    options: PropTypes.shape({}),
    prevIcon: PropTypes.node, // Updated to support node (React element)
    nextIcon: PropTypes.node, // Updated to support node (React element)
    children: PropTypes.node,
    className: PropTypes.string,
    navClass: PropTypes.string,
};

SwiperSlider.defaultProps = {
    prevIcon: null, // Set default to null if no icon provided
    nextIcon: null,
    navClass: "swiper-nav", // Optional custom navigation class
};

export default SwiperSlider;
