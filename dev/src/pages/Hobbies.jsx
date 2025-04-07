import Navbar from '../components/Navbar';

const Hobbies = () => {
  return (
    <body>
        <Navbar />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-6 md:py-12 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 pt-8">
                  <div>
                      <p className="mt-3 mb-5" style={{color:'#29e0d5'}}>coming soon...</p>
                  </div>
              </header>
          </div>
        </div>
    </body>
  );
};

export default Hobbies;
