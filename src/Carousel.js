import { useState } from "react"

const images = [
    "https://purepng.com/public/uploads/large/purepng.com-cuddly-catcatcatsanimalspetscute-cat-251520163858jlwb4.png",
    "https://purepng.com/public/uploads/thumbnail/purepng.com-black-sitting-catcatcatsanimalspetscute-cat-251520164083dgiwr.png",
    "https://purepng.com/public/uploads/thumbnail/purepng.com-cat-cuteanimalscats-11520502072shi6n.png",
    "https://purepng.com/public/uploads/thumbnail/purepng.com-the-cat-loves-p-and-g-and-the-sunmanpeoplepersonsmalewomenpeoplepersonsfemaleanimalsbenchcatcatspark-benchpetssittingsunnywinter-1261526401216r0wtq.png",
    "https://purepng.com/public/uploads/thumbnail/purepng.com-gray-catcatcatsanimalspetscute-cat-251520163872rlnp9.png",
    "https://purepng.com/public/uploads/thumbnail/purepng.com-sitting-catcatcatsanimalspetscute-cat-2515201640095wlfg.png"

]


const Carousel = () => {
    const [carouselIndex, setCarouselIndex] = useState(0)


    const handlePrevious= ()=>{
        const index = carouselIndex === 0 ? images.length - 1 : carouselIndex - 1
        setCarouselIndex(index)

    }

    const handleNext= ()=>{
        const index = carouselIndex === images.length - 1 ? 0 : carouselIndex + 1
        setCarouselIndex(index)

    }
  return (
    <>
    <div className="carousel">
    <img src={images[carouselIndex]} alt={`Images ${carouselIndex +1}`} />
    </div>
    <button onClick={handlePrevious}>Previous</button>
    <button onClick={handleNext}>Next</button>
    </>
  )
}
export default Carousel