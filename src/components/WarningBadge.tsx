interface WarningBadgeProps{
    top:number,
    text:string
}

function WarningBadge({top,text}:WarningBadgeProps) {
    return (
      <>
        <div className={`absolute top-${top}  bg-orange-200 ml-1 p-1 rounded-md text-sm flex items-center mx-auto w-59`}>
            <svg viewBox="0 0 24 24" className="text-yellow-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
                <path fill="currentColor"
                    d="M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z">
                </path>
            </svg>
            <span className="text-yellow-800">
                {text}
            </span>
        </div>
  
      </>
    )
  }
  
  export default WarningBadge
  