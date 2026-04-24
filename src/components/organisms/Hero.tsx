import Link from 'next/link'
import Button from '../atoms/Button'

export default function Hero() {

    return (

        <section className="mb-6 md:mb-12 text-center md:text-start">
            <div className="flex flex-wrap md:items-center">

                <div className="w-full md:w-6/12">
                    <div style={{ backgroundImage: "url('/img/hero.jpg')" }}
                        className="py-56 md:py-64 bg-cover md:rounded-b shadow-sm"></div>
                </div>

                <div className="w-full md:w-6/12 px-4">
                    <div className="md:px-6 lg:px-12 py-6">

                        {/* brand logo with title and tagline */}

                        <div className="inline-flex items-center mb-3">
                            <img src="/img/logo.svg" anlt="Meal-app" className="w-20 h-20 sm:w-24 sm:h-24 object-cover" />
                            <h2 className="text-4xl md:text-6xl ml-2 font-semibold tracking-wider text-orange-600 font-shadows">
                                Meal App
                            </h2>
                        </div>

                        <h2 className="text-3xl text-gray-800 font-semibold mb-3 leading-normal">
                            Don't just be a Foodie, make tasty food.</h2>

                        <p className="text-xl mb-6 text-gray-600 mb-8 leading-normal">Meal App is a collection of 200+
                            unique Ingredients. So, don't just be Meal App, make tasty food.</p>

                            
                        <Button href="/ingredients" title="Explore" />

                    </div>
                </div>

            </div>
        </section>

    );


}