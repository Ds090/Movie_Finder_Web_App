import UsemovieDetailshooks from "../hooks/MovieDetailshooks";
import Loader from "../loader/Loader";

function MusicList() {
  const {isloading, moveieName, debounceCallBack, downloagMusic} = UsemovieDetailshooks();

  return (
    
      <div className="lg:w-[400px] px-3 py-4 flex flex-col justify-center items-center bg-stone-900 text-white rounded shadow shadow-white w-[300px] ">
        <div className="flex gap-1">
          <input
            type="text"
            className="py-2 px-1 mb-5 rounded bg-black lg:w-[260px] md:[260px] sm:w-[200px] w-[170px] text-white shadow shadow-[#f71212] outline-none focus:transition-colors focus:enabled:shadow-teal-600 focus:duration-500 focus:delay-500"
            onChange={debounceCallBack}
            placeholder="Enter Movie Name"
          />
          <button
            onClick={() => {
              downloagMusic();
            }}
            className="mb-5 px-4 rounded bg-[#f71212] hover:shadow hover:shadow-white hover:transition-shadow hover:ease-linear hover:duration-300 hover:delay-150"
          >
            Search
          </button>
        </div>

        
        {(moveieName.Response === 'False') ? <div className="text-2xl bg-gradient-to-tr from-white  to-black bg-clip-text text-transparent font-bold">Movie is Not Fount!</div> : (isloading) ? (
          <div className="text-2xl bg-gradient-to-tr from-white  to-black bg-clip-text text-transparent font-bold flex gap-1 items-center">~<Loader/></div>
        ) : (
          <div className="flex  flex-col justify-center items-center gap-1">
            <img src={moveieName.poster} alt="" className="lg:w-[180px] w-[150px] rounded" />
            <h2 className="font-bold text-xl">{moveieName.title}</h2>
            <h2 className="flex gap-2 font-bold text-xl">
              {moveieName.Rating ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                  className="w-6 h-6"
                />
              ) : (
                ""
              )}
              {moveieName.Rating}
            </h2>

            <div className="flex gap-1 text-[18px] text-stone-600 font-semibold justify-center items-center">
              <span>{moveieName.Year}</span>
              {moveieName.Year ? (
                <span className="h-[18px] bg-stone-600 p-[1px]"></span>
              ) : (
                ""
              )}
              <span>{moveieName.Rated}</span>
              {moveieName.Year ? (
                <span className="h-[18px] bg-stone-600 p-[1px]"></span>
              ) : (
                ""
              )}
              <span>{moveieName.Runtime}</span>
            </div>

            <div className="flex flex-col gap-2 justify-center">
              <div>
                <h1 className="text-[20px] font-bold bg-gradient-to-br from-cyan-500 to-white bg-clip-text text-transparent">
                  {moveieName.poster ? moveieName.Plot1 : ""}
                </h1>
                <span className="text-stone-600 text-[16px] font-semibold">
                  {moveieName.Plot}
                </span>
              </div>

              <div>
                <h1 className="text-[20px] font-bold bg-gradient-to-br from-cyan-500 to-white bg-clip-text text-transparent">
                  {moveieName.poster ? moveieName.Cast : ""}
                </h1>
                <span className="text-stone-600 text-[16px] font-semibold">
                  {moveieName.Actors}
                </span>
              </div>
            </div>
          </div>
        )}
              
      </div>
  );
}

export default MusicList;
