import './App.css';
import './styles/output.css';

function App() {
  return (
      <div>
          <nav className="navbar-white h-12 flex bg-black items-center">
              <div className="container flex flex-nowrap overflow-x-auto rounded-2xl">
                  <button
                      className="m-1 text-white text-center p-1 bg-gray-800 border-2 border-gray-200 rounded-md shrink-0">Button
                  </button>
                  <button
                      className="m-1 text-white text-center p-1 bg-gray-800 border-2 border-gray-200 rounded-md shrink-0">Button
                  </button>
                  <button
                      className="m-1 text-white text-center p-1 bg-gray-800 border-2 border-gray-200 rounded-md shrink-0">Button
                  </button>
                  <button
                      className="m-1 text-white text-center p-1 bg-gray-800 border-2 border-gray-200 rounded-md shrink-0">Button
                  </button>
                  <button
                      className="m-1 text-white text-center p-1 bg-gray-800 border-2 border-gray-200 rounded-md shrink-0">Button
                  </button>
                  <button
                      className="m-1 text-white text-center p-1 bg-gray-800 border-2 border-gray-200 rounded-md shrink-0">Button
                  </button>
                  <button
                      className="m-1 text-white text-center p-1 bg-gray-800 border-2 border-gray-200 rounded-md shrink-0">Button
                  </button>

              </div>
              <div className="ml-auto flex items-center rounded-2xl bg-blue-200">

                  <input>
                  </input>
                  <button
                      className="m-1 text-white text-center p-1 bg-gray-800 border-2 border-gray-200 rounded-md justify-items-end">B
                  </button>
                  <button
                      className="m-1 text-white text-center p-1 bg-gray-800 border-2 border-gray-200 rounded-md justify-items-end">?
                  </button>
                  <button
                      className="m-1 text-white text-center p-1 bg-gray-800 border-2 border-gray-200 rounded-md justify-items-end">AL
                  </button>


              </div>
          </nav>
          <div className="flex bg-amber-500">
              <div className="flex-col mr-auto h-screen w-1/6 bg-gray-800 justify-content-between">
              <div className="flex h-20 w-full  border-2 border-gray-200 align-left justify-left">
                      <button className="text-3xl border m-2 w-8 bg-green-400 text-black justify-self-center">T</button>
                      <div className="flex-wrap">
                          <a className="text-gray-100 ml-2" href="https://tailwindcss.com/">Trello Workspace</a>
                          <p className="text-gray-100 ml-2">Premium User</p>
                      </div>
                      <button
                          className="text-2xl border ml-auto m-2 bg-green-400 text-black justify-self-center">&lt;=
                      </button>
                  </div>
                  <button className="w-full text-gray-100 text-left ml-2 border-2 border-gray-100">img Boards</button>

                  <div className="flex">
                      <button className="text-gray-100 text-left border-2 ml-2 border-gray-100 w-5/6">img Members</button>
                      <button className="text-gray-100 text-center border-2 border-gray-100 ml-auto w-1/6">+</button>
                  </div>
                  <div className="flex">
                  <button className="text-gray-100 text-left border-2 ml-2 w-full border-gray-100">
                      img Workspace Settings
                  </button>
                      <button className="text-gray-100 border-2 w-1/6 p-1 text-center border-gray-100">C</button>
                  </div>
                  <p className="text-gray-100 bg-purple-400 w-2/6 ml-2 p-0.25 pl-1">Premium</p>
                  <div className="flex flex-nowrap">
                      <p className="text-gray-100 text-left ml-3">Workspace views</p>
                      <button className="text-gray-100 justify-self-end ml-auto">...</button>
                      <button className="text-gray-100  justify-self-end ml-4 mr-2">+</button>
                  </div>
              </div>
              <div className="w-5/6 h-screen bg-blue-800">
                  <button>button</button>
              </div>
          </div>
      </div>
  );
}

export default App;
