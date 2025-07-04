import { useState } from "react"
import { sliderLists } from "../constants"

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalCocktails = sliderLists.length
  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails
    setCurrentIndex(newIndex)
  }
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail navigation">
        {
          sliderLists.map((cocktail,index) => {
            const isActive = index === currentIndex;

            return (
              <button key={cocktail.id} className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
              onClick={() => goToSlide(index)}
              >
                {cocktail.name}
              </button>
            )
          })
        }
      </nav>

      <div className="content">
        <div className="arrows">
          <button 
          className="text-left"
          onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>prevcocktailname</span>
            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
          </button>
          <button 
          className="text-left"
          onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>nextcocktailname</span>
            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Menu