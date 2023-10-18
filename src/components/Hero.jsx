
export const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <div className="flex items-center">
  <img src="icons8-brain-96.png" alt="company_logo" className="w-12  object-contain" />
  <h1 className="font-bold text-2xl">SumrizeXpert</h1>
</div>
        <button
          type="button"
          onClick={() => window.open("https://github.com/arpan-pro-learner")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Sumarize articles <br className="max-md:hidden" />
        <span className="orange_gradient"> with the help of AI</span>
      </h1>
      <h2 className="desc">
        Experience the Future of Reading with Our AI-Powered Article Summarizer.
        Elevate Your Comprehension and Save Time on Every Page You Browse.
        Unleash the Power of SumrizeXpert!
      </h2>
    </header>
  );
};
