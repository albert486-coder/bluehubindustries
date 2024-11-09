import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  getDesktopBannerImages,
  getMobileBannerImages,
} from "../redux/actions/bannerActions";

const Banner = () => {
  const dispatch = useDispatch();

  const {
    loadingBannerImages,
    desktopBannerImages,
    mobileBannerImages,
    errorLoadingBannerImages,
  } = useSelector((state) => state.banner);
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    if (desktopBannerImages.length - 1 > currentImage) {
      setCurrentImage((preve) => preve + 1);
    }
  };

  const preveImage = () => {
    if (currentImage != 0) {
      setCurrentImage((preve) => preve - 1);
    }
  };

  React.useEffect(() => {
    dispatch(getDesktopBannerImages());
    dispatch(getMobileBannerImages());
  }, [dispatch]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (desktopBannerImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, desktopBannerImages.length, nextImage]);

  return (
    <div className="container mx-auto px-4 rounded ">
      <div className="h-56 md:h-72 w-full bg-slate-200 relative">
        <div className="absolute z-10 h-full w-full md:flex items-center hidden ">
          <div className=" flex justify-between w-full text-2xl">
            <button
              onClick={preveImage}
              className="bg-white shadow-md rounded-full p-1"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={nextImage}
              className="bg-white shadow-md rounded-full p-1"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        {/**desktop and tablet version */}
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopBannerImages.map((image) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-all"
              key={image._id}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={image.image} alt="banner" className="w-full h-full" />
            </div>
          ))}
        </div>
        {/**mobile version */}
        <div className="flex h-full w-full overflow-hidden md:hidden">
          {mobileBannerImages.map((image) => (
            <div
              className="w-full h-full min-w-full min-h-full transition-all"
              key={image._id}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img
                src={image.image}
                alt="banner"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
