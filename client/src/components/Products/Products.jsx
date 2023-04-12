import "./Products.scss";
import Product from "./Product/Product"
const Products = ({innerPage , headingText}) => {
    return (
         <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>} {/*20. It means wherever innerPage is false there this peice of line will render*/}
        <div className="products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            
        </div>
        </div>
    );
};

export default Products;
