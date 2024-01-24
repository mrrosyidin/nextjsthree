import SlideCarousel from "./SlideCarousel";
import CardCarousel from "./CardCarousel";
import FormEarlyAccess from "./FormEarlyAccess";
import NavigationBar from "./NavigasiBar";

export default function Dashboard() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <SlideCarousel></SlideCarousel>
      <div className="flex justify-center my-10">
        <CardCarousel></CardCarousel>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
          <p className="mt-4 text-gray-500">
            Get your waitlist access for the apps
          </p>
        </div>
        <FormEarlyAccess></FormEarlyAccess>
      </div>
    </div>
  );
}
