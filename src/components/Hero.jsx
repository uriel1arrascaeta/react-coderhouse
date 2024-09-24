const Hero = () => {
  return (
    <>
      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-9 ">
        <div className="md:col-span-3 flex items-center justify-center p-16">
          <div>
            <img
              src="avatar.png"
              className="w-[100] h-[100] md:w-[250px] md:h-[250px] object-cover xl:-mt-28"
            />
          </div>
        </div>
        <div className="md:col-span-6 flex items-center justify-center p-8 xl:p-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-gray-500 text-2xl leading-[2.5rem]">
              Lorem, ipsum dolor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
