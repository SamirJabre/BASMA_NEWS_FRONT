import React from 'react'
import { useSelector } from 'react-redux'

function Passion() {
  const language = useSelector((state) => state.auth.language);
  return (
    <div className={`w-full h-60 sm:h-96 xl:w-2/3 sm:rounded-lg ${language === 'ar' ? 'bg-richMan' : 'bg-richManEng'} bg-no-repeat bg-cover flex flex-col justify-end items-center`}>
        <div className={`h-fit w-full bg-banner bg-no-repeat bg-cover flex flex-col justify-evenly ${language === 'ar' ? 'items-end px-5' : 'items-start px-10'} py-1`}>
          <p className="text-white text-[12px]">{language === 'ar' ? '.لانك ملتزم و تحب عملك' : "Because you're committed and love my work"}</p>
          <p className="text-[10px]">
            {language === 'ar' ? '.نسعى دوما لتقديم الخدمات المصرفية التي تلقى طموحك و تطلعات.' : 'We always strive to provide banking services that meet your ambitions and aspirations.'}
          </p>
        </div>
      </div>
  )
}

export default Passion