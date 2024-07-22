import React from "react";
import DesignComponent from "./DesignComponents";
import { Link } from "lucide-react";
function Grid(){
    return (
<>
<div className="w-full mt-8">
  <div className="relative right-0">
    <ul className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60" data-tabs="tabs" role="list">
      <li className="z-30 flex-auto text-center">
        <Link className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target="" role="tab" aria-selected="true" aria-controls="app">
          <span className="ml-1">App</span>
        </Link>
      </li>
      <li className="z-30 flex-auto text-center">
        <Link className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target="" role="tab" aria-selected="false" aria-controls="message">
          <span className="ml-1">Messages</span>
        </Link>
      </li>
      <li className="z-30 flex-auto text-center">
        <Link className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target="" role="tab" aria-selected="false" aria-controls="settings">
          <span className="ml-1">Settings</span>
        </Link>
      </li>
    </ul>
    <div data-tab-content="" className="p-5">
      <div className="block opacity-100" id="app" role="tabpanel">
        <div role="tabpanel"
          className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="html">
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80"
              alt="image-photo" />
          </div>
        </div>
      </div>
      <div className="hidden opacity-0" id="message" role="tabpanel">
        <div role="tabpanel"
          className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="html">
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
              alt="image-photo" />
          </div>
        </div>
      </div>
      <div className="hidden opacity-0" id="settings" role="tabpanel">
        <div role="tabpanel"
          className="grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="html">
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
              alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="image-photo" />
          </div>
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80"
              alt="image-photo" />
          </div>
 
          <div>
            <img className="w-full h-40 max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
              alt="image-photo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<DesignComponent/>
</>

    )
}
export default Grid