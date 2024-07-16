import React from "react";
function Grid(){
    return (
<>
<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-24 mt-8 flex flex-wrap justify-center gap-6"> 

<div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
<div className="relative  overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
    </div>
  <div class="col-start-3">
  <div className="relative  overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
    </div>
     </div>
     <div className="relative overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
    </div> <div className="relative overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
    </div>
  <div class="row-start-1 col-start-2 col-span-2">
  <div className="relative overflow-hidden text-gray-700 shadow-lg bg-clip-border ">
      <img src="" alt="profile-picture" />
    </div>
    </div>
</div>
</div>

</>

    )
}
export default Grid