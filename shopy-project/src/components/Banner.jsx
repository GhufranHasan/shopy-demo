import React from "react";
import ProductCard from "./ProductCard";
import YellowButton from "./YellowButton";

const Banner = () => {
    return (
        <div className="banner">
            <div className="AppWrapper">
                <div className="bannerContent">
                    <div className="bannerSectionOne">
                        <div className="productCardSection">
                            <ProductCard imageSrc="images/cap.png" productName="Cap" backgroundColor="#FFEEB9" height="130px" width="130px" />
                        </div>
                        <div id="secondProduct">
                            <ProductCard imageSrc="images/perfume.png" productName="Perfumes" backgroundColor="#FFCCA9" height="130px" width="130px" />
                            <div id="bannerButton">
                                <YellowButton text="See More" borderRadius="25px" />
                            </div>
                        </div>
                        <div className="productCardSection">
                            <ProductCard imageSrc="images/sneakers.png" productName="Sneakers" backgroundColor="#FF9D80" height="130px" width="130px" />
                        </div>
                    </div>
                    <div className="bannerSectionTwo">
                        <div>
                            <h1 className="bannerHeadText">Our Feature Products</h1>
                            <p className="bannerParaText">If we define Buzz buy in three words, it will be elegant, classic, and high-quality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner